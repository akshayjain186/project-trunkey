import { combineReducers } from "redux";

// Front
import Layout from "./layout/reducer";

// Authentication
import Login from "./auth/login/reducer";
import Profile from "./auth/profile/reducer";

//Dashboard 
import Dashboard from "./dashboard/reducer";

const rootReducer = combineReducers({

  Layout,
  Login,
  Profile,
 
  Dashboard,
 
});

export default rootReducer;
