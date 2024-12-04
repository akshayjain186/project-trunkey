import React from "react";
import { Col, Label, Row, Input, InputGroup, InputGroupText } from "reactstrap";

//  logo image
import logo from '../../../assets/images/turnkey logo.png';
import'../controlpaneladmin.scss'

const AddnewPage = () => {
    return (
        <React.Fragment>
            {/* Navigation bar */}
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: "#41619A" }}>
                <div className="container-fluid ms-3">
                    {/* Logo image */}
                    <img
                        src={logo}
                        alt="Company Logo"
                        style={{ height: "25px" }}
                    />
                    {/* User Avatar */}
                    <div className="d-flex me-3">
                        <img
                            src="https://via.placeholder.com/40"
                            alt="User Avatar"
                            className="rounded-circle"
                        />
                    </div>
                </div>
            </nav>
            {/* Main content */}
            <Row>
                {/* Left Column for General Information */}
                <Col lg="6" className="p-5">
                    <div className="mb-4">
                        <p>
                            <span className="text-muted">Norway</span> ^ <span>Add new</span>
                        </p>
                    </div>

                    {/* General Information Form */}
                    <div className="border border-1 p-4">
                        <p className="fw-bold fs-5">General information</p>
                        <form>
                            <Row>
                                <Col lg="12">
                                    {/* Continent Dropdown */}
                                    <div>
                                        <Label className="mb-0">Continent</Label>
                                        <select
                                            className="form-select mb-3 rounded-3 bg-transparent"
                                            placeholder="Choose continent"
                                            
                                        >
                                            <option defaultValue>Africa</option>
                                            <option value="AE">Pune</option>
                                            <option value="VI">Visa</option>
                                            <option value="MC">MasterCard</option>
                                            <option value="DI">Discover</option>
                                        </select>
                                    </div>

                                    {/* Country Dropdown */}
                                    <div>
                                        <Label className="mb-0">Country</Label>
                                        <select
                                            className="form-select rounded-3 bg-transparent"
                                            placeholder="Choose country"

                                        >
                                            <option defaultValue>Algeria</option>
                                            <option value="AE">Angola</option>
                                            <option value="VI">Benin</option>
                                            <option value="MC">Burkina Faso</option>
                                            <option value="DI">Burundi</option>
                                        </select>
                                    </div>

                                    {/* Language Dropdown */}
                                    <div>
                                        <Label className="mb-0 mt-3">Language</Label>
                                        <select
                                            className="form-select rounded-3  bg-transparent"
                                            placeholder="Choose language"
                                        >
                                            <option defaultValue>Hindi</option>
                                            <option value="AE">English</option>
                                            <option value="VI">Marathi</option>
                                        </select>
                                    </div>

                                    {/* Currency Dropdown */}
                                    <div className="mb-3 ajax-select mt-3 mt-lg-0 select2-container">
                                        <Label className="mb-0 mt-3">Currency</Label>
                                        <select
                                            className="form-select rounded-3  bg-transparent"
                                            placeholder="Choose currency"
                                        >
                                            <option defaultValue>Indore</option>
                                            <option value="AE">Pune</option>
                                            <option value="VI">Visa</option>
                                            <option value="MC">MasterCard</option>
                                            <option value="DI">Discover</option>
                                        </select>
                                    </div>

                                    {/* Organisation Number */}
                                    <div className="mb-3 templating-select select2-container ">
                                        <Label className="mb-0">Organisation number</Label>
                                        <Input
                                            type="text"
                                            className="form-control rounded-3 bg-transparent"
                                            placeholder="Text here..."
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </form>
                    </div>
                </Col>

                {/* Right Column for Owner Information */}
                <Col lg="6" className="p-5 mt-5">
                    <div className="border border-1 p-4">
                        <p className="fw-bold fs-5">Owner information</p>
                        <form>
                            <Row>
                                <Col lg="12">
                                    {/* Manager Name and Surname */}
                                    <div className="d-flex gap-2">
                                        <div className="w-50">
                                            <Label className="mb-0">Manager name</Label>
                                            <Input
                                                type="text"
                                                className="form-control mb-3 rounded-3  bg-transparent"
                                                placeholder="Harry"
                                            />
                                        </div>
                                        <div className="w-50">
                                            <Label className="control-label mb-0">Manager surname</Label>
                                            <Input
                                                type="text"
                                                className="form-control mb-3 rounded-3  bg-transparent"
                                                placeholder="Stone"
                                            />
                                        </div>
                                    </div>

                                    {/* Email Input */}
                                    <div className="mb-3 templating-select select2-container">
                                        <Label className="control-label mb-0">E-mail</Label>
                                        <Input
                                            type="email"
                                            className="form-control mb-3 rounded-3  bg-transparent"
                                            placeholder="post@artbuild.com"
                                        />
                                    </div>

                                    {/* Mobile Phone Input */}
                                    <div>
                                        <Label className="mb-0">Mobile Phone</Label>
                                        <InputGroup className="mb-3">
                                            <InputGroupText className="p-0">
                                                <select
                                                    className="form-select border-0  bg-transparent"
                                                    style={{ width: "80px" }}
                                                >
                                                    <option value="+1">+1</option>
                                                    <option value="+44">+44</option>
                                                    <option value="+91">+91</option>
                                                    <option value="+213">+213</option>
                                                    <option value="+216">+216</option>
                                                </select>
                                            </InputGroupText>
                                            <Input
                                                type="number"
                                                className="form-control  bg-transparent"
                                                placeholder="21607947"
                                            />
                                        </InputGroup>
                                    </div>

                                    {/* Address Input */}
                                    <div className="mb-3 ajax-select mt-2 mt-lg-0 select2-container">
                                        <Label className="mb-0">Address</Label>
                                        <Input
                                            type="text"
                                            className="form-control mb-3 rounded-3  bg-transparent"
                                            placeholder="Vossegata 22"
                                        />
                                    </div>

                                    {/* City and Postal Code */}
                                    <div className="d-flex gap-2">
                                        <div className="w-75">
                                            <Label className="mb-0">City</Label>
                                            <Input
                                                type="text"
                                                className="form-control mb-3 rounded-3  bg-transparent"
                                                placeholder="Oslo"
                                            />
                                        </div>
                                        <div className="w-25">
                                            <Label className="control-label mb-0 ">Postal code</Label>
                                            <Input
                                                type="number"
                                                className="form-control mb-3 rounded-3 bg-transparent"
                                                placeholder="0475"
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
    )
}

export default AddnewPage