import React from "react";
import logo from "../../assets/images/icons/turnkey logo.png";
import currency from '../../assets/images/icons/currency.png'
import {
  Input,
  Row,
  Col,
} from "reactstrap";
function License() {
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
      { country: "Canada", flag: "🇨🇦", name: "Abel Prinston", currency: "USD" },
    ],
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: "#41619A" }}>
        <div className="container-fluid ms-3">
          <img src={logo} alt="" style={{ height: "25px" }} />
          <div className="d-flex me-3">
            <img
              src="https://via.placeholder.com/40"
              alt="User Avatar"
              className="rounded-circle"
            />
          </div>
        </div>
      </nav>

      <div className="container-fluid" >
        <Row className="m-4">
          <Col xs="12" md="6">
            <h4 className="fw-bold">Licenses</h4>
          </Col>
          <Col xs="12" md="6" className="text-md-end mt-2 mt-md-0">
            <button className="btn btn-primary px-4" style={{ background: "#41619A" }}>
              + icon
            </button>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="6" className="d-flex justify-content-between align-items-center ms-5">
            <div className="search-box w-50 " style={{ position: 'relative', }}>
              <Input type="search" placeholder="Search..." className="w-75 rounded-4" />
              <i className="bx bx-search-alt-2 icon-style"></i>
            </div>
          </Col>
        </Row>

        <Row className="m-4">
          <Col>
            {Object.keys(licenses).map((region) => (
              <div key={region} className="mb-4">
                <h5 className="mt-4">{region}</h5>
                {licenses[region].map((license, index) => (
                  <div
                    key={index}
                    className="d-flex justify-content-between align-items-center border rounded p-3 mb-2 bg-white flex-wrap"
                  >
                    <div className="d-flex gap-2 align-items-center">
                      <div>{license.flag}</div>
                      <p className="mb-0">{license.country}</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                      <div>
                        <i className="bx bx-user me-2"></i>
                        <span className="me-5">{license.name}</span>
                      </div>
                      <div>
                        <img src={currency} alt="" className="me-2" />
                        <span className="">{license.currency}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </Col>
        </Row>
      </div>
    </>
  );
}

export default License;
