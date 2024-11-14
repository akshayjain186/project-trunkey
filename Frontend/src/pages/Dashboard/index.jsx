import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
} from "reactstrap";
import { Link } from "react-router-dom";
import classNames from "classnames";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//i18n
import { withTranslation } from "react-i18next";

//redux
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";

const Dashboard = (props) => {

  const DashboardProperties = createSelector(
    (state) => state.Dashboard,
    (dashboard) => ({
      
    })
  );

  const {
    chartsData
  } = useSelector(DashboardProperties);


  //meta title
  document.title = "Dashboard | Turnkey";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title={props.t("Dashboards")} breadcrumbItem={props.t("Dashboard")} />
          <Row>
            <Col xl="4">
             
            </Col>
          </Row>
        </Container>
      </div>

    </React.Fragment>
  );
};

Dashboard.propTypes = {
  t: PropTypes.any,
  chartsData: PropTypes.any,
  onGetChartsData: PropTypes.func,
};

export default withTranslation()(Dashboard);
