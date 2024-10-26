// src/components/Chatbox.js
import React, { useState } from "react";

function Chatbox() {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
      // You can also add logic here to send user input to a chatbot API and display the response
    }
  };

  return (
    <section className="chatbox">
      <h3>Chat with Us</h3>
      <div className="chat-history">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message here..."
      />
      <button onClick={handleSend}>Send</button>
    </section>
  );
}

export default Chatbox;
