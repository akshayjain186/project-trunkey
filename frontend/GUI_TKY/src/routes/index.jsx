import { Navigate } from 'react-router-dom';
import {  Login, SignUp,Dashboard } from '@/pages';
import AddnewPage from '@/pages/ControlPanel/InternationalAdmin/AddnewPage';
import LicensesPage from '@/pages/ControlPanel/InternationalAdmin/LicensesPage';
import OwnerPage from '@/pages/ControlPanel/InternationalAdmin/OwnerPage';

const authProtectedRoutes = [
  { path: '/dashboard', component: <Dashboard /> },
  { path: '/', exact: true, component: <Navigate to="/dashboard" /> },
];
const publicRoutes = [
  { path: '/login', component: <Login /> },
  { path: '/signUp', component: <SignUp /> },
  { path: '/addnew', component: <AddnewPage /> },
  { path: '/licenses', component: <LicensesPage /> },
  { path: '/owner', component: <OwnerPage /> },


];

export { authProtectedRoutes, publicRoutes };
