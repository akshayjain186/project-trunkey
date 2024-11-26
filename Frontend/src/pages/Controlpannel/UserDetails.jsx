
import React from "react";
import { useState } from "react";
import { Card, CardBody, Col, Label, Row, Input } from "reactstrap";
import logo from '../../assets/images/icons/turnkey logo.png'
const UserDetails = () => {
    const [activeLink, setActiveLink] = useState(null);
    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <>
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

            <div className="m-5 ">
                {/* Top Navbar */}
                <div className=" mt-4">
                    {/* License and Country Information */}
                    <div className="mb-4">
                        <p>
                            <strong>Licenses</strong> &gt; <span>Norway</span>
                        </p>
                    </div>
                    <Row className="d-flex justify-content ">
                        <Col>
                            <div className="d-flex align-items-center">
                                <img
                                    src="https://via.placeholder.com/80"
                                    alt="Norwegian Flag"
                                    className="me-3"
                                />
                                <div>
                                    <h2 className="mb-1">Norway</h2>
                                    <p className="text-muted">Europe</p>
                                </div>
                            </div>
                            <div className="mt-4">
                                <span>Language:<strong className="ms-2">Norwegian</strong></span><br />
                                <span>Language:<strong className="ms-2">Norwegian</strong></span><br />
                                <span>Language:<strong className="ms-2">Norwegian</strong></span>
                            </div>
                        </Col>
                        <Col className="justify-content-end">
                            {/* First Row */}
                            <div className="d-flex gap-4 w-75 ">
                                <div className="w-75">
                                    <div className="card-body border border-2 p-2">
                                        <h5 className="card-title">PORTAL USERS</h5>
                                        <p className="card-text display-6">4,566</p>
                                    </div>
                                </div>
                                <div className="w-75">
                                    <div className="card-body border border-2 p-2">
                                        <h5 className="card-title">CUSTOMERS</h5>
                                        <p className="card-text display-6">1,546</p>
                                    </div>
                                </div>
                            </div>

                            {/* Second Row */}
                            <div className="d-flex gap-4 w-75 justify-content-end mt-3">
                                <div className="w-75">
                                    <div className="card-body border border-2 p-2">
                                        <h5 className="card-title">COMPANIES</h5>
                                        <p className="card-text display-6">587</p>
                                    </div>
                                </div>
                                <div className="w-75">
                                    <div className="card-body border border-2 p-2">
                                        <h5 className="card-title">PRODUCTS</h5>
                                        <p className="card-text display-6">5,445</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* Owner Section */}
                    <div className="card my-4">
                        <div className="card-body d-flex align-items-center justify-content-between">
                            <div className="d-flex">
                                <img
                                    src="https://via.placeholder.com/50"
                                    alt="Owner"
                                    className="rounded-circle me-3"
                                />
                                <div>
                                    <h5 className="">Harry Stone</h5>
                                    <p className="">harry.stone@gmail.com</p>
                                </div>
                            </div>
                            <div className="ms-auto d-flex gap-5 w-75 justify-content-between ">
                                <div className="w-25 text-end">
                                    <p className="">
                                        <i className="bi bi-geo-alt"></i> Vossegata 22, 0475 Oslo
                                    </p>
                                </div>
                                <div className="w-25 text-center">
                                    <p className="">
                                        <i className="bi bi-telephone"></i> +4721607947
                                    </p>
                                </div>
                                <div className="w-25 text-start">
                                    <p>
                                        <i className="bi bi-envelope"></i> tyler_hopp@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="d-flex align-items-center ">
                            <a href="#"
                                className={`me-4 anchor-text ${activeLink === 'Managers' ? 'border-bottom border-black ' : ''}`}
                                onClick={() => handleLinkClick('Managers')}
                            >Managers</a>
                            <a
                                href="#"
                                className={` me-4 anchor-text ${activeLink === 'Super admins' ? 'border-bottom border-black ' : ''}`}
                                onClick={() => handleLinkClick('Super admins')}
                            >Super admins</a>
                            <a
                                href="#"
                                className={` me-4 anchor-text ${activeLink === 'Admins' ? 'border-bottom border-black ' : ''}`}
                                onClick={() => handleLinkClick('Admins')}
                            >Admins</a>
                            <a
                                href="#"
                                className={`me-4 anchor-text ${activeLink === 'Customers' ? 'border-bottom border-black ' : ''}`}
                                onClick={() => handleLinkClick('Customers')}
                            >Customers</a>
                        </div>
                    </div>
                    <div className="table-responsive">
                        <table className="table">
                            <thead >
                                <tr style={{ backgroundColor: "" }}>
                                    <th style={{ width: "12%" }} className="text-start">Name</th>
                                    <th style={{ width: "3%" }} className="text-start">Main Manager</th>
                                    <th style={{ width: "10%" }} className="text-end">Employees</th>
                                    <th style={{ width: "10%" }} className="text-end">Admins</th>
                                    <th style={{ width: "10%" }} className="text-end">Customers</th>
                                    <th style={{ width: "10%" }} className="text-end">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ height: "50px" }}>
                                    <td className="text-start align-middle">Baderom Pluss AS</td>
                                    <td className="text-start align-middle">Camilla Larson</td>
                                    <td className="text-end align-middle">25</td>
                                    <td className="text-end align-middle">6</td>
                                    <td className="text-end align-middle">20</td>
                                    <td className="text-end align-middle">
                                        <button className="btn btn-link text-danger">Deactivate</button>
                                    </td>
                                </tr>
                                <tr style={{ height: "50px" }}>
                                    <td className="text-start align-middle ">Build Forum</td>
                                    <td className="text-start align-middle">Christopher Main</td>
                                    <td className="text-end align-middle">13</td>
                                    <td className="text-end align-middle">3</td>
                                    <td className="text-end align-middle">6</td>
                                    <td className="text-end align-middle">
                                        <button className="btn btn-link text-danger">Deactivate</button>
                                    </td>
                                </tr>
                                {/* Repeat rows as needed */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserDetails;
