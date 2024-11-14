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


const authProtectedRoutes = [
  { path: "/dashboard", component: <Dashboard /> },
  
  { path: "/my-job", component: <MyJobs/> },

  { path: "/", exact: true, component: <Navigate to="/dashboard" /> },
  
];

const publicRoutes = [
  { path: "/logout", component: <Logout /> },
  { path: "/login", component: <Login/> },
  { path: "/home", component: <Home/> },
  
];

// export { authProtectedRoutes, publicRoutes };
export { authProtectedRoutes, publicRoutes }
