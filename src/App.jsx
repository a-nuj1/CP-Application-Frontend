import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header/Header";
import Home from "./components/pages/Home";
import Footer from "./components/Layout/Footer/Footer";
import Contest from "./components/pages/Contest";
import Auth from "./components/pages/Auth";



function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contest" element = {<Contest/>}/>
        <Route path="/login" element={<Auth />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
