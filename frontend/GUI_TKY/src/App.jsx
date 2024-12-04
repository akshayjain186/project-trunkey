import { Route, Routes } from 'react-router';
import { authProtectedRoutes, publicRoutes } from './routes';
import Authmiddleware from './routes/route';
import React from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { useSelector } from "react-redux";
import { createSelector } from "reselect";


// layouts Format
import VerticalLayout from "./components/VerticalLayout/";
import NonAuthLayout from "./components/NonAuthLayout"

// Import scss
import "./assets/scss/theme.scss";
const App = (props) => {

  const LayoutProperties = createSelector(
    (state) => state.Layout,
    (layout) => ({
      layoutType: layout.layoutType,
    })
  );

  const {
    layoutType
  } = useSelector(LayoutProperties);

  function getLayout(layoutType) {
    let layoutCls = VerticalLayout;
    switch (layoutType) {
      // case "horizontal":
      //   layoutCls = HorizontalLayout;
      //   break;
      default:
        layoutCls = VerticalLayout;
        break;
    }
    return layoutCls;
  }

  const Layout = getLayout(layoutType);
  return (
    <React.Fragment>
      <Routes>
        {publicRoutes.map((route, idx) => (
          <Route
            path={route.path}
            element={<NonAuthLayout>{route.component}</NonAuthLayout>}
            key={idx}
            exact={true}
          />
        ))}
        {authProtectedRoutes.map((route, idx) => (
          <Route
            path={route.path}
            element={
              <Authmiddleware>
                <Layout>{route.component}</Layout>
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

App.propTypes = {
  layout: PropTypes.any,
};

const mapStateToProps = (state) => {
  return {
    layout: state.Layout,
  };
};

export default connect(mapStateToProps, null)(App);