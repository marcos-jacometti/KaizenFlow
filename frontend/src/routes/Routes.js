import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/home";
import Configs from "../pages/configs";
import Articles from "../pages/articles";
import Teams from "../pages/teams";
import Graphics from "../pages/graphics";

const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={ <HomePage /> } />
                <Route path="/articles" element={ <Articles /> } />
                <Route path="/teams" element={ <Teams /> } />
                <Route path="/graphics" element={ <Graphics /> } />
                <Route path="/configs" element={ <Configs /> } />
            </Routes>
        </Router>
    );
}

export default AppRoutes;