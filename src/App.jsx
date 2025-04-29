import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header/Header";
import FloatingParticles from "./components/Extras/FloatingParticles";
import Home from "./components/pages/Home";
import Footer from "./components/Layout/Footer/Footer";
import Contest from "./components/pages/Contest";
import CreateGroupPage from "./components/pages/GroupSection/CreateGroupPage";
import DiscoverGroupsPage from "./components/pages/GroupSection/DiscoverGroupsPage";
import InterviewProblemsPage from "./components/pages/PracticeSections/InterviewProblemsPage";
import DSAConcepts from "./components/pages/PracticeSections/DsaConcepts";
import PastContest from "./components/pages/PracticeSections/PastContest";
import POTD from "./components/pages/PracticeSections/POTD";
import Discussion from "./components/pages/Discussion";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import UnderDevelopment from "./components/Extras/UnderDevelopment ";
import MobileToast from "./components/Extras/MobileToast";
import MeetDeveloper from "./components/Extras/MeetDeveloper";
import ScrollToTop from "./components/Extras/ScrollToTop";

import Leaderboard from "./components/pages/Leaderboard";



function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header/>
      <FloatingParticles/>
      <Routes>
        <Route path="/" element={
          <>
            <Home/>
            <MobileToast show={true}/>
          </>
        } />
        <Route path="/contest" element = {<Contest/>}/>
        <Route path="/groups/my" element={<CreateGroupPage />} />
        <Route path="/groups/discover" element={<DiscoverGroupsPage />} />

        <Route path="/practice/interview" element={<InterviewProblemsPage />} />
        <Route path="/practice/dsa" element={<DSAConcepts />} />
        <Route path="/practice/past" element={<PastContest />} />
        <Route path="/practice/potd" element={<POTD />} />
        
        <Route path="/blog" element={<Discussion />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/aboutme" element={<MeetDeveloper />} />
        
        <Route path="*" element={<UnderDevelopment />} />
      </Routes>
      <Footer/>
      
    </Router>
  );
}

export default App;
