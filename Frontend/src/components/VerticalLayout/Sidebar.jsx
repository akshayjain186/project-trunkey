import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import withRouter from "../Common/withRouter";

//i18n
import { withTranslation } from "react-i18next";
import SidebarContent from "./SidebarContent";

import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.svg";
import logoLightPng from "../../assets/images/logo-light1.png";
import logoLightSvg from "../../assets/images/";
import logoDark from "../../assets/images/logo-dark.png";
import Group from "../../assets/images/Group.png"
import Icon from "../../assets/images/Icon.png"

const Sidebar = (props) => {
  return (
    <React.Fragment>
      <div className="vertical-menu">
        <div className="navbar-brand-box d-flex justify-content-start">
          <Link to="/" className="logo logo-dark">
            <span className="logo-sm">
              <img src={logo} alt="" height="22" />
            </span>
            <span className="logo-lg">
              <img src={logoDark} alt="" height="17" />
            </span>
          </Link>

          <Link to="/" className="logo logo-light">
            <span className="me-2 ">
              <img src={Icon} alt="" height="30" width="30"/>
            </span>
            <span className="logo-lg ms-2 me-n2">
              <img src={Group} alt="" height="19" />
            </span>
          </Link>
        </div>
        <div data-simplebar className="h-100">
          {props.type !== "condensed" ? <SidebarContent /> : <SidebarContent />}
        </div>
        
        <div className="sidebar-background">
       </div>
      </div>
    </React.Fragment>
  );
};

Sidebar.propTypes = {
  type: PropTypes.string,
};

const mapStatetoProps = (state) => {
  return {
    layout: state.Layout,
  };
};
export default connect(
  mapStatetoProps,
  {}
)(withRouter(withTranslation()(Sidebar)));
