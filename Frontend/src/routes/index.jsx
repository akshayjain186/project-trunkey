import React from "react";
import { Navigate } from "react-router-dom";

// // Pages Component

// // Authentication related pages
import Login from "../pages/Authentication/Login";
import Home from "../pages/Authentication/home/Home"

import  Ragisterpage from '../pages/Authentication/Ragister/Ragisterpage'


import Logout from "../pages/Authentication/Logout";

// // // Dashboard
import Dashboard from "../pages/Dashboard/index";

import MyJobs from "../pages/MyJobs/MyJobs";
import Signup  from "../pages/Authentication/Signup"
 import ForgotPassward from "../pages/Authentication/ForgotPassward"
//import ResetPaassword from "../pages/Authentication/ResetPassward";
import { element } from "prop-types";
import PostJobDetails from "../pages/MyJobs/AnswerDetails/PostJobDetails";
import { components } from "react-select";
import ResetPassward from  "../pages/Authentication/ResetPassward"
import BigJobForm from "../pages/Authentication/Ragister/BigJobForm";
import AddNew from "../pages/Controlpannel/AddNew";
import UserDetails from "../pages/Controlpannel/UserDetails";
import License from "../pages/Controlpannel/Licenses";

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
  { path: "/forgot-password", component: <ForgotPassward/>},
  { path: "/ragister", component: < Ragisterpage/>},

  { path: "/bigjob", component: < BigJobForm/>},
  { path: "/Licenses", component: <License/> },
  { path: "/addnew", component: <AddNew/> },
  { path: "/userdetails", component: <UserDetails/> },
  

 
  { path: "/home", component: <Home/> },
  { path: "/reset-password", component: <ResetPassward/> },
  { path: "/reset-password", component: <ResetPassward/> },

];

// export { authProtectedRoutes, publicRoutes };
export { authProtectedRoutes, publicRoutes }
