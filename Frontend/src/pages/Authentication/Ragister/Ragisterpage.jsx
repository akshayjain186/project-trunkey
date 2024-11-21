import React, { useState } from "react"
import {
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  NavItem,
  NavLink,
  Row,
  InputGroup,
  TabContent,
  TabPane,
  Button,
} from "reactstrap"

import classnames from "classnames"
import { Link } from "react-router-dom"

//Import Breadcrumb
// import Breadcrumbs from "../../components/Common/Breadcrumb"

const Ragisterpage = () => {

  const [data_attr, setData_attr] = useState(56);
  const Rooms = [
    { id: 1, label: "Bathroom", iconClass: "mdi mdi-bitcoin font-size-24 text-warning align-middle me-2" },
    { id: 2, label: "Kitchen", iconClass: "mdi mdi-ethereum font-size-24 text-primary align-middle me-2" },
    { id: 3, label: "Toilet", iconClass: "mdi mdi-litecoin font-size-24 text-secondary align-middle me-2" },
    { id: 4, label: "Washing room", iconClass: "mdi mdi-bitcoin font-size-24 text-warning align-middle me-2" },
    { id: 5, label: "Living room", iconClass: "mdi mdi-ethereum font-size-24 text-primary align-middle me-2" },
    { id: 6, label: "Bedroom", iconClass: "mdi mdi-litecoin font-size-24 text-secondary align-middle me-2" },
    { id: 7, label: "Children room", iconClass: "mdi mdi-bitcoin font-size-24 text-warning align-middle me-2" },
    { id: 8, label: "Technical room", iconClass: "mdi mdi-ethereum font-size-24 text-primary align-middle me-2" },
    { id: 9, label: "Storage room", iconClass: "mdi mdi-litecoin font-size-24 text-secondary align-middle me-2" },
    { id: 10, label: "Hallway", iconClass: "mdi mdi-litecoin font-size-24 text-secondary align-middle me-2" },
  ];
  const outsidework = [
    { id: 1, label: "Facade", iconClass: "mdi mdi-bitcoin font-size-24 text-warning align-middle me-2" },
    { id: 2, label: "Roofing", iconClass: "mdi mdi-ethereum font-size-24 text-primary align-middle me-2" },
    { id: 3, label: "Ground work", iconClass: "mdi mdi-litecoin font-size-24 text-secondary align-middle me-2" },

  ];
  const newbuilding = [
    { id: 1, label: "Superstructure and extension", iconClass: "mdi mdi-bitcoin font-size-24 text-warning align-middle me-2" },
    { id: 2, label: "Garage", iconClass: "mdi mdi-ethereum font-size-24 text-primary align-middle me-2" },
    { id: 3, label: "New home", iconClass: "mdi mdi-litecoin font-size-24 text-secondary align-middle me-2" },

  ];



  const workerTypes = [
    { id: 1, label: "Carpenter and building tradesmen", iconClass: "mdi mdi-bitcoin font-size-24 text-warning align-middle me-2" },
    { id: 2, label: "Cleaner", iconClass: "mdi mdi-ethereum font-size-24 text-primary align-middle me-2" },
    { id: 3, label: "Demolition, tiling and concrete sawing", iconClass: "mdi mdi-litecoin font-size-24 text-secondary align-middle me-2" },
    { id: 4, label: "Electrician", iconClass: "mdi mdi-bitcoin font-size-24 text-warning align-middle me-2" },
    { id: 5, label: "Foundation and landscaping worker", iconClass: "mdi mdi-ethereum font-size-24 text-primary align-middle me-2" },
    { id: 6, label: "Glass master and glazier", iconClass: "mdi mdi-litecoin font-size-24 text-secondary align-middle me-2" },
    { id: 7, label: "Plumber", iconClass: "mdi mdi-bitcoin font-size-24 text-warning align-middle me-2" },
    { id: 8, label: "Roofer and tinsmith", iconClass: "mdi mdi-ethereum font-size-24 text-primary align-middle me-2" },
    { id: 9, label: "Tiler, bricklayer and plastering", iconClass: "mdi mdi-litecoin font-size-24 text-secondary align-middle me-2" },
  ];



  //meta title
  document.title = "Ragister | Trunkey";

  const [activeTab, setactiveTab] = useState(1)
  const [passedSteps, setPassedSteps] = useState([1])

  function toggleTab(tab) {
    if (activeTab !== tab) {
      var modifiedSteps = [...passedSteps, tab]
      if (tab >= 1 && tab <= 4) {
        setactiveTab(tab)
        setPassedSteps(modifiedSteps)
      }
    }
  }
  return (
    <React.Fragment>

      <Container fluid={true} style={{ fontFamily: "Montserrat" }}>
        <div className="text-center mb-4 ">
          <Row className="justify-content-center">
            <Col lg="10">
              <button className="border-0 rounded-4 p-2 mt-3 text-muted">Small job request</button>
            </Col>
          </Row>
        </div>
        <div className="text-center mb-4">
          <Row className="justify-content-center">
            <Col lg="10">
              <h4 className="fs-3 fw-bold ">Register your next project!</h4>
              <span className="text-muted fs-5">Let us what you need and we'll be in touch as soon as possible </span>
            </Col>
          </Row>
        </div>
        {/* <Breadcrumbs title="Forms" breadcrumbItem="Form Wizard" /> */}
        <Row>
          <Col lg="12">
            <div className="wizard clearfix">
              <div className="steps clearfix">
                <ul>
                  <NavItem
                    className={classnames({ current: activeTab === 1 })}
                  >
                    <NavLink
                      className={classnames({ current: activeTab === 1 })}
                      onClick={() => {
                        setactiveTab(1)
                      }}
                      disabled={!(passedSteps || []).includes(1)}
                    >
                      <span className="number">1.</span> Work Type
                    </NavLink>
                  </NavItem>
                  <NavItem
                    className={classnames({ current: activeTab === 2 })}
                  >
                    <NavLink
                      className={classnames({ active: activeTab === 2 })}
                      onClick={() => {
                        setactiveTab(2)
                      }}
                      disabled={!(passedSteps || []).includes(2)}
                    >
                      <span className="number">2.</span> Choose Category
                    </NavLink>
                  </NavItem>
                  <NavItem
                    className={classnames({ current: activeTab === 3 })}
                  >
                    <NavLink
                      className={classnames({ active: activeTab === 3 })}
                      onClick={() => {
                        setactiveTab(3)
                      }}
                      disabled={!(passedSteps || []).includes(3)}
                    >
                      <span className="number">3.</span> Description and contact information info
                    </NavLink>
                  </NavItem>

                </ul>
              </div>
              <div className="content clearfix">


                <TabContent activeTab={activeTab} className="body">

                  <TabPane tabId={1}>
                    <Row className="justify-content-center">
                      <Col xl="7" sm="7">
                        <Card className="rounded-4">
                          <CardBody className="ms-3">
                            <h4 className="text-start mb-3 fw-semibold">Choose type of worker you need</h4>
                            <span className="text-muted">worker</span>
                            <div className="d-flex flex-wrap gap-3 mt-2">
                              {workerTypes.map((worker) => (
                                <label
                                  className="card-radio-label  text-center"
                                  key={worker.id}
                                  style={{ Width: "180px" }}
                                >
                                  <div className="card-radio py-3 border rounded d-flex">
                                    <i className={worker.iconClass} />
                                    <div>
                                      <div className="mt-2">{worker.label}</div>
                                    </div>
                                  </div>
                                </label>
                              ))}
                            </div>

                            <span className="text-muted">Project manager</span>
                            <div className="d-flex flex-wrap mt-2 gap-4">
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
                            style={{ width: "100px" }}
                            className={
                              `  btn btn-primary p-2 text-white (activeTab === 3 ? "next disabled" : "next" )`
                            }
                          >
                            <Link
                              className="text-white"
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
                  </TabPane>


                  <TabPane tabId={2}>
                    <Row className="justify-content-center">
                      <Col xl="7" sm="7">
                        <Card className="rounded-4">
                          <CardBody className="ms-3">
                            <div>
                              <h4 className="text-start mb-3 fw-semibold">Choose sercices you need the Electrician for</h4>
                            </div>

                            <span>Rooms</span>
                            <div className="d-flex flex-wrap gap-3 mt-2" style={{ color: "#41619A" }}>
                              {Rooms.map((worker) => (
                                <label
                                  className="card-radio-label  text-center"
                                  key={worker.id}
                                  style={{ minWidth: "auto" }} // Minimum width for consistent appearance
                                >
                                  <div className="card-radio py-1 border rounded-5 d-flex" style={{ background: "#F4F8FC" }}>
                                    <i className={worker.iconClass} />
                                    <div>
                                      <div className="mt-2">{worker.label}</div>
                                    </div>
                                  </div>

                                </label>
                              ))}
                            </div>

                            <span>Outside work</span>
                            <div className="d-flex flex-wrap  gap-3 mt-2" style={{ color: "#41619A" }}>
                              {outsidework.map((worker) => (
                                <label
                                  className="card-radio-label text-center"
                                  key={worker.id}
                                  style={{ minWidth: "180px" }} // Minimum width for consistent appearance
                                >
                                  <div className="card-radio py-1 border rounded-5  d-flex" style={{ background: "#F4F8FC" }}>
                                    <i className={worker.iconClass} />
                                    <div>
                                      <div className="mt-2">{worker.label}</div>
                                    </div>
                                  </div>
                                </label>
                              ))}
                            </div>

                            <span>New building</span>
                            <div className="d-flex flex-wrap  gap-3 mt-2" style={{ color: "#41619A" }}>
                              {newbuilding.map((worker) => (
                                <label
                                  className="card-radio-label text-center"
                                  key={worker.id}
                                  style={{ minWidth: "180px" }} // Minimum width for consistent appearance
                                >
                                  <div className="card-radio py-1 px-3 border rounded-5  d-flex " style={{ background: "#F4F8FC" }}>
                                    <i className={worker.iconClass} />
                                    <div>
                                      <div className="mt-2">{worker.label}</div>
                                    </div>
                                  </div>
                                </label>
                              ))}
                            </div>
                          </CardBody>
                        </Card>

                      </Col>
                    </Row>


                    <Row className="justify-content-center">
                      <Col xl="7" sm="7">
                        <Card className="rounded-4">
                          <CardBody className="ms-3">
                            <div>
                              <h4 className="text-start mb-3 fw-semibold">Choose sercices you need the Electrician for</h4>
                            </div>
                            <span>Rooms</span>
                            <div className="d-flex flex-wrap gap-3" style={{ color: "#41619A" }}>
                              {Rooms.map((worker) => (
                                <label
                                  className="card-radio-label  text-center"
                                  key={worker.id}
                                  style={{ minWidth: "auto" }}
                                >
                                  <div className="card-radio py-1 border rounded-5 d-flex" style={{ background: "#F4F8FC" }}>
                                    <i className={worker.iconClass} />
                                    <div>
                                      <div className="mt-2">{worker.label}</div>
                                    </div>
                                  </div>
                                </label>
                              ))}
                            </div>

                            <span>Outside work</span>
                            <div className="d-flex flex-wrap  gap-3" style={{ color: "#41619A" }}>
                              {outsidework.map((worker) => (
                                <label
                                  className="card-radio-label text-center"
                                  key={worker.id}
                                  style={{ minWidth: "180px" }} // Minimum width for consistent appearance
                                >
                                  <div className="card-radio py-1 border rounded-5  d-flex" style={{ background: "#F4F8FC" }}>
                                    <i className={worker.iconClass} />
                                    <div>
                                      <div className="mt-2">{worker.label}</div>
                                    </div>
                                  </div>
                                </label>
                              ))}
                            </div>

                            <span>New building</span>
                            <div className="d-flex flex-wrap  gap-3" style={{ color: "#41619A" }}>
                              {newbuilding.map((worker) => (
                                <label
                                  className="card-radio-label text-center"
                                  key={worker.id}
                                  style={{ minWidth: "180px" }} // Minimum width for consistent appearance
                                >
                                  <div className="card-radio py-1 px-3 border rounded-5  d-flex " style={{ background: "#F4F8FC" }}>
                                    <i className={worker.iconClass} />
                                    <div>
                                      <div className="mt-2">{worker.label}</div>
                                    </div>
                                  </div>
                                </label>
                              ))}
                            </div>
                          </CardBody>
                        </Card>

                        <div className="actions clearfix text-end">
                          <button
                            style={{ width: "100px" }}
                            className={
                              ` btn btn-primary p-2 (activeTab === 3 ? "next disabled" : "next" )`
                            }
                          >
                            <Link
                              className="text-white"
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
                  </TabPane>


                  <TabPane tabId={3}>
                    <Row className="justify-content-center">
                      <Col xl="8" sm="8">
                        <Card>
                          <CardBody>
                            <Form>
                              <Row>
                                <Col lg="12">
                                  <h4 className="fw-normal">Genral Information
                                  </h4>
                                </Col>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label for="basicpill-firstname-input1">
                                      Type of home
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-firstname-input1"
                                      placeholder="Apartment"
                                    />
                                  </div>
                                </Col>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label for="basicpill-lastname-input2">

                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-lastname-input2"
                                      placeholder="House"
                                    />
                                  </div>
                                </Col>
                              </Row>

                              <Row>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label for="basicpill-phoneno-input3">
                                      Project address
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-phoneno-input3"
                                      placeholder="Text here..."
                                    />
                                  </div>
                                </Col>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label>City</Label>
                                    <select className="form-select"
                                      placeholder="Text here...">
                                      <option defaultValue>
                                        indore
                                      </option>
                                      <option value="AE">
                                        pune
                                      </option>
                                      <option value="VI">Visa</option>
                                      <option value="MC">MasterCard</option>
                                      <option value="DI">Discover</option>
                                    </select>
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="12">
                                  <div className="mb-3">
                                    <Label for="basicpill-address-input1">
                                      General comment
                                    </Label>
                                    <textarea
                                      id="basicpill-address-input1"
                                      className="form-control"
                                      rows=""
                                      placeholder="Text here..."
                                    />
                                  </div>
                                </Col>
                              </Row>
                            </Form>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                    <Row className="justify-content-center">
                      <Col xl="8" sm="8">

                        <Card>
                          <CardBody>
                            <Col lg="12">
                              <h4 className="fw-normal">Kitchen
                              </h4>
                            </Col>
                            <Form>
                              <Row>
                                <Col lg="12">
                                  <div className="mb-3">
                                    <Label for="basicpill-address-input1">
                                      Description
                                    </Label>
                                    <textarea
                                      id="basicpill-address-input1"
                                      className="form-control"
                                      rows="3"
                                      placeholder="Give us brief description of what you need..."
                                    />
                                  </div>
                                </Col>
                              </Row>
                              <div class="mb-3">
                                
                                <a href="#" id="attachment" class="btn btn-link">
                                  <i class="bi bi-paperclip"></i> Add Attachment
                                </a>
                              </div>
                              <div className="mb-3">
                                <Label>Room floor</Label>
                                {/* <InputGroup>
                                  <div
                                    className="input-group-append"
                                    onClick={() => {
                                      setData_attr(data_attr - 1);
                                    }}
                                  >
                                    <Button type="button" color="primary">
                                      <i className="mdi mdi-minus" />
                                    </Button>
                                  </div>
                                  <input
                                    type="number"
                                    className="form-control"
                                    value={data_attr}
                                    placeholder="number"
                                    readOnly
                                  />
                                  <div
                                    className="input-group-append"
                                    onClick={() => {
                                      setData_attr(data_attr + 1);
                                    }}
                                  >
                                    <Button type="button" color="primary">
                                      <i className="mdi mdi-plus" />
                                    </Button>
                                  </div>
                                </InputGroup> */}
                                <InputGroup>
  <div className="input-group">
    <button
      type="button"
      className="btn btn-outline-primary "
      onClick={() => setData_attr(data_attr - 1)}
    >
      <i className="mdi mdi-minus" />
    </button>
    <input
      type="number"
      className="form-control text-center"
      value={data_attr}
      placeholder="number"
      readOnly
    />
    <button
      type="button"
      className="btn btn-outline-primary "
      onClick={() => setData_attr(data_attr + 1)}
    >
      <i className="mdi mdi-plus" />
    </button>
  </div>
</InputGroup>
                              </div>
                            </Form>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                    <Row className="justify-content-center">
                      <Col xl="8" sm="8">
                        <Card>
                          <CardBody>
                            <Col lg="12">
                              <h4 className="fw-normal">Washing room
                              </h4>
                            </Col>
                            <Form>
                              <Row>
                                <Col lg="12">
                                  <div className="mb-3">
                                    <Label for="basicpill-address-input1">
                                      Description
                                    </Label>
                                    <textarea
                                      id="basicpill-address-input1"
                                      className="form-control"
                                      rows="3"
                                      placeholder="Give us brief description of what you need..."
                                    />
                                  </div>
                                </Col>

                              </Row>
                              <div class="mb-3">
                                
                                <a href="#" id="attachment" class="btn btn-link">
                                  <i class="bi bi-paperclip"></i> Add Attachment
                                </a>
                              </div>
                              <div className="mb-3">
                                <Label>Room floor</Label>
                                <InputGroup>
                                  <div
                                    className="input-group-append"
                                    onClick={() => {
                                      setData_attr(data_attr - 1);
                                    }}
                                  >
                                    <Button type="button" color="primary">
                                      <i className="mdi mdi-minus" />
                                    </Button>
                                  </div>
                                  <input
                                    type="number"
                                    className="form-control"
                                    value={data_attr}
                                    placeholder="number"
                                    readOnly
                                  />
                                  <div
                                    className="input-group-append"
                                    onClick={() => {
                                      setData_attr(data_attr + 1);
                                    }}
                                  >
                                    <Button type="button" color="primary">
                                      <i className="mdi mdi-plus" />
                                    </Button>
                                  </div>
                                </InputGroup>
                              </div>
                            </Form>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                    <Row className="justify-content-center">
                      <Col xl="8" sm="8">
                        <Card>
                          <CardBody>
                            <Form>
                              <Row>
                                <Col lg="12">
                                  <h4 className="fw-normal">Contact Information
                                  </h4>
                                </Col>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label for="basicpill-firstname-input1">
                                      Name
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-firstname-input1"
                                      placeholder="Text here..."
                                    />
                                  </div>
                                </Col>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label for="basicpill-lastname-input2">
                                      Surname
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-lastname-input2"
                                      placeholder="Text here..."
                                    />
                                  </div>
                                </Col>
                              </Row>

                              <Row>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label for="basicpill-phoneno-input3">
                                      Phone
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-phoneno-input3"
                                      placeholder="Text here..."
                                    />
                                  </div>
                                </Col>
                                {/* <Col lg="6">
                                    <div className="mb-3">
                                      <Label for="basicpill-phoneno-input3">
                                        Phone
                                      </Label>
                                      <Input
                                        type="number"
                                        className="form-control"
                                        id="basicpill-phoneno-input3"
                                        placeholder="xxxxxxxxxx"
                                      />
                                    </div>
                                  </Col> */}
                                <Col lg="6">
                                  <FormGroup>
                                    <Label for="basicpill-phoneno-input3">Phone</Label>
                                    <div className="d-flex">
                                      <select className="form-control me-2" style={{ maxWidth: "100px" }}>
                                        <option value="+1">+1 (US)</option>
                                        <option value="+91">+91 (India)</option>
                                        <option value="+44">+44 (UK)</option>
                                        <option value="+61">+61 (Australia)</option>
                                        {/* Add more country codes here */}
                                      </select>
                                      <Input
                                        type="number"
                                        className="form-control"
                                        id="basicpill-phoneno-input3"
                                        placeholder="xxxxxxxxxx"
                                      />
                                    </div>
                                  </FormGroup>
                                </Col>
                              </Row>


                            </Form>
                          </CardBody>
                        </Card>
                        <div className="actions clearfix text-end">
                          <button
                            style={{ width: "100px" }}
                            className={
                              ` btn btn-primary p-2 text-white (activeTab === 3 ? "next disabled" : "next" )`
                            }
                          >

                            Send

                          </button>
                        </div>
                      </Col>
                    </Row>
                  </TabPane>

                </TabContent>
              </div>
            </div>
          </Col>

        </Row>
      </Container>

    </React.Fragment>
  )
}

export default Ragisterpage;
