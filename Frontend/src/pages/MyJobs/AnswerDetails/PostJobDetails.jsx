import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import classnames from "classnames";
import { Link } from 'react-router-dom';
import { Container, Row, Col, NavItem, NavLink, Card, } from 'reactstrap';
import img from '../../../assets/images/imgGroup.png'

const PostJobDetails = () => {


  const cardData = [
    {
      id: 1,
      companyName: "Baderom Pluss",
      profileLink: "#",
      buttonText: "+1 new message",
      imgSrc: img // Add image source here
    },
    {
      id: 2,
      companyName: "Baderom Pluss",
      profileLink: "#",
      buttonText: "+1 new message",
      imgSrc: img, // Add image source here
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

  const card = [

  ]


  const [activeTab, setActiveTab] = useState("1");

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  return (
    //     <Container fluid className=''>
    //       <Row className='mt-3'>
    //         <Col xs="9" className='h-70' style={{ paddingTop: '80px', fontFamily: 'montserrat' }}>
    //           <div className="d-flex ">
    //             <h2 className='me-3'></h2>
    //             <p className='p-1' ></p>
    //           </div>
    //           <Row className='m-4'>
    //             <Col xs="12" className="d-flex align-items-center fs-5 nav nav-tabs nav-tabs-custom bg-none">
    //               <NavItem>
    //                 <NavLink className={classnames({ active: activeTab === "1", })} onClick={() => { toggleTab("1"); }}>
    //                   All Orders
    //                 </NavLink>
    //               </NavItem>
    //               <NavItem>
    //                 <NavLink className={classnames({ active: activeTab === "2", })} onClick={() => { toggleTab("2"); }}>
    //                   Processing
    //                 </NavLink>
    //               </NavItem>
    //             </Col>
    //             <hr className="" />
    //           </Row>




    //           <Row className="align-items-stretch flex-wrap">
    //             {cardData.map((card) => (
    //               <Col xs="12" key={card.id}>
    //                 <Card className="me-4 ms-4">
    //                   <Row className="d-flex align-items-center p-3">
    //                     <Col xs="3" className="text-center">
    //                       <img
    //                         src={card.imgSrc}
    //                         alt="Company Logo"
    //                         style={{ maxWidth: "50px", maxHeight: "50px",  }}
    //                       />
    //                     </Col>
    //                     <Col xs="7" >
    //                       <span className="fs-5 fw-bold">{card.companyName}</span><br />
    //                       <a href={card.profileLink} className="text-muted small">see profile</a>
    //                     </Col>
    //                     <Col xs="2" sm="2" className="text-end">
    //                       <button
    //                         className="p-2 mt-3 rounded-4 border-0 w-100"
    //                         style={{ color: "#41619A", background: "#F4F8FC", fontSize: "12px" }}
    //                       >
    //                         {card.buttonText}
    //                       </button>
    //                     </Col>
    //                   </Row>
    //                 </Card>
    //               </Col>
    //             ))}
    //           </Row>
    //           <Row className="align-items-stretch ">
    //   {cardData.map((card) => (
    //     <Col xs="12" md="6" lg="4" key={card.id} className="mb-4">
    //       <Card className="me-2 ms-2 h-100">
    //         <Row className="d-flex align-items-center p-3">
    //           <Col xs="3" className="text-center">
    //             <img
    //               src={card.imgSrc}
    //               alt="Company Logo"
    //               style={{ maxWidth: "50px", maxHeight: "50px" }}
    //             />
    //           </Col>
    //           <Col xs="7" className="mt-2 mt-md-0">
    //             <span className="fs-5 fw-bold">{card.companyName}</span><br />
    //             <a href={card.profileLink} className="text-muted small">see profile</a>
    //           </Col>
    //           <Col xs="12" sm="2" className="text-end mt-2 mt-sm-0">
    //             <button
    //               className="p-2 rounded-4 border-0 w-100"
    //               style={{ color: "#41619A", background: "#F4F8FC", fontSize: "12px" }}
    //             >
    //               {card.buttonText}
    //             </button>
    //           </Col>
    //         </Row>
    //       </Card>
    //     </Col>
    //   ))}
    // </Row>

    //         </Col>







    //         <Col xs="3"className='mt-5 p-4 h-100' style={{background:"#F4F8FC"}}>

    //           <div className='d-flex'>
    //             <img className='me-3' src="img" />
    //             <span>Apartment</span>
    //           </div>
    //           <div className='d-flex'>
    //             <img className=' pt-4 me-2' src="img" />
    //             <div className='p-2'>
    //               <h3>Big Job request</h3>
    //               <span>Venåsvegen 42, 0672 Oslo</span>
    //             </div>
    //           </div>
    //           <div className='d-flex justify-content-center align-items-center'>
    //             <span className='text-'>
    //               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex molestiae magni, architecto quis cumque et nam ut dolor culpa dolorem dolores ab eos vero ipsam, delectus esse odio? Officia, natus.
    //               Porro molestiae, veniam consectetur, doloremque unde ad, autem inventore illum atque esse odio explicabo dolorem nobis suscipit a nulla? Commodi placeat quasi aut laboriosam porro deleniti esse fugiat provident distinctio.
    //             </span>
    //           </div>
    //           <div className='mt-4'>
    //             <h3>Services</h3>
    //           </div>

    //           <hr className="my-4" />

    //           <div className='p-2'>
    //             <div className='d-flex'>
    //               <img className='me-3' src="" alt='ss' />
    //               <h5 className="mb-1">Bathroom</h5>
    //             </div>

    //             <ul className="list-inline widget-tag">
    //               {
    //                 (tagsData || []).map((item) => (
    //                   <li className="list-inline-item" key={item.id}>
    //                     <Link to="#" className="badge bg-light font-size-12 mt-2">
    //                       {item.name}
    //                     </Link>
    //                   </li>
    //                 ))
    //               }
    //             </ul>
    //             <div>
    //               <button className='p-2 ms-2 me-4 rounded-3'>Room.pdf</button>
    //               <button className='p-2 rounded-3'>Room.pdf</button>
    //             </div>
    //           </div>

    //           <hr className="my-" />

    //           <div className='p-2'>
    //             <div className='d-flex'>
    //               <img className='me-3' src="" alt='ss' />
    //               <h5 className=" mb-1">Bathroom</h5>
    //             </div>

    //             <ul className="list-inline widget-tag">
    //               {
    //                 (tagsData || []).map((item) => (
    //                   <li className="list-inline-item" key={item.id}>
    //                     <Link to="#" className="badge bg-light font-size-12 mt-2">
    //                       {item.name}
    //                     </Link>
    //                   </li>
    //                 ))
    //               }
    //             </ul>
    //             <div>
    //               <button className='p-2 ms-2 me-4 rounded-3'>Room.pdf</button>
    //               <button className='p-2 rounded-3'>Room.pdf</button>
    //             </div>
    //           </div>




    //         </Col>
    //         <Col xs="12" sm="6" md="6" lg="3" className='mt-5 p-4 h-100' style={{ background: "#F4F8FC" }}>
    //   <div className='d-flex align-items-center mb-3'>
    //     <img className='me-3' src="img" alt="icon" style={{ maxWidth: "40px" }} />
    //     <span className='fs-6'>Apartment</span>
    //   </div>

    //   <div className='d-flex flex-column flex-md-row align-items-start mb-3'>
    //     <img className='pt-4 me-2' src="img" alt="thumbnail" style={{ maxWidth: "100px" }} />
    //     <div className='p-2'>
    //       <h3 className='fs-5'>Big Job Request</h3>
    //       <span className='text-muted small'>Venåsvegen 42, 0672 Oslo</span>
    //     </div>
    //   </div>

    //   <div className='mb-3'>
    //     <p className='text-muted small'>
    //       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex molestiae magni, architecto quis cumque et nam ut dolor culpa dolorem dolores ab eos vero ipsam, delectus esse odio? Officia, natus. Porro molestiae, veniam consectetur, doloremque unde ad, autem inventore illum atque esse odio explicabo dolorem nobis suscipit a nulla? Commodi placeat quasi aut laboriosam porro deleniti esse fugiat provident distinctio.
    //     </p>
    //   </div>

    //   <div className='mt-4'>
    //     <h3 className='fs-5'>Services</h3>
    //   </div>

    //   <hr className="my-3" />

    //   <div className='p-2'>
    //     <div className='d-flex align-items-center mb-2'>
    //       <img className='me-3' src="" alt='service-icon' style={{ maxWidth: "30px" }} />
    //       <h5 className="mb-1 fs-6">Bathroom</h5>
    //     </div>

    //     <ul className="list-inline widget-tag">
    //       {(tagsData || []).map((item) => (
    //         <li className="list-inline-item" key={item.id}>
    //           <Link to="#" className="badge bg-light font-size-12 mt-2">
    //             {item.name}
    //           </Link>
    //         </li>
    //       ))}
    //     </ul>

    //     <div className='d-flex flex-wrap mt-2'>
    //       <button className='p-2 me-3 mb-2 rounded-3'>Room.pdf</button>
    //       <button className='p-2 mb-2 rounded-3'>Room.pdf</button>
    //     </div>
    //   </div>

    //   <hr className="my-3" />

    //   <div className='p-2'>
    //     <div className='d-flex align-items-center mb-2'>
    //       <img className='me-3' src="" alt='service-icon' style={{ maxWidth: "30px" }} />
    //       <h5 className="mb-1 fs-6">Bathroom</h5>
    //     </div>

    //     <ul className="list-inline widget-tag">
    //       {(tagsData || []).map((item) => (
    //         <li className="list-inline-item" key={item.id}>
    //           <Link to="#" className="badge bg-light font-size-12 mt-2">
    //             {item.name}
    //           </Link>
    //         </li>
    //       ))}
    //     </ul>

    //     <div className='d-flex flex-wrap mt-2'>
    //       <button className='p-2 me-3 mb-2 rounded-3'>Room.pdf</button>
    //       <button className='p-2 mb-2 rounded-3'>Room.pdf</button>
    //     </div>
    //   </div>
    // </Col>

    //       </Row>
    //     </Container>
    <Container fluid className=''>
      <Row className='mt-3'>
        <Col xs="9" className='h-70' style={{ paddingTop: '80px', fontFamily: 'montserrat' }}>
          <div className="d-flex ">
            <h2 className='me-3'></h2>
            <p className='p-1'></p>
          </div>
          <Row className='m-4'>
            <Col xs="12" className="d-flex align-items-center fs-5 nav nav-tabs nav-tabs-custom bg-none">
              <NavItem>
                <NavLink className={classnames({ active: activeTab === "1" })} onClick={() => { toggleTab("1"); }}>
                  All Orders
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={classnames({ active: activeTab === "2" })} onClick={() => { toggleTab("2"); }}>
                  Processing
                </NavLink>
              </NavItem>
            </Col>
            <hr className="" />
          </Row>

          <Row className="align-items-stretch">
            {cardData.map((card) => (
              <Col xs="12" key={card.id} className="mb-4">
                <Card className="me-2 ms-2 h-100">
                  <Row className="d-flex align-items-center p-3">
                    <Col xs="1" className="text-center">
                      <img
                        src={card.imgSrc}
                        alt="Company Logo"
                        style={{ maxWidth: "50px", maxHeight: "50px" }}
                      />
                    </Col>
                    <Col xs="9" className="mt-2 mt-md-0">
                      <span className="fs-5 fw-bold">{card.companyName}</span><br />
                      <a href={card.profileLink} className="text-muted small">see profile</a>
                    </Col>
                    <Col xs="12" sm="2" className="text-end mt-2 mt-sm-0">
                      <button
                        className="p-2 rounded-4 border-0 w-100"
                        style={{ color: "#41619A", background: "#F4F8FC", fontSize: "12px" }}
                      >
                        {card.buttonText}
                      </button>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>

        <Col xs="12" sm="6" md="6" lg="3" className='mt-5 p-4 h-100' style={{ background: "#F4F8FC" }}>
          <div className='d-flex align-items-center mb-3'>
            <img className='me-3' src="img" alt="icon" style={{ maxWidth: "40px" }} />
            <span className='fs-6'>Apartment</span>
          </div>

          <Row className='mb-3'>
            <Col xs="12">
              <div className='d-flex flex-column align-items-start'>
                <img className='pt-4 mb-2' src="img" alt="thumbnail" style={{ maxWidth: "100px" }} />
                <div className='p-2'>
                  <h3 className='fs-5'>Big Job Request</h3>
                  <span className='text-muted small'>Venåsvegen 42, 0672 Oslo</span>
                </div>
              </div>
            </Col>
          </Row>

          <Row className='mb-3'>
            <Col xs="12">
              <p className='text-muted small'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex molestiae magni, architecto quis cumque et nam ut dolor culpa dolorem dolores ab eos vero ipsam, delectus esse odio? Officia, natus. Porro molestiae, veniam consectetur, doloremque unde ad, autem inventore illum atque esse odio explicabo dolorem nobis suscipit a nulla? Commodi placeat quasi aut laboriosam porro deleniti esse fugiat provident distinctio.
              </p>
            </Col>
          </Row>

          <Row>
            <Col xs="12">
              <h3 className='fs-5'>Services</h3>
            </Col>
          </Row>

          <hr className="my-3" />

          <Row className='p-2 mb-3'>
            <Col xs="12">
              <div className='d-flex align-items-center mb-2'>
                <img className='me-3' src="" alt='service-icon' style={{ maxWidth: "30px" }} />
                <h5 className="mb-1 fs-6">Bathroom</h5>
              </div>

              <ul className="list-inline widget-tag">
                {(tagsData || []).map((item) => (
                  <li className="list-inline-item" key={item.id}>
                    <Link to="#" className="badge bg-light font-size-12 mt-2">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* <div className='d-flex flex-column mt-2'>
            <button className='p-2 mb-2 rounded-3'>Room.pdf</button>
            <button className='p-2 mb-2 rounded-3'>Room.pdf</button>
          </div> */}
              <div className='d-flex flex-wrap mt-2'>
                <button className='p-2 me-3 mb-2 rounded-3'>Room.pdf</button>
                <button className='p-2 mb-2 rounded-3'>Room.pdf</button>
              </div>
            </Col>
          </Row>

          <hr className="my-3" />

          <Row className='p-2'>
            <Col xs="12">
              <div className='d-flex align-items-center mb-2'>
                <img className='me-3' src="" alt='service-icon' style={{ maxWidth: "30px" }} />
                <h5 className="mb-1 fs-6">Bathroom</h5>
              </div>

              <ul className="list-inline widget-tag">
                {(tagsData || []).map((item) => (
                  <li className="list-inline-item" key={item.id}>
                    <Link to="#" className="badge bg-light font-size-12 mt-2">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className='d-flex flex-wrap mt-2'>
                <button className='p-2 me-3 mb-2 rounded-3'>Room.pdf</button>
                <button className='p-2 mb-2 rounded-3'>Room.pdf</button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>


  );
};

export default PostJobDetails;