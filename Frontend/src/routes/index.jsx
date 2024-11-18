import React from "react";
import { Navigate } from "react-router-dom";

// // Pages Component

// // Authentication related pages
import Login from "../pages/Authentication/Login";
import Home from "../pages/Authentication/home/Home"

import Logout from "../pages/Authentication/Logout";

// // // Dashboard
import Dashboard from "../pages/Dashboard/index";

import MyJobs from "../pages/MyJobs/MyJobs";
import Signup  from "../pages/Authentication/Signup"

import { element } from "prop-types";
import PostJobDetails from "../pages/MyJobs/AnswerDetails/PostJobDetails";


const authProtectedRoutes = [
  { path: "/dashboard", component: <Dashboard /> },
  
  { path: "/my-jobs", component: <MyJobs/> },
   
   { path: "/job-details", component: <PostJobDetails/>},
  { path: "/", exact: true, component: <Navigate to="/dashboard" /> },
  
];

const publicRoutes = [
  { path: "/logout", component: <Logout /> },
  { path: "/login", component: <Login/> },
  { path: "/signup", component: <Signup/>},
  { path: "/home", component: <Home/> },
  
];

// export { authProtectedRoutes, publicRoutes };
export { authProtectedRoutes, publicRoutes }
