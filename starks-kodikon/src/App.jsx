// src/App.js
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Chatbox from "./components/Chatbox";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Chatbox />
    </div>
  );
}

export default App;
