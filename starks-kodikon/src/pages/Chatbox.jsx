import React, { useState } from "react";
// import Carousel from "../components/carousel";
import "./Chatbox.css"; // Import the CSS styling
import NameCarousel from "../components/NameCarousel";
function Chatbox() {
  const [messages, setMessages] = useState([
    { text: "Hi! Please tell us what you would like to know", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
      // Add logic here to send user input to a chatbot API and display the response
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
