import React from 'react'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from '../pages/'
import AboutMe from '../pages/AboutMe'
 const MainRoutes = () => {
    return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/aboutMe" element={<AboutMe />} />
        </Routes>
      </Router>

     
    )
}
export default MainRoutes;