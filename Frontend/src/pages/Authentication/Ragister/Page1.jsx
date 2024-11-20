
import React, { useState } from "react";

import {
  Container,
  Row,
  Col,
  Card,
  CardBody,

  NavItem,
  NavLink,

} from "reactstrap";
import classnames from "classnames";
import { Link } from "react-router-dom";


const Page1 = props => {
  const [activeTab, setActiveTab] = useState(1);
  const [passedSteps, setPassedSteps] = useState([1]);

  const toggleTab = tab => {
    if (activeTab !== tab) {
      const modifiedSteps = [...passedSteps];
      modifiedSteps.push(tab);
      setActiveTab(tab);
      setPassedSteps(modifiedSteps);
    }
  };

  //meta title
  document.title = " ragister | Trunkey";


  const workerTypes = [
    { id: 1, label: "Bitcoin", iconClass: "mdi mdi-bitcoin font-size-24 text-warning align-middle me-2" },
    { id: 2, label: "Ethereum", iconClass: "mdi mdi-ethereum font-size-24 text-primary align-middle me-2" },
    { id: 3, label: "Litecoin", iconClass: "mdi mdi-litecoin font-size-24 text-secondary align-middle me-2" },
    { id: 1, label: "Bitcoin", iconClass: "mdi mdi-bitcoin font-size-24 text-warning align-middle me-2" },
    { id: 2, label: "Ethereum", iconClass: "mdi mdi-ethereum font-size-24 text-primary align-middle me-2" },
    { id: 3, label: "Litecoin", iconClass: "mdi mdi-litecoin font-size-24 text-secondary align-middle me-2" },
    { id: 1, label: "Bitcoin", iconClass: "mdi mdi-bitcoin font-size-24 text-warning align-middle me-2" },
    { id: 2, label: "Ethereum", iconClass: "mdi mdi-ethereum font-size-24 text-primary align-middle me-2" },
    { id: 3, label: "Litecoin", iconClass: "mdi mdi-litecoin font-size-24 text-secondary align-middle me-2" },
  ];







  return (

    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <div className="text-center mb-4 ">
            <Row className="justify-content-center">
              <Col lg="10">
                <button className="border-0 rounded-4 p-2">Small jon request</button>
              </Col>
            </Row>
          </div>
          <div className="text-center mb-4">
            <Row className="justify-content-center">
              <Col lg="10">
                <h4>Register your next project!</h4>
                <span className="text-muted">Let us what you need and we'll be in touch as soon as possible </span>
              </Col>
            </Row>
          </div>
          <div className="d-flex mb-4 justify-content-center d-flex">
            <Row className="d-flex">
              <Col lg="10">
                {/* <div className="steps clearfix">
                  <ul className="d-flex gap-5">
                    <NavItem
                      className={classnames({
                        current: activeTab === 1,
                      })}
                    >
                      <NavLink
                        className={classnames({
                          active: activeTab === 1,
                        })}
                        onClick={() => {
                          toggleTab(1);
                        }}
                        disabled={!passedSteps.includes(1)}
                      >
                        <span className="number">1.</span>
                       Work TYpe
                      </NavLink>
                    </NavItem>
                    <NavItem
                      className={classnames({
                        current: activeTab === 2,
                      })}
                    >
                      <NavLink
                        className={classnames({
                          active: activeTab === 2,
                        })}
                        onClick={() => {
                          toggleTab(2);
                        }}
                        disabled={!passedSteps.includes(2)}
                      >
                        <span className="number">2.</span>
                       Choose Categories
                      </NavLink>
                    </NavItem>
                    <NavItem
                      className={classnames({
                        current: activeTab === 3,
                      })}
                    >
                      <NavLink
                        className={classnames({
                          active: activeTab === 3,
                        })}
                        onClick={() => {
                          toggleTab(3);
                        }}
                        disabled={!passedSteps.includes(3)}
                      >
                        <span className="number">3.</span>
                       Discription and contact info
                      </NavLink>
                    </NavItem>
                  </ul>
                </div> */}
              </Col>
            </Row>
          </div>
          <Row className="justify-content-center">
            <Col xl="6" sm="6">
              <Card className="rounded-4">
                <CardBody className="ms-3">
                  <h4 className="text-start mb-3">Choose type of worker you need</h4>
                  <span>worker</span>
                  <div className="d-flex flex-wrap gap-3">
                    {workerTypes.map((worker) => (
                      <label
                        className="card-radio-label  text-center"
                        key={worker.id}
                        style={{ minWidth: "180px" }} // Minimum width for consistent appearance
                      >
                        <div className="card-radio py-3 border rounded d-flex">
                          <i className={worker.iconClass} />
                          <div>
                            <div className="mt-2">{worker.label}</div>
                          </div>
                        </div>

                        <input
                          type="radio"
                          name="currency"
                          id={`workerType${worker.id}`}
                          className="card-radio-input"
                        />
                      </label>
                    ))}
                  </div>

                  <span>Project manager</span>
                  <div className="d-flex flex-wrap  gap-4">
                    {workerTypes.map((worker) => (
                      <label
                        className="card-radio-label text-center"
                        key={worker.id}
                        style={{ minWidth: "180px" }} // Minimum width for consistent appearance
                      >
                        <div className="card-radio py-3 px-3 border rounded  d-flex">
                          <i className={worker.iconClass} />
                          <div>
                            <div className="mt-2">{worker.label}</div>
                          </div>
                        </div>

                        <input
                          type="radio"
                          name="currency"
                          id={`workerType${worker.id}`}
                          className="card-radio-input"
                        />
                      </label>
                    ))}
                  </div>
                </CardBody>
              </Card>
              <div className="actions clearfix text-end">


                <button 
                  className={
                    `  btn-primary p-2 text-white (activeTab === 3 ? "next disabled" : "next" )`
                  }
                >
                  <Link
                    to="#"
                    onClick={() => {
                      toggleTab(activeTab + 1);
                    }}
                  >
                    Next
                  </Link>
                </button>

              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>

  );
};

export default Page1
