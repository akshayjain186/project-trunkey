import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PostJob from './PostedJobs/PostJob';
import "./MyJobs.css"
import AcceptedJob from './AcceptedJobs/AcceptedJob';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Input,
} from 'reactstrap';


const JobListPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <Container fluid className="py-4 mt-md-5 p-5" style={{ fontFamily: "montserrat" }}>
      <Row className="mb-4">
        <Col xs="12" className="d-flex justify-content-between align-items-center">
          <h3 className="mb-0">My jobs</h3>

          <span className='mb-0'>
            <i className="bx bx-bell" style={{ fontSize: '24px' }}></i>
          </span>
        </Col>
      </Row>


      <Row className="mb-4">
        <Col xs="12" className="d-flex align-items-center ">
          <a href="#"
            className={`me-4 anchor-text ${activeLink === 'posted' ? 'border-bottom border-black ' : ''}`}
            onClick={() => handleLinkClick('posted')}
          >Posted Jobs</a>
          <a
            href="#"
            className={` anchor-text ${activeLink === 'accepted' ? 'border-bottom border-black ' : ''}`}
            onClick={() => handleLinkClick('accepted')}
          >Accepted Jobs</a>
        </Col>
        <hr className="border  " />
      </Row>

      {/* <Row className="mb-4">
        <Col xs="3" className='d-flex justify-content-between align-items-center  '>
          <div className="search-box" style={{ position: 'relative' }}>
            <Input type="search" placeholder="Search..." />
            <i className="bx bx-search-alt-2 icon-style"></i>

          </div>
        </Col>
        <Col className='d-flex justify-content-between align-items-center  '>
          <Button color="primary" className='ms-auto' >+ Post new job</Button>
        </Col>
      </Row> */}

      {activeLink === 'posted' && (
        <Row>
          <Col xs="12">
            <PostJob
              title="Big job"
              location="Venåsvegen 42, 0672 Oslo"
              description="That is a whole renovation of the bathroom-kitchen sector in the old cottage. It's very small and does not have all facilities. First of all, it needs pipes replacement and new floor. Also there is no hot water there and we need to fix this."
              tags={['Bathroom', 'Kitchen']}
              responses={1}
            />
          </Col>
        </Row>
      )}


      {activeLink === 'accepted' && (
        <Row>
          <Col xs="12">
            <AcceptedJob
            location="Venåsvegen 42, 0672 Oslo"
            description="Old bathroom renovation"
            Company="Baderom Pluss AS"
            Status="Waiting for the contract
"
            />
          </Col>
        </Row>
      )}
    </Container>
   
  );
};

export default JobListPage;

