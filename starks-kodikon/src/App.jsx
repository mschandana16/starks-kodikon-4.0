// src/App.js
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Carousel from "./components/carousel";
// import Chatbox from "./components/Chatbox";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Hero />
//     </div>
//   );
// }

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Hero />}></Route>
        <Route path='/chatbot' element={<Carousel />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
