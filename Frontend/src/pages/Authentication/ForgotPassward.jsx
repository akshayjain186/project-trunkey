// import React from 'react'
// import { Link } from "react-router-dom";

// import trunkeylogo from '../../assets/images/turnkey logo.png'
// import {
//   Row,
//   Col,
//   CardBody,
//   Card,
//   Alert,
//   Container,
//   Form,
//   Input,
//   FormFeedback,
//   Label,
//   Button,
// } from "reactstrap";

// const ForgotPassward = () => {
  

//   return (
//     <>
//       <div className="container-fluid min-vh-100 align-items-center justify-content-center" style={{ backgroundColor: "#2d3b60" }}>
//         <div className="text-center pt-md-5 p-4 text-white  align-items-center justify-content-center ">
//           <img
//             src={trunkeylogo} // Replace with the actual path to your logo
//             alt="Logo"
//             style={{ height: '40px', marginRight: '10px' }} // Adjust size and spacing as needed
//           />
//           <div className="mt-4">
//             <p className="text-center fs-6 fw-medium text-white lh-base" style={{ fontFamily: 'Montserrat' }}>Manage everything you need for your next project in one place.</p>
//           </div>
//         </div>
//         <Container>
//           <Row className="justify-content-center">

//             <Col md={8} lg={4} xl={6}>
//               <Card className="overflow-hidden" >
//                 <CardBody className="p-5 mt-4" style={{ fontFamily: 'Montserrat' }}>
//                   <div className="p-2 ">
//                     <h4 className="mb-md-5">Forgot Password</h4>
//                     <div>

//                       <Form
//                         className="form-horizontal"
//                         onSubmit={(e) => {
//                           e.preventDefault();
//                           validation.handleSubmit();
//                           return false;
//                         }}
//                       >
//                         <div>
//                           <Label className="form-label">E-mail</Label>
//                           <Input
//                             name="email"
//                             style={{
//                               outline: "none",
//                               boxShadow: "none",
//                             }}
//                             className="form-control"
//                             placeholder="Text hare..."
//                             type="email"
//                           />
//                         </div>
//                         <div className="d-flex justify-content-end mb-md-5 mt-4">

//                           <Link to="/login" className="text-primary"> {/* Navigate to /login */}
//                             Login
//                           </Link>
//                         </div>
                      
//                         <Button
//                           className="btn w-100 mt-md-5 mb-md-5 text-white btn btn-primar"
//                           // color={isLoginDisabled ? "secondary" : "dark"}
//                           type="submit"
//                           // disabled={isLoginDisabled}
//                           style={{ backgroundColor: "#41619A" }}
//                         >
                       
//                           Reset Password
                     
//                         </Button>
          


//                       </Form>
//                     </div>
//                   </div>
//                 </CardBody>
//               </Card>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </>
//   )
// }

// export default ForgotPassward
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { Link } from "react-router-dom";
import trunkeylogo from '../../assets/images/turnkey logo.png';
import {
  Row,
  Col,
  CardBody,
  Card,
  Container,
  Form,
  Input,
  Label,
  Button,
  FormFeedback,
} from "reactstrap";

const ForgotPassward = () => {
  const [email, setEmail] = useState(''); // State to store email
  const [error, setError] = useState(''); // State to store error message
  const navigate = useNavigate(); // Initialize navigate hook

  // Function to validate email format
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      // If email is valid, navigate to reset password page
      navigate("/reset-password");
    } else {
      // If email is invalid, show error message
      setError("Please enter a valid email address.");
    }
  };

  return (
    <>
      <div className="container-fluid min-vh-100 align-items-center justify-content-center" style={{ backgroundColor: "#2d3b60" }}>
        <div className="text-center pt-md-5 p-4 text-white align-items-center justify-content-center">
          <img
            src={trunkeylogo} // Replace with the actual path to your logo
            alt="Logo"
            style={{ height: '40px', marginRight: '10px' }} // Adjust size and spacing as needed
          />
          <div className="mt-4">
            <p className="text-center fs-6 fw-medium text-white lh-base" style={{ fontFamily: 'Montserrat' }}>
              Manage everything you need for your next project in one place.
            </p>
          </div>
        </div>
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={4} xl={6}>
              <Card className="overflow-hidden">
                <CardBody className="p-5 mt-4" style={{ fontFamily: 'Montserrat' }}>
                  <div className="p-2 ">
                    <h4 className="mb-md-5">Forgot Password</h4>
                    <div>
                      <Form
                        className="form-horizontal"
                        onSubmit={handleSubmit} // Call handleSubmit on form submit
                      >
                        <div>
                          <Label className="form-label">E-mail</Label>
                          <Input
                            name="email"
                            style={{
                              outline: "none",
                              boxShadow: "none",
                            }}
                            className="form-control"
                            placeholder="Enter your email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // Update email state on input change
                            invalid={!!error} // Set invalid if there's an error
                          />
                          {error && <FormFeedback>{error}</FormFeedback>} {/* Show error message */}
                        </div>
                        <div className="d-flex justify-content-end mb-md-5 mt-4">
                          <p>Back To:</p>
                          <Link to="/login" className=" ms-2 text-primary">
                            Login
                          </Link>
                        </div>
                        <Button
                          className="btn w-100 mt-md-5 mb-md-5 text-white btn btn-primar"
                          type="submit"
                          style={{ backgroundColor: "#41619A" }}
                        >
                          Reset Password
                        </Button>
                      </Form>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ForgotPassward;

