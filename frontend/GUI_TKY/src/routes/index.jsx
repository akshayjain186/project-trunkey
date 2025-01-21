import { Navigate } from 'react-router-dom';
import { Home, Login, SignUp } from '@/pages';

const authProtectedRoutes = [
  { path: '/home', component: <Home /> },
  { path: '/', exact: true, component: <Navigate to="/Home" /> },
];
const publicRoutes = [
  { path: '/login', component: <Login /> },
  { path: '/signUp', component: <SignUp /> },
];

export { authProtectedRoutes, publicRoutes };
