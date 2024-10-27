// src/App.js
import React from "react";
import Hero from "./components/Hero";
// import Carousel from "./components/NameCarousel";
import Chatbox from "./pages/Chatbox";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import About from "./pages/About";
import "./App.css";
import NameCarousel from "./components/NameCarousel";
import Services from "./pages/Services";
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
        <Route path='/chatbot' element={<Chatbox />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/services' element={<Services />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
