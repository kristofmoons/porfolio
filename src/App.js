import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AchievementPage from "./pages/AchievementPage";

function App() {
  return (

          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<LandingPage/>}/>
                  <Route path="/projects" element={<AchievementPage/>}/>

              </Routes>
          </BrowserRouter>
  );
}

export default App;
