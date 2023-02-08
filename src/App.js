import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AchievementPage from "./pages/AchievementPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (

          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<LandingPage/>}/>
                  <Route path="/portfolio" element={<AchievementPage/>}/>
                  <Route path="/contact" element={<ContactPage/>}/>


              </Routes>
          </BrowserRouter>
  );
}

export default App;
