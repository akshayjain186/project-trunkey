import React from "react";
import { useState, useMemo } from "react";
import { Col, Row, } from "reactstrap";
import logo from '../../../assets/images/turnkey logo.png'
import flag from '../../../assets/images/flag-round.png'
import user from '../../../assets/images/user.png'
import location from '../../../assets/images/location.png'
//  import TableContainer from "../../../components/Common/TableContainer";
import customer from '../../../assets/images/customers.png'
import companies from '../../../assets/images/companies.png'
import product from '../../../assets/images/product.png'
import portaluser from '../../../assets/images/portaluser.png'
import'../controlpaneladmin.scss'

const OwnerPage = () => {
    const [ActivateLink, setActivateLink] = useState(null);

    const handleLinkClick = (linkName) => {
        setActivateLink(linkName);
    };

    const columns = useMemo(
        () => [

            {
                header: "Name",
                accessorKey: "Name",
                enableColumnFilter: false,
                enableSorting: true,
            },
            {
                header: "Main manager",
                accessorKey: "Main manager",
                enableColumnFilter: false,
                enableSorting: true,
            },
            {
                header: "Employees",
                accessorKey: "Employees",
                enableColumnFilter: false,
                enableSorting: true,
            },
            {
                header: "Admins",
                accessorKey: "admins",
                enableColumnFilter: false,
                enableSorting: true,
            },
            {
                header: "Customers",
                accessorKey: "customers",
                enableColumnFilter: false,
                enableSorting: true,
            },
            {
                header: 'Action',
                enableColumnFilter: false,
                enableSorting: false,
                accessorKey: "status",
                cell: (cell) => {
                    return (
                        <div className="text-danger d-flex align-items-center">
                            <i className="bx bx-show me-2" style={{ color: "#41619A" }}></i>
                            {/* Vertical Line */}
                            <div
                                style={{
                                    borderLeft: "1px solid #EAEEF4",
                                    height: "20px",
                                    margin: "0 8px",
                                }}
                            ></div>
                            <a href="#" className="text-danger mb-0">
                                Deactivate
                            </a>
                        </div>
                    );
                }
            },
        ],
        []
    );
    const users = [
        {
            "Name": "Baderom Pluss AS",
            "Main manager": "Camilla Larson",
            "Employees": 50,
            "admins": 3,
            "customers": 120,
            "status": "Activate"
        },
        {
            "Name": "Build Forum",
            "Main manager": "Christopher Main",
            "Employees": 30,
            "admins": 2,
            "customers": 75,
            "status": "Deactivate"
        },
        {
            "Name": "Baderom Pluss AS",
            "Main manager": "Camilla Larson",
            "Employees": 75,
            "admins": 5,
            "customers": 200,
            "status": "Activate"
        },
        {
            "Name": "Baderom Pluss AS",
            "Main manager": "Camilla Larson",
            "Employees": 12,
            "admins": 1,
            "customers": 40,
            "status": "Activate"
        },
        {
            "Name": "Build Forum",
            "Main manager": "Christopher Main",
            "Employees": 90,
            "admins": 4,
            "customers": 250,
            "status": "Deactivate"
        },
        {
            "Name": "Build Forum",
            "Main manager": "Camilla Larson",
            "Employees": 20,
            "admins": 2,
            "customers": 60,
            "status": "Activate"
        },
        {
            "Name": "Company G",
            "Main manager": "Christopher Main",
            "Employees": 55,
            "admins": 3,
            "customers": 150,
            "status": "Activate"
        },
        {
            "Name": "Company H",
            "Main manager": "David Harris",
            "Employees": 35,
            "admins": 2,
            "customers": 100,
            "status": "Deactivate"
        },
        {
            "Name": "Company I",
            "Main manager": "Jessica Taylor",
            "Employees": 65,
            "admins": 4,
            "customers": 180,
            "status": "Activate"
        },
        {
            "Name": "Company J",
            "Main manager": "Daniel Lewis",
            "Employees": 40,
            "admins": 2,
            "customers": 110,
            "status": "Deactivate"
        },
        {
            "Name": "Company K",
            "Main manager": "Emily King",
            "Employees": 22,
            "admins": 1,
            "customers": 80,
            "status": "Activate"
        },
        {
            "Name": "Company L",
            "Main manager": "Robert Scott",
            "Employees": 50,
            "admins": 3,
            "customers": 130,
            "status": "Deactivate"
        },
        {
            "Name": "Company M",
            "Main manager": "Olivia Adams",
            "Employees": 80,
            "admins": 5,
            "customers": 210,
            "status": "Activate"
        },
        {
            "Name": "Company N",
            "Main manager": "Benjamin Carter",
            "Employees": 18,
            "admins": 2,
            "customers": 55,
            "status": "Deactivate"
        },
        {
            "Name": "Company O",
            "Main manager": "Sophia Evans",
            "Employees": 65,
            "admins": 4,
            "customers": 160,
            "status": "Activate"
        },
        {
            "Name": "Company P",
            "Main manager": "William Wilson",
            "Employees": 40,
            "admins": 3,
            "customers": 90,
            "status": "Deactivate"
        },
        {
            "Name": "Company Q",
            "Main manager": "James Martinez",
            "Employees": 72,
            "admins": 5,
            "customers": 210,
            "status": "Activate"
        },
        {
            "Name": "Company R",
            "Main manager": "Mia White",
            "Employees": 25,
            "admins": 2,
            "customers": 70,
            "status": "Deactivate"
        },
        {
            "Name": "Company S",
            "Main manager": "Elijah Thomas",
            "Employees": 90,
            "admins": 6,
            "customers": 300,
            "status": "Deactivate"
        },
        {
            "Name": "Company T",
            "Main manager": "Charlotte Roberts",
            "Employees": 52,
            "admins": 3,
            "customers": 150,
            "status": "Deactivate"
        }
    ]
  return (
    <>
    <nav className="navbar navbar-expand-lg " style={{ background: "#41619A" }}>
        <div className="container-fluid ms-3">
            <img src={logo}
                alt="logo"
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
        <div className=" mt-4">
            <div className="mb-4">
                <p>
                    <strong>Licenses</strong> ^ <span>Norway</span>
                </p>
            </div>
            <Row className="d-flex justify-content ">
                <Col>
                    <div className="d-flex align-items-center ">
                        <img
                            src={flag}
                            alt="Norwegian Flag"
                            className="me-4"
                        />
                        <div>
                            <h4 className="mb-1">Norway</h4>
                            <p className="text-muted">Europe</p>
                        </div>
                    </div>
                    <div className="mt-4" style={{ lineHeight: "2.0" }}>
                        <span className="fw semi-bold">Language:<span className="ms-2 fw-normal text-black">Norwegian</span></span><br />
                        <span className="fw semi-bold">Currency:<span className="ms-2 text-black">Norwegian Krone</span></span><br />
                        <span className="fw semi-bold">Organisation number:<span className="ms-2 text-black">817158722</span></span>
                    </div>
                </Col>
                <Col className="justify-content-end">
                    {/* First Row */}
                    <Col className="d-flex gap-4 w-100 justify-content-end">
                        <div className="box-design">

                            <div className=" border border-2 p-2 d-flex justify-content-between">
                                <div>
                                    <span className="">PORTAL USERS</span>
                                    <p className="fs-4 fw-bold" style={{ color: "#41619A" }}>4,566</p>
                                </div>
                                <div className="d-flex justify-content-end ">
                                    <img src={portaluser} alt="" style={{ height: "15px", width: "15px" }} className="me-2 " />
                                </div>
                            </div>

                        </div>
                        <div className="box-design">
                            <div className=" border border-2 p-2 d-flex justify-content-between">
                                <div>
                                    <span className="">CUSTOMERS</span>
                                    <p className="fs-4 fw-bold" style={{ color: "#41619A" }}>1,546</p>
                                </div>
                                <div className="d-flex justify-content-end ">
                                    <img src={customer} alt="" style={{ height: "15px", width: "15px" }} className="me-2 " />
                                </div>

                            </div>
                        </div>
                    </Col>
                    <Col className="d-flex gap-4 w-100 justify-content-end mt-3">
                        <div className="box-design">
                            <div className=" border border-2 p-2  d-flex justify-content-between">
                                <div>
                                    <span className="">COMPANIES</span>
                                    <p className="fs-4 fw-bold" style={{ color: "#41619A" }}>587</p>
                                </div>
                                <div className="d-flex justify-content-end ">
                                    <img src={companies} alt="" style={{ height: "15px", width: "15px" }} className="me-2 " />
                                </div>

                            </div>
                        </div>
                        <div className="box-design">

                            <div className=" border border-2 p-2  d-flex justify-content-between">
                                <div>
                                    <span className="">PRODUCTS</span>
                                    <p className="fs-4 fw-bold" style={{ color: "#41619A" }}>5,445</p>
                                </div>
                                <div className="d-flex justify-content-end ">
                                    <img src={product} alt="" style={{ height: "15px", width: "15px" }} className="me-2 " />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Col>
            </Row>

            <h5 className="mt-4">Owner</h5>

            <Row className="my-3 shadow-sm flex-wrap p-3 align-items-center" style={{ background: "#F4F8FC" }}>
                {/* Left Column: User Image and Details */}
                <Col xs="12" md="6" className="d-flex align-items-center mb-3 mb-md-0">
                    {/* User Image */}
                    <img
                        src={user}
                        alt="Owner"
                        className="rounded-circle me-3"
                        style={{ width: "50px", height: "50px" }}
                    />
                    {/* User Name and Email */}
                    <div>
                        <h5 className="mb-1">Harry Stone</h5>
                        <p className="mb-0 text-muted">harry.stone@gmail.com</p>
                    </div>
                </Col>

                {/* Right Column: Address, Phone, and Email */}
                <Col xs="12" md="6" className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between">
                    {/* Address */}
                    <div className="d-flex align-items-center mb-3 mb-md-0">
                        <img
                            src={location}
                            alt="Location Icon"
                            style={{ height: "15px", width: "15px" }}
                            className="me-2"
                        />
                        <p className="mb-0 text-muted">Vossegata 22, 0475 Oslo</p>
                    </div>

                    {/* Phone Number */}
                    <div className="text-center mb-3 mb-md-0">
                        <p className="mb-0 text-muted">
                            <i className="bx bx-phone"></i> +4721607947
                        </p>
                    </div>

                    {/* Email */}
                    <div className="text-md-end">
                        <p className="mb-0 text-muted">
                            <i className="bx bx-envelope"></i> tyler_hopp@gmail.com
                        </p>
                    </div>
                </Col>
            </Row>

            <Row className="mb-4 mt-5">
                <Col className="d-flex align-items-center border-bottom">
                    {/* Managers Link */}
                    <a
                        href="#"
                        className={`me-4 anchor-text ${ActivateLink === 'Managers' ? 'border-bottom border-primary text-primary fw-bold' : ''}`}
                        onClick={() => handleLinkClick('Managers')}
                        style={{ textDecoration: ActivateLink === 'Managers' ? 'none' : 'none', color: ActivateLink === 'Managers' ? 'blue' : 'black' }}
                    >
                        Managers
                    </a>

                    {/* Super Admins Link */}
                    <a
                        href="#"
                        className={`me-4 anchor-text ${ActivateLink === 'Super admins' ? 'border-bottom border-primary text-primary fw-bold' : ''}`}
                        onClick={() => handleLinkClick('Super admins')}
                        style={{ textDecoration: ActivateLink === 'Super admins' ? 'none' : 'none', color: ActivateLink === 'Super admins' ? 'blue' : 'black' }}
                    >
                        Super admins
                    </a>

                    {/* Admins Link */}
                    <a
                        href="#"
                        className={`me-4 anchor-text ${ActivateLink === 'Admins' ? 'border-bottom border-primary text-primary fw-bold' : ''}`}
                        onClick={() => handleLinkClick('Admins')}
                        style={{ textDecoration: ActivateLink === 'Admins' ? 'none' : 'none', color: ActivateLink === 'Admins' ? 'blue' : 'black' }}
                    >
                        Admins
                    </a>

                    {/* Customers Link */}
                    <a
                        href="#"
                        className={`me-4 anchor-text ${ActivateLink === 'Customers' ? 'border-bottom border-primary text-primary fw-bold' : ''}`}
                        onClick={() => handleLinkClick('Customers')}
                        style={{ textDecoration: ActivateLink === 'Customers' ? 'none' : 'none', color: ActivateLink === 'Customers' ? 'blue' : 'black' }}
                    >
                        Customers
                    </a>
                </Col>
            </Row>


            {/* <TableContainer
                columns={columns}
                data={users || []}
                isGlobalFilter={false}
                isPagination={true}
                SearchPlaceholder="Search..."
                isCustomPageSize={false}
                isAddButton={false}
                buttonClass="btn btn-success btn-rounded waves-effect waves-light addContact-modal mb-2"
                buttonName="New Contact"
                tableClass="align-middle table-nowrap table-hover dt-responsive nowrap w-100 dataTable no-footer dtr-inline"
                theadClass="table-light"
                paginationWrapper="dataTables_paginate paging_simple_numbers pagination-rounded"
                pagination="pagination"
            /> */}
        </div>
    </div>
</>
  )
}

export default OwnerPage