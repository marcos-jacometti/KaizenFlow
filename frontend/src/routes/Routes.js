import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import HomePage from "../pages/home";
import Configs from "../pages/configs";
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
import Classes from "../pages/classes";
import AllUsers from "../pages/users/allUsers";
import Projects from "../pages/projects";
import SelectedProject from "../pages/selectedProject";
import User from "../pages/users/user";
import PrivateRoute from "./PrivateRoute";

const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route 
                    path="/home" 
                    element={
                        <PrivateRoute>
                            <HomePage />
                        </PrivateRoute>
                    } 
                />
                <Route 
                    path="/classes" 
                    element={
                        <PrivateRoute>
                            <Classes />
                        </PrivateRoute>
                    } 
                />
                <Route 
                    path="/projects" 
                    element={
                        <PrivateRoute>
                            <Projects />
                        </PrivateRoute>
                    } 
                />
                <Route 
                    path="/graphics" 
                    element={
                        <PrivateRoute>
                            <Graphics />
                        </PrivateRoute>
                    } 
                />
                <Route 
                    path="/configs" 
                    element={
                        <PrivateRoute>
                            <Configs />
                        </PrivateRoute>
                    } 
                />
                <Route 
                    path="/allUsers" 
                    element={
                        <PrivateRoute>
                            <AllUsers />
                        </PrivateRoute>
                    } 
                />
                <Route 
                    path="/user" 
                    element={
                        <PrivateRoute>
                            <User />
                        </PrivateRoute>
                    } 
                />
                <Route 
                    path="/selectedProjects/:projectId" 
                    element={
                        <PrivateRoute>
                            <SelectedProject />
                        </PrivateRoute>
                    } 
                />

                <Route 
                    path="/article01" 
                    element={
                        <PrivateRoute>
                            <Article01 />
                        </PrivateRoute>
                    } 
                />
                <Route 
                    path="/article02" 
                    element={
                        <PrivateRoute>
                            <Article02 />
                        </PrivateRoute>
                    } 
                />
                <Route 
                    path="/article03" 
                    element={
                        <PrivateRoute>
                            <Article03 />
                        </PrivateRoute>
                    } 
                />
                <Route 
                    path="/article04" 
                    element={
                        <PrivateRoute>
                            <Article04 />
                        </PrivateRoute>
                    } 
                />
                <Route 
                    path="/article05" 
                    element={
                        <PrivateRoute>
                            <Article05 />
                        </PrivateRoute>
                    } 
                />
                <Route 
                    path="/article06" 
                    element={
                        <PrivateRoute>
                            <Article06 />
                        </PrivateRoute>
                    } 
                />
                <Route 
                    path="/article07" 
                    element={
                        <PrivateRoute>
                            <Article07 />
                        </PrivateRoute>
                    } 
                />
                <Route 
                    path="/article08" 
                    element={
                        <PrivateRoute>
                            <Article08 />
                        </PrivateRoute>
                    } 
                />
                <Route 
                    path="/article09" 
                    element={
                        <PrivateRoute>
                            <Article09 />
                        </PrivateRoute>
                    } 
                />
                <Route 
                    path="/article10" 
                    element={
                        <PrivateRoute>
                            <Article10 />
                        </PrivateRoute>
                    } 
                />
                <Route 
                    path="/article11" 
                    element={
                        <PrivateRoute>
                            <Article11 />
                        </PrivateRoute>
                    } 
                />
                <Route 
                    path="/article12" 
                    element={
                        <PrivateRoute>
                            <Article12 />
                        </PrivateRoute>
                    } 
                />
                <Route 
                    path="/article13" 
                    element={
                        <PrivateRoute>
                            <Article13 />
                        </PrivateRoute>
                    } 
                />
                <Route 
                    path="/article14" 
                    element={
                        <PrivateRoute>
                            <Article14 />
                        </PrivateRoute>
                    } 
                />
            </Routes>
        </Router>
    );
}

export default AppRoutes;