import { Route, Routes } from 'react-router';
import { authProtectedRoutes, publicRoutes } from './routes';
import Authmiddleware from './routes/route';
import React from 'react';
// Import scss
import "./assets/scss/theme.scss";
function App() {
  return (
    <React.Fragment>
      <Routes>
        {publicRoutes.map((route, idx) => (
          <Route
            path={route.path}
            element={route.component}
            key={idx}
            exact={true}
          />
        ))}
        {authProtectedRoutes.map((route, idx) => (
          <Route
            path={route.path}
            element={
              <Authmiddleware>
                {route.component}
              </Authmiddleware>
            }
            key={idx}
            exact={true}
          />
        ))}
      </Routes>
    </React.Fragment>
  );
}

export default App;
