import React from "react";
import { useNavigate } from "react-router-dom";
// Images
import logo from "../../../assets/images/turnkey logo.png";
import currency from "../../../assets/images/currency.png";
import userprofile from "../../../assets/images/userprofile.png"
// Reactstrap Components
import { Input, Row, Col, Button } from "reactstrap";

function LicensesPage() {
    // useNavigate is a React Router hook used to programmatically navigate to different routes
  const navigate = useNavigate();

  // Handler for adding a new license
  const handleAddLicense = () => {
    navigate("/addnew");
  };
  // License data 
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
    <>
      {/* Header */}
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: "#41619A" }}>
                <div className="container-fluid ms-3">
                    <img
                        src={logo}
                        alt="Company Logo"
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

      {/* Main Content */}
      <div className="container-fluid">
        <Row className="m-4">
          <Col xs="12" md="6">
            <h4 className="fw-bold">Licenses</h4>
          </Col>
          <Col xs="12" md="6" className="text-md-end mt-2 mt-md-0">
            {/* Add License Button */}
            <Button className="b-color px-4"onClick={handleAddLicense}>
              + icon
            </Button>
          </Col>
        </Row>

        {/* Search Box */}
        <Row className="m-2">
          <Col xs="12" md="6" className="d-flex justify-content-between align-items-center ms-3">
            <div className="search-box w-50 position-relative">
              <Input type="search" placeholder="Search..." className="w-75 rounded-3" />
              <i className="bx bx-search-alt-2 icon-style"></i>
            </div>
          </Col>
        </Row>

        {/* License List Section */}
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
                    {/* Country and Flag */}
                    <div className="d-flex gap-2 align-items-center">
                      <div className="rounded-circle">{license.flag}</div>
                      <p className="mb-0">{license.country}</p>
                    </div>
                    {/* License Info */}
                    <div
                      className="d-flex align-items-center justify-content-between flex-wrap"
                      style={{ width: "20%" }}
                    >
                      <div>
                      <img src={userprofile} alt="Currency Icon" className="me-2" />
                        <span>{license.name}</span>
                      </div>
                      <div>
                        <img src={currency} alt="Currency Icon" className="me-2" />
                        <span>{license.currency}</span>
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
  )
}

export default LicensesPage