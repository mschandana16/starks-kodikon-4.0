// src/components/Chatbox.js
import React, { useState } from "react";
import "../styles/Chatbox.css";

function Chatbox() {
  const [messages, setMessages] = useState([
    { text: "Hi! Please tell us about yourself", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
      // Add chatbot API logic here to get the bot's response
      // Example: setMessages([...messages, { text: response, sender: "bot" }]);
    }
  };

  return (
    <section className="chatbox">
      <div className="chat-header">Chat with Us</div>
      <div className="chat-history">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            <div className="message-text">{message.text}</div>
          </div>
        ))}
      </div>
      <div className="input-section">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message here..."
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </section>
  );
}

export default Chatbox;
