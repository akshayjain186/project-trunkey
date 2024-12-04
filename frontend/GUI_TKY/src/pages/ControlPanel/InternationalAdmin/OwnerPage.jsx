import React from "react";
import { useState, useMemo } from "react";
import { Col, Row, } from "reactstrap";
import flag from '../../../assets/images/flag-round.png'
import user from '../../../assets/images/user.png'
import location from '../../../assets/images/location.png'
  import TableContainer from "../../../components/Common/TableContainer";
import customer from '../../../assets/images/customers.png'
import companies from '../../../assets/images/companies.png'
import product from '../../../assets/images/product.png'
import portaluser from '../../../assets/images/portaluser.png'
import'../controlpaneladmin.scss'
import InternationalHeader from "./InternationalHeader";

const OwnerPage = () => {
    const [ActivateLink, setActivateLink] = useState(null);

    const handleLinkClick = (linkName) => {
        setActivateLink(linkName);
    };

    const columns = useMemo(
        () => [

            {
                header: "Name",
                accessorKey: "name",
                enableColumnFilter: false,
                enableSorting: true,
            },
            {
                header: "Main manager",
                accessorKey: "main_manager",
                enableColumnFilter: false,
                enableSorting: true,
            },
            {
                header: "Employees",
                accessorKey: "employees",
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
                        <div className="text-danger d-flex text-end">
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
            "name": "Baderom Pluss AS",
            "main_manager": "Camilla Larson",
            "employees": 50,
            "admins": 3,
            "customers": 120,
            "status": "Activate"
        },
        {
            "name": "Build Forum",
            "main_manager": "Christopher Main",
            "employees": 30,
            "admins": 2,
            "customers": 75,
            "status": "Deactivate"
        },
        {
            "name": "Baderom Pluss AS",
            "main_manager": "Camilla Larson",
            "employees": 75,
            "admins": 5,
            "customers": 200,
            "status": "Activate"
        },
        {
            "name": "Baderom Pluss AS",
            "main_manager": "Camilla Larson",
            "employees": 12,
            "admins": 1,
            "customers": 40,
            "status": "Activate"
        },
        {
            "name": "Build Forum",
            "main_manager": "Christopher Main",
            "employees": 90,
            "admins": 4,
            "customers": 250,
            "status": "Deactivate"
        },
        {
            "name": "Build Forum",
            "main_manager": "Camilla Larson",
            "employees": 20,
            "admins": 2,
            "customers": 60,
            "status": "Activate"
        },
        {
            "name": "Company G",
            "main_manager": "Christopher Main",
            "employees": 55,
            "admins": 3,
            "customers": 150,
            "status": "Activate"
         },
        // {
        //     "name": "Company H",
        //     "main_manager": "David Harris",
        //     "employees": 35,
        //     "admins": 2,
        //     "customers": 100,
        //     "status": "Deactivate"
        // },
        // {
        //     "name": "Company I",
        //     "main_manager": "Jessica Taylor",
        //     "employees": 65,
        //     "admins": 4,
        //     "customers": 180,
        //     "status": "Activate"
        // },
        // {
        //     "name": "Company J",
        //     "main_manager": "Daniel Lewis",
        //     "employees": 40,
        //     "admins": 2,
        //     "customers": 110,
        //     "status": "Deactivate"
        // },
        // {
        //     "name": "Company K",
        //     "main_manager": "Emily King",
        //     "employees": 22,
        //     "admins": 1,
        //     "customers": 80,
        //     "status": "Activate"
        // },
        // {
        //     "name": "Company L",
        //     "main_manager": "Robert Scott",
        //     "employees": 50,
        //     "admins": 3,
        //     "customers": 130,
        //     "status": "Deactivate"
        // },
        // {
        //     "name": "Company M",
        //     "main_manager": "Olivia Adams",
        //     "employees": 80,
        //     "admins": 5,
        //     "customers": 210,
        //     "status": "Activate"
        // },
        // {
        //     "name": "Company N",
        //     "main_manager": "Benjamin Carter",
        //     "employees": 18,
        //     "admins": 2,
        //     "customers": 55,
        //     "status": "Deactivate"
        // },
        // {
        //     "name": "Company O",
        //     "main_manager": "Sophia Evans",
        //     "employees": 65,
        //     "admins": 4,
        //     "customers": 160,
        //     "status": "Activate"
        // },
        // {
        //     "name": "Company P",
        //     "main_manager": "William Wilson",
        //     "employees": 40,
        //     "admins": 3,
        //     "customers": 90,
        //     "status": "Deactivate"
        // },
        // {
        //     "name": "Company Q",
        //     "main_manager": "James Martinez",
        //     "employees": 72,
        //     "admins": 5,
        //     "customers": 210,
        //     "status": "Activate"
        // },
        // {
        //     "name": "Company R",
        //     "main_manager": "Mia White",
        //     "employees": 25,
        //     "admins": 2,
        //     "customers": 70,
        //     "status": "Deactivate"
        // },
        // {
        //     "name": "Company S",
        //     "main_manager": "Elijah Thomas",
        //     "employees": 90,
        //     "admins": 6,
        //     "customers": 300,
        //     "status": "Deactivate"
        // },
        // {
        //     "name": "Company T",
        //     "main_manager": "Charlotte Roberts",
        //     "employees": 52,
        //     "admins": 3,
        //     "customers": 150,
        //     "status": "Deactivate"
        // }
    ]
  return (
    <>
      <InternationalHeader />
    <div className="m-5 ">
        <div className=" mt-4">
            <div className="mb-4">
                <p>
                    <strong>Norway</strong> ^ <span>Licenses</span>
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
                        <span className="fw-bold">Language:<span className="ms-2 fw-normal">Norwegian</span></span><br />
                        <span className="fw-bold">Currency:<span className="ms-2 fw-normal">Norwegian Krone</span></span><br />
                        <span className="fw-bold">Organisation number:<span className="ms-2 fw-normal">817158722</span></span>
                    </div>
                </Col>
                <Col className="justify-content-end">
                    {/* First Row */}
                    <Col className="d-flex gap-4 w-100 justify-content-end">
                        <div className="box-design">

                            <div className=" border border-2 p-2 d-flex justify-content-between rounded-3">
                                <div>
                                    <span className="text-muted">PORTAL USERS</span>
                                    <p className="fs-3 fw-bold" style={{ color: "#41619A" }}>4,566</p>
                                </div>
                                <div className="d-flex justify-content-end ">
                                    <img src={portaluser} alt="" style={{ height: "15px", width: "15px" }} className="me-2 " />
                                </div>
                            </div>

                        </div>
                        <div className="box-design">
                            <div className=" border border-2 p-2 d-flex justify-content-between rounded-3">
                                <div>
                                    <span className="text-muted">CUSTOMERS</span>
                                    <p className="fs-3 fw-bold" style={{ color: "#41619A" }}>1,546</p>
                                </div>
                                <div className="d-flex justify-content-end ">
                                    <img src={customer} alt="" style={{ height: "15px", width: "15px" }} className="me-2 " />
                                </div>

                            </div>
                        </div>
                    </Col>
                    <Col className="d-flex gap-4 w-100 justify-content-end mt-3">
                        <div className="box-design">
                            <div className=" border border-2 p-2  d-flex justify-content-between rounded-3">
                                <div>
                                    <span className="text-muted">COMPANIES</span>
                                    <p className="fs-3 fw-bold" style={{ color: "#41619A" }}>587</p>
                                </div>
                                <div className="d-flex justify-content-end ">
                                    <img src={companies} alt="" style={{ height: "15px", width: "15px" }} className="me-2 " />
                                </div>

                            </div>
                        </div>
                        <div className="box-design">

                            <div className=" border border-2 p-2  d-flex justify-content-between rounded-3">
                                <div>
                                    <span className="text-muted">PRODUCTS</span>
                                    <p className="fs-3 fw-bold" style={{ color: "#41619A" }}>5,445</p>
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
                    {/* User name and Email */}
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


            <TableContainer
                columns={columns}
                data={users || []}
                isGlobalFilter={false}
                isPagination={true}
                SearchPlaceholder="Search..."
                isCustomPageSize={false}
                isAddButton={false}
                buttonClass="btn btn-success waves-effect waves-light addContact-modal mb-2"
                buttonName="New Contact"
                tableClass=" table-nowrap  dt-responsive nowrap w-100  no-footer dtr-inline"
                theadClass="table-light"
                paginationWrapper="dataTables_paginate paging_simple_numbers pagination-rounded"
                pagination="pagination"
            />
        </div>
    </div>
</>
  )
}

export default OwnerPage