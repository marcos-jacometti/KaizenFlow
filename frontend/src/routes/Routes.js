import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/home";
import Configs from "../pages/configs";
import Articles from "../pages/articles";
import Teams from "../pages/teams";
import Graphics from "../pages/graphics";
import Article01 from "../components/specific/articles/article01";
import Article02 from "../components/specific/articles/article02";
import Article03 from "../components/specific/articles/article03";
import Article04 from "../components/specific/articles/article04";
import Article05 from "../components/specific/articles/article05";
import Article06 from "../components/specific/articles/article06";
import Article07 from "../components/specific/articles/article07";
import Article08 from "../components/specific/articles/article08";
import Article09 from "../components/specific/articles/article09";
import Article10 from "../components/specific/articles/article10";
import Article11 from "../components/specific/articles/article11";
import Article12 from "../components/specific/articles/article12";
import Article13 from "../components/specific/articles/article13";
import Article14 from "../components/specific/articles/article14";

const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={ <HomePage /> } />
                <Route path="/articles" element={ <Articles /> } />
                <Route path="/teams" element={ <Teams /> } />
                <Route path="/graphics" element={ <Graphics /> } />
                <Route path="/configs" element={ <Configs /> } />

                {/* Articles links */}
                <Route path="/article01" element={ <Article01 /> } />
                <Route path="/article02" element={ <Article02 /> } />
                <Route path="/article03" element={ <Article03 /> } />
                <Route path="/article04" element={ <Article04 /> } />
                <Route path="/article05" element={ <Article05 /> } />
                <Route path="/article06" element={ <Article06 /> } />
                <Route path="/article07" element={ <Article07 /> } />
                <Route path="/article08" element={ <Article08 /> } />
                <Route path="/article09" element={ <Article09 /> } />
                <Route path="/article10" element={ <Article10 /> } />
                <Route path="/article11" element={ <Article11 /> } />
                <Route path="/article12" element={ <Article12 /> } />
                <Route path="/article13" element={ <Article13 /> } />
                <Route path="/article14" element={ <Article14 /> } />
            </Routes>
        </Router>
    );
}

export default AppRoutes;