import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import withRouter from "../../components/Common/withRouter";

//redux
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { useNavigate } from "react-router-dom";

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";
import { SignupUser } from "../../store/actions";

import trunkeylogo from "../../assets/images/turnkey logo.png";
import {
  Row,
  Col,
  CardBody,
  Card,
  Alert,
  Container,
  Form,
  Input,
  FormFeedback,
  Label,
  Button,
} from "reactstrap";

const ResetPassward = (props) => {
  // document.title = "Signup | Trunkey";
  //   const dispatch = useDispatch();
  //   const navigate = useNavigate();

  // State for toggling password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Formik setup for form validation and submission
  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      password: "",
      changepassword: "",
      confirmpassword: "",
    },
    validationSchema: Yup.object({
      changepassword: Yup.string().required("Please enter your password"),
      password: Yup.string().required("Please enter your password"),
      confirmpassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Please confirm your password"),
    }),
    onSubmit: (values) => {
      // dispatch(SignupUser(values, props.router.navigate));
      console.log(values);
    },
  });

  const ResetPasswardProperties = createSelector(
    (state) => state.Signup || {},
    (ResetPassward) => ({
      error: ResetPassward.error,
    })
  );

  const { error } = useSelector(ResetPasswardProperties);

  // Handler to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Determine if the login button should be disabled
  const isSignupDisabled =
    !validation.values.changepassword ||
    !validation.values.password ||
    !validation.values.confirmpassword;
    
  return (
    <React.Fragment>
      <div
        className="container-fluid min-vh-100 align-items-center justify-content-center"
        style={{ backgroundColor: "#2d3b60" }}
      >
        <div className="text-center pt-md-5 p-4 text-white  align-items-center justify-content-center ">
          <img
            src={trunkeylogo} // Replace with the actual path to your logo
            alt="Logo"
            style={{ height: "40px", marginRight: "10px" }} // Adjust size and spacing as needed
          />
          <div className="mt-4">
            <p
              className="text-center fs-6 fw-medium text-white lh-base"
              style={{ fontFamily: "Montserrat" }}
            >
              Manage everything you need for your next project in one place.
            </p>
          </div>
        </div>
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={4} xl={6}>
              <Card className="overflow-hidden">
                <CardBody
                  className="p-5 mt-4"
                  style={{ fontFamily: "Montserrat" }}
                >
                  <div className="p-2 ">
                    <h4 className="mb-md-5">Reset Password</h4>
                    <Form
                      className="form-horizontal"
                      onSubmit={(e) => {
                        e.preventDefault();
                        validation.handleSubmit();
                        return false;
                      }}
                    >
                      {error ? <Alert color="danger">{error}</Alert> : null}
                      <div className="mb-4">
                        <Label className="form-label">Password</Label>
                        <div className="input-group">
                          <Input
                            name="password"
                            style={{
                              outline: "none",
                              boxShadow: "none",
                              borderRight: "none",
                              borderColor:
                                validation.touched.password &&
                                validation.errors.password
                                  ? "#f46a6a"
                                  : "#ced4da",
                            }}
                            autoComplete="off"
                            value={validation.values.password || ""}
                            type={showPassword ? "text" : "password"}
                            placeholder="Change password"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.password &&
                              validation.errors.password
                                ? true
                                : false
                            }
                          />
                          <span
                            className="input-group-text"
                            style={{
                              backgroundColor: "white",
                              borderColor:
                                validation.touched.password &&
                                validation.errors.password
                                  ? "#f46a6a"
                                  : "#ced4da",
                            }}
                          >
                            <div
                              type="button"
                              onClick={togglePasswordVisibility}
                            >
                              {showPassword ? (
                                <i className="mdi mdi-eye-off" />
                              ) : (
                                <i className="mdi mdi-eye" />
                              )}
                            </div>
                          </span>
                        </div>
                        {validation.touched.password &&
                        validation.errors.password ? (
                          <FormFeedback
                            type="invalid"
                            style={{ display: "block" }}
                          >
                            {validation.errors.password}
                          </FormFeedback>
                        ) : null}
                      </div>
                      <div className="mb-4">
                        <Label className="form-label">Confirm Password</Label>
                        <div className="input-group">
                          <Input
                            name="confirmpassword"
                            style={{
                              outline: "none",
                              boxShadow: "none",
                              borderRight: "none",
                              borderColor:
                                validation.touched.password &&
                                validation.errors.password
                                  ? "#f46a6a"
                                  : "#ced4da",
                            }}
                            type={showPassword ? "text" : "password"}
                            placeholder="Confirm your password"
                            value={validation.values.confirmpassword || ""}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.confirmpassword &&
                              validation.errors.confirmpassword
                                ? true
                                : false
                            }
                          />
                          <span
                            className="input-group-text"
                            style={{
                              backgroundColor: "white",
                              borderColor:
                                validation.touched.password &&
                                validation.errors.password
                                  ? "#f46a6a"
                                  : "#ced4da",
                            }}
                          >
                            <div
                              type="button"
                              onClick={togglePasswordVisibility}
                            >
                              {showPassword ? (
                                <i className="mdi mdi-eye-off" />
                              ) : (
                                <i className="mdi mdi-eye" />
                              )}
                            </div>
                          </span>
                        </div>
                        {validation.touched.confirmpassword &&
                          validation.errors.confirmpassword && (
                            <FormFeedback
                              type="invalid"
                              style={{ display: "block" }}
                            >
                              {validation.errors.confirmpassword}
                            </FormFeedback>
                          )}
                      </div>
                      <Button
                        className="btn w-100 mt-md-5 mb-md-5 text-white"
                        color={isSignupDisabled ? "secondary" : "dark"}
                        type="submit"
                        // disabled={isSignupDisabled}
                        style={{ backgroundColor: "#41619A" }}
                      >
                        Reset
                      </Button>
                    </Form>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};
export default ResetPassward;
