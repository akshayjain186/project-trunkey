import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import classnames from "classnames";
import { Link } from 'react-router-dom';
import { Container, Row, Col, NavItem, NavLink, Card, } from 'reactstrap';

const PostJobDetails = () => {


  const cardData = [
    {
      id: 1,
      companyName: "Baderom Pluss",
      profileLink: "#",
      buttonText: "+1 new message",
      imgSrc: "", // Add image source here
    },
    {
      id: 2,
      companyName: "Baderom Pluss",
      profileLink: "#",
      buttonText: "+1 new message",
      imgSrc: "", // Add image source here
    },
  ];

  const tagsData = [
    { id: 1, name: "Design" },
    { id: 2, name: "Development" },
    { id: 3, name: "Businessffffff" },
    { id: 4, name: "Project" },
    { id: 5, name: "Travel" },
    { id: 6, name: "Lifestyle" },
    { id: 7, name: "Photographygffsgfgh" },
    { id: 8, name: "Design" },
    { id: 9, name: "Development" },
    { id: 10, name: "Business" },
    { id: 11, name: "Projectjfghj" },
    { id: 12, name: "Travel" },
    { id: 13, name: "Lifestyle" },
    { id: 14, name: "Photographykjfdhjfjf" },
    { id: 15, name: "Development" },

  ]


  const [activeTab, setActiveTab] = useState("1");

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  return (
    // <Container fluid className=''>
    //   <Row className='mt-3'>
    //     <Col xs="9" className='h-70' style={{ paddingTop: '80px', fontFamily: 'montserrat' }}>
    //       <div className="d-flex ">
    //         <h2 className='me-3'></h2>
    //         <p className='p-1' ></p>
    //       </div>
    //       <Row className='m-4'>
    //         <Col xs="12" className="d-flex align-items-center fs-5 nav nav-tabs nav-tabs-custom bg-none">
    //           <NavItem>
    //             <NavLink className={classnames({ active: activeTab === "1", })} onClick={() => { toggleTab("1"); }}>
    //               All Orders
    //             </NavLink>
    //           </NavItem>
    //           <NavItem>
    //             <NavLink className={classnames({ active: activeTab === "2", })} onClick={() => { toggleTab("2"); }}>
    //               Processing
    //             </NavLink>
    //           </NavItem>
    //         </Col>
    //         <hr className="" />
    //       </Row>
    //       <Row className="align-items-stretch">
    //         {cardData.map((card) => (
    //           <Col xs="12" key={card.id}>
    //             <Card className="me-4 ms-4">
    //               <Row className="d-flex align-items-center p-3">
    //                 <Col xs="3" sm="2" className="text-center">
    //                   <img
    //                     src={card.imgSrc}
    //                     alt="Company Logo"
    //                     style={{ maxWidth: "50px", maxHeight: "50px", borderRadius: "50%" }}
    //                   />
    //                 </Col>
    //                 <Col xs="7" sm="8">
    //                   <span className="fs-5 fw-bold">{card.companyName}</span><br />
    //                   <a href={card.profileLink} className="text-muted small">see profile</a>
    //                 </Col>
    //                 <Col xs="2" sm="2" className="text-end">
    //                   <button
    //                     className="p-2 mt-3 rounded-4 border-0 w-100"
    //                     style={{ color: "#41619A", background: "#F4F8FC", fontSize: "12px" }}
    //                   >
    //                     {card.buttonText}
    //                   </button>
    //                 </Col>
    //               </Row>
    //             </Card>
    //           </Col>
    //         ))}
    //       </Row>
    //     </Col>

    //     <Col xs="3"className='mt-5 p-4 h-100' style={{background:"#F4F8FC"}}>

    //       <div className='d-flex'>
    //         <img className='me-3' src="ee" />
    //         <span>Apartment</span>
    //       </div>
    //       <div className='d-flex'>
    //         <img className=' pt-4 me-2' src="dd" />
    //         <div className='p-2'>
    //           <h3>Big Job request</h3>
    //           <span>Venåsvegen 42, 0672 Oslo</span>
    //         </div>
    //       </div>
    //       <div className='d-flex justify-content-center align-items-center'>
    //         <span className='text-'>
    //           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex molestiae magni, architecto quis cumque et nam ut dolor culpa dolorem dolores ab eos vero ipsam, delectus esse odio? Officia, natus.
    //           Porro molestiae, veniam consectetur, doloremque unde ad, autem inventore illum atque esse odio explicabo dolorem nobis suscipit a nulla? Commodi placeat quasi aut laboriosam porro deleniti esse fugiat provident distinctio.
    //         </span>
    //       </div>
    //       <div className='mt-4'>
    //         <h3>Services</h3>
    //       </div>

    //       <hr className="my-4" />

    //       <div className='p-2'>
    //         <div className='d-flex'>
    //           <img className='me-3' src="" alt='ss' />
    //           <h5 className="mb-1">Bathroom</h5>
    //         </div>

    //         <ul className="list-inline widget-tag">
    //           {
    //             (tagsData || []).map((item) => (
    //               <li className="list-inline-item" key={item.id}>
    //                 <Link to="#" className="badge bg-light font-size-12 mt-2">
    //                   {item.name}
    //                 </Link>
    //               </li>
    //             ))
    //           }
    //         </ul>
    //         <div>
    //           <button className='p-2 ms-2 me-4 rounded-3'>Room.pdf</button>
    //           <button className='p-2 rounded-3'>Room.pdf</button>
    //         </div>
    //       </div>

    //       <hr className="my-" />

    //       <div className='p-2'>
    //         <div className='d-flex'>
    //           <img className='me-3' src="" alt='ss' />
    //           <h5 className=" mb-1">Bathroom</h5>
    //         </div>

    //         <ul className="list-inline widget-tag">
    //           {
    //             (tagsData || []).map((item) => (
    //               <li className="list-inline-item" key={item.id}>
    //                 <Link to="#" className="badge bg-light font-size-12 mt-2">
    //                   {item.name}
    //                 </Link>
    //               </li>
    //             ))
    //           }
    //         </ul>
    //         <div>
    //           <button className='p-2 ms-2 me-4 rounded-3'>Room.pdf</button>
    //           <button className='p-2 rounded-3'>Room.pdf</button>
    //         </div>
    //       </div>




    //     </Col>
    //   </Row>
    // </Container>
    <Container fluid className="">
  <Row className="mt-3">
    {/* Left Section */}
    <Col xs="12" lg="9" className="h-70" style={{ paddingTop: "80px", fontFamily: "montserrat" }}>
      <div className="d-flex flex-wrap">
        <h2 className="me-3"></h2>
        <p className="p-1"></p>
      </div>

      {/* Navigation Tabs */}
      <Row className="m-4">
        <Col xs="12">
          <ul className="nav nav-tabs nav-tabs-custom bg-none fs-5">
            <li className="nav-item">
              <NavLink
                className={classnames("nav-link", { active: activeTab === "1" })}
                onClick={() => toggleTab("1")}
              >
                All Orders
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={classnames("nav-link", { active: activeTab === "2" })}
                onClick={() => toggleTab("2")}
              >
                Processing
              </NavLink>
            </li>
          </ul>
        </Col>
        <hr />
      </Row>

      {/* Cards */}
      <Row className="align-items-stretch g-3">
        {cardData.map((card) => (
          <Col xs="12" md="6" lg="6" key={card.id}>
            <Card className="me-4 ms-4">
              <Row className="d-flex align-items-center p-3">
                <Col xs="3" sm="2" className="text-center">
                  <img
                    src=""
                    alt="Company Logo"
                    style={{ maxWidth: "50px", maxHeight: "50px", borderRadius: "50%" }}
                  />
                </Col>
                <Col xs="7" sm="8">
                  <span className="fs-5 fw-bold">company name</span>
                  <br />
                  <a href="" className="text-muted small">see profile</a>
                </Col>
                <Col xs="2" sm="2" className="text-end">
                  <button
                    className="p-2 mt-3 rounded-4 border-0 w-100"
                    style={{ color: "#41619A", background: "#F4F8FC", fontSize: "12px" }}
                  >
                    button text
                  </button>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </Col>

    {/* Right Section */}
    <Col xs="12" lg="3" className="mt-5 p-4 h-100" style={{ background: "#F4F8FC" }}>
      {/* Info Section */}
      <div className="d-flex align-items-center mb-3">
        <img className="me-3" src="ee" alt="Apartment" />
        <span>Apartment</span>
      </div>

      <div className="d-flex align-items-start mb-3">
        <img className="pt-4 me-2" src="dd" alt="Job" />
        <div className="p-2">
          <h3>Big Job request</h3>
          <span>Venåsvegen 42, 0672 Oslo</span>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center mb-4">
        <p className="text-muted">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex molestiae magni, architecto quis cumque et nam ut dolor culpa dolorem dolores ab eos vero ipsam, delectus esse odio? Officia, natus.
          Porro molestiae, veniam consectetur, doloremque unde ad, autem inventore illum atque esse odio explicabo dolorem nobis suscipit a nulla? Commodi placeat quasi aut laboriosam porro deleniti esse fugiat provident distinctio.
        </p>
      </div>

      <div className="mt-4">
        <h3>Services</h3>
      </div>
      <hr className="my-4" />

      {/* Service Items */}
      {tagsData.map((service, index) => (
        <div className="p-2 mb-3" key={index}>
          <div className="d-flex align-items-center mb-2">
            <img className="me-3" src="" alt="Service" />
            <h5 className="mb-0">{service.name}</h5>
          </div>
          <ul className="list-inline widget-tag">
            {service.tags.map((tag, tagIndex) => (
              <li className="list-inline-item" key={tagIndex}>
                <Link to="#" className="badge bg-light font-size-12 mt-2">
                  {tag}
                </Link>
              </li>
            ))}
          </ul>
          <div className="d-flex mt-2">
            <button className="p-2 me-2 rounded-3">Room.pdf</button>
            <button className="p-2 rounded-3">Room.pdf</button>
          </div>
        </div>
      ))}
    </Col>
  </Row>
</Container>

  );
};

export default PostJobDetails;