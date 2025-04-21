import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header/Header";
import Home from "./components/pages/Home";
import Footer from "./components/Layout/Footer/Footer";
import Contest from "./components/pages/Contest";
import Auth from "./components/pages/Auth";
import CreateGroupPage from "./components/pages/GroupSection/CreateGroupPage";
import DiscoverGroupsPage from "./components/pages/GroupSection/DiscoverGroupsPage";
import InterviewProblemsPage from "./components/pages/PracticeSections/InterviewProblemsPage";
import DSAConcepts from "./components/pages/PracticeSections/DsaConcepts";
import PastContest from "./components/pages/PracticeSections/PastContest";
import POTD from "./components/pages/PracticeSections/POTD";


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contest" element = {<Contest/>}/>
        <Route path="/groups/my" element={<CreateGroupPage />} />
        <Route path="/groups/discover" element={<DiscoverGroupsPage />} />

        <Route path="/practice/interview" element={<InterviewProblemsPage />} />
        <Route path="/practice/dsa" element={<DSAConcepts />} />
        <Route path="/practice/past" element={<PastContest />} />
        <Route path="/practice/potd" element={<POTD />} />
        

        
        <Route path="/login" element={<Auth />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
