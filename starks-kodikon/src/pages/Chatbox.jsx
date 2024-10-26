import React, { useState } from "react";
import "./Chatbox.css";
import NameCarousel from "../components/NameCarousel";

function Chatbox() {
  const [messages, setMessages] = useState([
    { text: "Hi! Please tell us what you would like to know", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage = { text: input, sender: "user" };
      setMessages((prevMessages) => [...prevMessages, userMessage]);

      // Send user input to Flask backend
      try {
        const response = await fetch("http://127.0.0.1:5000/api/query", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query: input }),
        });

        const data = await response.json();

        // Check for success response
        if (data.status === "success") {
          // Build bot response with both summary and full text
          const botResponse = data.results.map((res) => {
            return `Summary: ${res.summary}\nFull Text: ${res.full_text}`;
          }).join("\n\n"); // Join responses with two new lines

          // Add bot response to the chat
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: botResponse, sender: "bot" },
          ]);
        } else {
          // Handle error response
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: data.message, sender: "bot" },
          ]);
        }
      } catch (error) {
        console.error("Error fetching response:", error);
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "Error: Could not reach the server.", sender: "bot" },
        ]);
      }

      setInput(""); // Clear input field
    }
  };

  return (
    <div>
      <NameCarousel />
      <section className="chatbox">
        <h3>Chat with Us</h3>
        <div className="chat-history">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              {message.text}
            </div>
          ))}
        </div>
        <div className="chat-input-area">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message here..."
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </section>
    </div>
  );
}

export default Chatbox;


