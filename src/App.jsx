import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header/Header";
import Home from "./components/pages/Home";
import Footer from "./components/Layout/Footer/Footer";
import Contest from "./components/pages/Contest";


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contest" element = {<Contest/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
//testing
