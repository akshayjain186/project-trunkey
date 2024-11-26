import React, { useState } from "react";
import { Col, Label, Row, Input } from "reactstrap";
import logo from '../../assets/images/icons/turnkey logo.png'


const AddNew = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark " style={{ background: "#41619A" }}>
                <div className="container-fluid ms-3">
                    <img src={logo}
                        alt=""
                        style={{ height: "25px" }}
                    />
                    <div className="d-flex me-3">
                        <img
                            src="https://via.placeholder.com/40"
                            alt="User Avatar"
                            className="rounded-circle"
                        />
                    </div>
                </div>
            </nav>       
            <Row>            
                <Col lg="6" className="p-5">
                <div className="mb-4">
                        <p>
                        <span className="text-muted">Norway</span>  &gt; <span>Add new</span>
                        </p>
                    </div>
                    <div className=" border border-2 p-5">
                        
                        <p className=" fw-bold fs-5">
                        General information
                        </p>
                        <form>
                            <Row>
                                <Col lg="12">
                                    <div>
                                        <div className="">
                                            <Label>Continent</Label>
                                            <select
                                                className="form-select"
                                                placeholder="Choose continent"
                                                style={{ backgroundColor: "transparent" }}
                                            >
                                                <option defaultValue>Africa</option>
                                                <option value="AE">pune</option>
                                                <option value="VI">Visa</option>
                                                <option value="MC">MasterCard</option>
                                                <option value="DI">Discover</option>
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label className="control-label">
                                            Country
                                            </label>
                                            <select
                                                className="form-select"
                                                placeholder="Choose country"
                                                style={{ backgroundColor: "transparent" }}
                                            >
                                                <option defaultValue>Algeria</option>
                                                <option value="AE">Angola</option>
                                                <option value="VI">Benin</option>
                                                <option value="MC">Burkina Faso</option>
                                                <option value="DI">Burundi</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <Label>Language</Label>
                                        <select
                                            className="form-select"
                                            placeholder="Choose language"
                                            style={{ backgroundColor: "transparent" }}
                                        >
                                            <option defaultValue>Hindi</option>
                                            <option value="AE">English</option>
                                            <option value="VI">Marathi</option>
                                           
                                        </select>
                                    </div>
                                    <div className="mb-3 ajax-select mt-3 mt-lg-0 select2-container">
                                        <Label>Currency</Label>
                                        <select
                                            className="form-select"
                                            placeholder="Choose currency"
                                            style={{ backgroundColor: "transparent" }}
                                        >
                                            <option defaultValue>indore</option>
                                            <option value="AE">pune</option>
                                            <option value="VI">Visa</option>
                                            <option value="MC">MasterCard</option>
                                            <option value="DI">Discover</option>
                                        </select>
                                    </div>
                                    <div className="mb-3 templating-select select2-container">
                                        <label className="control-label">Organisation number</label>
                                        <Input
                                                type="text"
                                                className="form-control"
                                                id="basicpill-phoneno-input3"
                                                placeholder="Text here..."
                                                style={{ backgroundColor: "transparent" }}
                                            />
                                    </div>
                                </Col>
                            </Row>
                        </form>
                    </div>
                </Col>
                <Col lg="6" className="p-5 mt-4">
                    <div className=" border border-2 p-5">
                       
                        <p className="fw-bold fs-5">
                        Owner information
                        </p>

                        <form>
                            <Row>
                                <Col lg="12" className="">
                                    <div lg="12" className="d-flex">
                                        <div className="mb- w-50">
                                            <Label>Manager name</Label>
                                            <Input
                                                type="text"
                                                className="form-control"
                                                id="basicpill-phoneno-input3"
                                                placeholder="Harry"
                                                style={{ backgroundColor: "transparent" }}
                                            />
                                        </div>
                                        <div className="mb-3 w-50">
                                            <label className="control-label">
                                            Manager surname
                                            </label>
                                            <Input
                                                type="text"
                                                className="form-control"
                                                id="basicpill-phoneno-input3"
                                                placeholder="Stone"
                                                style={{ backgroundColor: "transparent" }}
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-3 templating-select select2-container">
                                        <label className="control-label">E-mail</label>
                                        <Input
                                            type="email"
                                            className="form-control"
                                            id="basicpill-phoneno-input3"
                                            placeholder="post@artbuild.com"
                                            style={{ backgroundColor: "transparent" }}
                                        />
                                    </div>
                                    <div>
                                        <Label>Mobile phone</Label>
                                        <Input
                                            type="number"
                                            className="form-control"
                                            id="basicpill-phoneno-input3"
                                            placeholder="21607947"
                                            style={{ backgroundColor: "transparent" }}
                                        />
                                    </div>
                                    <div className="mb-3 ajax-select mt-3 mt-lg-0 select2-container">
                                        <Label>Address</Label>
                                        <Input
                                            type="text"
                                            className="form-control"
                                            id="basicpill-phoneno-input3"
                                            placeholder="Vossegata 22"
                                            style={{ backgroundColor: "transparent" }}
                                        />
                                    </div>                                   
                                    <div lg="12" className="d-flex gap-2">
                                        <div className="mb-3 w-50">
                                            <Label>City</Label>
                                            <Input
                                                type="text"
                                                className="form-control"
                                                id="basicpill-phoneno-input3"
                                                placeholder="Oslo"
                                                style={{ backgroundColor: "transparent" }}
                                            />
                                        </div>
                                        <div className="mb-3 w-50">
                                            <label className="control-label">
                                            Postal code
                                            </label>
                                            <Input
                                                type="number"
                                                className="form-control"
                                                id="basicpill-phoneno-input3"
                                                placeholder="0475"
                                                style={{ backgroundColor: "transparent" }}
                                            />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </form>
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default AddNew;