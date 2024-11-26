import React from "react";
import { useState, useMemo } from "react";
import { Card, CardBody, Col, Label, Row, Input,} from "reactstrap";
import logo from '../../assets/images/icons/turnkey logo.png'
import flag from '../../assets/images/flag-round.png'
import user from '../../assets/images/user.png'
import location from '../../assets/images/location.png'
import TableContainer from "../../components/Common/TableContainer";
import { Link } from "react-router-dom";
const UserDetails = () => {
    const [ActivateLink, setActivateLink] = useState(null);
    const handleLinkClick = (linkName) => {
        setActivateLink(linkName); // Update the active link when clicked
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
                    <div className="text-danger">
                      <i className="bx bx-show me-2"style={{color:"#41619A"}}></i> 
                      <a href="#" className=" text-danger mb-0">Deactivate</a>
                    </div>                          
                  );
                }
              },
        ],
        []
    );
    const users=[
        {
          "Name": "Company A",
          "Main manager": "John Doe",
          "Employees": 50,
          "admins": 3,
          "customers": 120,
          "status": "Activate"
        },
        {
          "Name": "Company B",
          "Main manager": "Jane Smith",
          "Employees": 30,
          "admins": 2,
          "customers": 75,
          "status": "Deactivate"
        },
        {
          "Name": "Company C",
          "Main manager": "Alex Johnson",
          "Employees": 75,
          "admins": 5,
          "customers": 200,
          "status": "Activate"
        },
        {
          "Name": "Company D",
          "Main manager": "Sarah Lee",
          "Employees": 12,
          "admins": 1,
          "customers": 40,
          "status": "Activate"
        },
        {
          "Name": "Company E",
          "Main manager": "Michael Clark",
          "Employees": 90,
          "admins": 4,
          "customers": 250,
          "status": "Deactivate"
        },
        {
          "Name": "Company F",
          "Main manager": "Chris Walker",
          "Employees": 20,
          "admins": 2,
          "customers": 60,
          "status": "Activate"
        },
        {
          "Name": "Company G",
          "Main manager": "Nancy Green",
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
                <div className=" mt-4">
                    <div className="mb-4">
                        <p>
                            <strong>Licenses</strong> &gt; <span>Norway</span>
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
                            <Col className="d-flex gap-4 w-100 ">
                                <div className="w-50">
                                    <div className=" border border-2 p-1">
                                        <span className="">PORTAL USERS</span>
                                        <p className="fs-4 fw-bold" style={{ color: "#41619A" }}>4,566</p>
                                    </div>
                                </div>
                                <div className="w-50">
                                    <div className=" border border-2 p-1">
                                        <span className="">CUSTOMERS</span>
                                        <p className="fs-4 fw-bold" style={{ color: "#41619A" }}>1,546</p>
                                    </div>
                                </div>
                            </Col>
                            <Col className="d-flex gap-4 w-100 justify-content-end mt-3">
                                <div className="w-50">
                                    <div className=" border border-2 p-1">
                                        <span className="">COMPANIES</span>
                                        <p className="fs-4 fw-bold" style={{ color: "#41619A" }}>587</p>
                                    </div>
                                </div>
                                <div className="w-50">
                                    <div className=" border border-2 p-1">
                                        <span className="">PRODUCTS</span>
                                        <p className="fs-4 fw-bold" style={{ color: "#41619A" }}>5,445</p>
                                    </div>
                                </div>
                            </Col>
                        </Col>
                    </Row>
                    
                    <h5 className="mt-4">Owner</h5>
                    <div className=" my-3 mt-5 shadow-sm flex-wrap p-2" style={{ background: "#F4F8FC" }}>
                    
                    
                        <div className=" d-flex align-items-center justify-content-between pb-0">
                            <div className="d-flex">
                                <img
                                    src={user}
                                    alt="Owner"
                                    className="rounded-circle me-3 h-25 w-25"
                                />
                                <div>
                                    <h5 className="mb-1">Harry Stone</h5>
                                    <p className="">harry.stone@gmail.com</p>
                                </div>
                            </div>
                            <div className="ms-auto d-flex gap-5 w-75 justify-content-between  ">
                                <div className="w-25 d-flex">
                                    <img src={location} alt="" style={{ height: "15px", width: "15px" }} className="me-2 " />
                                    <p className="">
                                        Vossegata 22, 0475 Oslo
                                    </p>
                                </div>
                                <div className="w-25 text-center">
                                    <p className="">
                                        <i className="bx bx-phone me-2"></i> +4721607947
                                    </p>
                                </div>
                                <div className="w-25 text-start">
                                    <p>
                                        <i className="bx bx-envelope me-2"></i> tyler_hopp@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="d-flex align-items-center border-bottom ">
                            <a href="#"
                                className={`me-4 anchor-text ${ActivateLink === 'Managers' ? 'border-bottom border-black ' : ''}`}
                                onClick={() => handleLinkClick('Managers')}
                            >Managers</a>
                            <a
                                href="#"
                                className={` me-4 anchor-text ${ActivateLink === 'Super admins' ? 'border-bottom border-black ' : ''}`}
                                onClick={() => handleLinkClick('Super admins')}
                            >Super admins</a>
                            <a
                                href="#"
                                className={` me-4 anchor-text ${ActivateLink === 'Admins' ? 'border-bottom border-black ' : ''}`}
                                onClick={() => handleLinkClick('Admins')}
                            >Admins</a>
                            <a
                                href="#"
                                className={`me-4 anchor-text ${ActivateLink === 'Customers' ? 'border-bottom border-black ' : ''}`}
                                onClick={() => handleLinkClick('Customers')}
                            >Customers</a>
                        </div>
                    </div>
                    <TableContainer
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
                    />
                </div>

            </div>
        </>
    );
};

export default UserDetails;
