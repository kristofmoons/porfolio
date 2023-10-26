import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {HashRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AchievementPage from "./pages/AchievementPage";
import ContactPage from "./pages/ContactPage";
import CvPage from "./pages/CvPage";

function App() {
  return (

    <HashRouter>
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/portfolio" element={<AchievementPage/>} />
      <Route path="/contact" element={<ContactPage/>} />
    </Routes>
  </HashRouter>
  
  );
}

export default App;