import React from 'react'
import {

  Card,
  CardBody,
  Button,
  Container,
  Row,
  Col,
  Input,

} from 'reactstrap';
function InternationalLogin() {
  const licenses = {
    Europe: [
      { country: "Norway", flag: "🇳🇴", name: "Jakob Issa", currency: "NOK" },
      { country: "Sweden", flag: "🇸🇪", name: "Edgar Wahlström", currency: "SEK" },
      { country: "United Kingdom", flag: "🇬🇧", name: "Alison Scott", currency: "GBP" },
      { country: "Denmark", flag: "🇩🇰", name: "Johannes Dam", currency: "DKK" },
      { country: "Finland", flag: "🇫🇮", name: "Mikael Varis", currency: "EUR" },
    ],
    "North America": [
      { country: "USA", flag: "🇺🇸", name: "Mathew Long", currency: "USD" },
      { country: "Canada", flag: "🇨🇦", name: "Abel Prinston", currency: "USD" },
    ],
  };
  return (
    <container fluid>
      <Row className='m-5 '>
        <Row>
        <Col className="d-flex justify-content-between align-items-center mb-3">
          <h4>Licenses</h4>
          <button className="btn btn-primary px-4">+ Icon</button>
        </Col>
        </Row>
        <Row>
        <Col xs="12" md="6" className="d-flex justify-content-between align-items-center  mb-md-0">
          <div className="search-box w-75 " style={{ position: 'relative' }}>
            <Input type="search" placeholder="Search..." className="w-75 rounded-4" />
            <i className="bx bx-search-alt-2 icon-style"></i>
          </div>

        </Col>
        </Row>
      </Row>
      <Row className='m-5'>
        <Col>

        {Object.keys(licenses).map((region) => (
          <div key={region} >
            <h5 className="mt-4">{region}</h5>
            {licenses[region].map((license, index) => (
              <div key={index} className="d-flex justify-content-between align-items-center border rounded p-3 mb-2 bg-white">
                <span>
                  {license.flag} {license.country}
                </span>
                <div className="d-flex align-items-center">
                  <span className="me-3">{license.name}</span>
                  <span>{license.currency}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
        </Col>
      </Row>
    </container >
  )
}

export default InternationalLogin