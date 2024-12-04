import { Navigate } from 'react-router-dom';
import {  Login, SignUp,Dashboard } from '@/pages';

const authProtectedRoutes = [
  { path: '/dashboard', component: <Dashboard /> },
  { path: '/', exact: true, component: <Navigate to="/dashboard" /> },
];
const publicRoutes = [
  { path: '/login', component: <Login /> },
  { path: '/signUp', component: <SignUp /> },
];

export { authProtectedRoutes, publicRoutes };
