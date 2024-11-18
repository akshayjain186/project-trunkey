
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

// actions


// import images
import trunkeylogo from '../../assets/images/turnkey logo.png'


const Signup = (props) => {
    //meta title
    document.title = "Signup | Trunkey";
    const dispatch = useDispatch();
    const navigate = useNavigate();

    
    // State for toggling password visibility
    const [showPassword, setShowPassword] = useState(false);

    // Formik setup for form validation and submission
    const validation = useFormik({
        enableReinitialize: true,
        initialValues: {
            firstname: "",
            lastname: "",
            address: "",
            phone: "",
            postalcode: "",
            email: "",
            password: "",
            confirmpassword:"",
        },
        validationSchema: Yup.object({
            firstname: Yup.string().required("Please enter your first name"),
            lastname: Yup.string().required("Please enter your last name"),
            address: Yup.string().required("Please enter your address"),
            phone: Yup.string().required("Please enter your phone number"),
            postalcode: Yup.string().required("Please enter your postal code"),
            email: Yup.string().email("Invalid email format").required("Please enter your email"),
            password: Yup.string().required("Please enter your password"),
            confirmpassword: Yup.string()
                .oneOf([Yup.ref("password"), null], "Passwords must match")
                .required("Please confirm your password"),
        }),
        onSubmit: (values) => {
            dispatch(SignupUser(values, props.router.navigate));
            console.log(values)
        },

    });

    const SignupProperties = createSelector(
        (state) => state.Signup || {},
        (Signup) => ({
            error: Signup.error,
        })
    );

  const { error } = useSelector(SignupProperties);

    // Handler to toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // Determine if the login button should be disabled
    const isSignupDisabled =
        !validation.values.firstname ||
        !validation.values.lastname ||
        !validation.values.address ||
        !validation.values.phone ||
        !validation.values.postalcode ||
        !validation.values.email ||
        !validation.values.password;
        !validation.values.confirmpassword;


    return (
        <React.Fragment>

            <div className="container-fluid min-vh-100 align-items-center justify-content-center" style={{ backgroundColor: "#2d3b60" }}>
                <div className="text-center pt-md-5 p-4 text-white  align-items-center justify-content-center ">
                    <img
                        src={trunkeylogo} // Replace with the actual path to your logo
                        alt="Logo"
                        style={{ height: '40px', marginRight: '10px' }} // Adjust size and spacing as needed
                    />
                    <div className="mt-4">
                        <p className="text-center fs-6 fw-medium text-white lh-base" style={{ fontFamily: 'Montserrat' }}>Manage everything you need for your next project in one place.</p>
                    </div>
                </div>

                <Container>
                    <Row className="justify-content-center">

                        <Col md={8} lg={4} xl={6}>
                            <Card className="overflow-hidden" >
                                <CardBody className="p-5 mt-4" style={{ fontFamily: 'Montserrat' }}>
                                    <div className="p-2 ">
                                        <h3 className="mb-md-5">Singup</h3>
                                        <Form
                                            className="form-horizontal"
                                            onSubmit={(e) => {
                                                e.preventDefault();
                                                validation.handleSubmit();
                                                return false;
                                            }}
                                        >
                                            {error ? <Alert color="danger">{error}</Alert> : null}




                                            <div className="mb-md-4">
                                                <Label className="form-label">First Name</Label>
                                                <Input
                                                    name="firstname"
                                                    className="form-control"
                                                    placeholder="Enter your first name"
                                                    type="text"
                                                    onChange={validation.handleChange}
                                                    onBlur={validation.handleBlur}
                                                    value={validation.values.firstname || ""}
                                                    invalid={validation.touched.firstname && validation.errors.firstname ? true : false}
                                                />
                                                {validation.touched.firstname && validation.errors.firstname ? (
                                                    <FormFeedback type="invalid">{validation.errors.firstname}</FormFeedback>
                                                ) : null}
                                            </div>

                                            <div className="mb-md-4">
                                                <Label className="form-label">Last Name</Label>
                                                <Input
                                                    name="lastname"
                                                    className="form-control"
                                                    placeholder="Enter your last name"
                                                    type="text"
                                                    onChange={validation.handleChange}
                                                    onBlur={validation.handleBlur}
                                                    value={validation.values.lastname || ""}
                                                    invalid={validation.touched.lastname && validation.errors.lastname ? true : false}
                                                />
                                                {validation.touched.lastname && validation.errors.lastname ? (
                                                    <FormFeedback type="invalid">{validation.errors.lastname}</FormFeedback>
                                                ) : null}
                                            </div>

                                            <div className="mb-md-4">
                                                <Label className="form-label">Address</Label>
                                                <Input
                                                    name="address"
                                                    className="form-control"
                                                    placeholder="Enter your address"
                                                    type="text"
                                                    onChange={validation.handleChange}
                                                    onBlur={validation.handleBlur}
                                                    value={validation.values.address || ""}
                                                    invalid={validation.touched.address && validation.errors.address ? true : false}
                                                />
                                                {validation.touched.address && validation.errors.address ? (
                                                    <FormFeedback type="invalid">{validation.errors.address}</FormFeedback>
                                                ) : null}
                                            </div>

                                            <div className="mb-md-4">
                                                <Label className="form-label">Phone Number</Label>
                                                <Input
                                                    name="phone"
                                                    className="form-control"
                                                    placeholder="Enter your phone number"
                                                    type="text"
                                                    onChange={validation.handleChange}
                                                    onBlur={validation.handleBlur}
                                                    value={validation.values.phone || ""}
                                                    invalid={validation.touched.phone && validation.errors.phone ? true : false}
                                                />
                                                {validation.touched.phone && validation.errors.phone ? (
                                                    <FormFeedback type="invalid">{validation.errors.phone}</FormFeedback>
                                                ) : null}
                                            </div>

                                            <div className="mb-md-4">
                                                <Label className="form-label">Postal Code</Label>
                                                <Input
                                                    name="postalcode"
                                                    className="form-control"
                                                    placeholder="Enter your postal code"
                                                    type="text"
                                                    onChange={validation.handleChange}
                                                    onBlur={validation.handleBlur}
                                                    value={validation.values.postalcode || ""}
                                                    invalid={validation.touched.postalcode && validation.errors.postalcode ? true : false}
                                                />
                                                {validation.touched.postalcode && validation.errors.postalcode ? (
                                                    <FormFeedback type="invalid">{validation.errors.postalcode}</FormFeedback>
                                                ) : null}
                                            </div>

                                            <div className="mb-md-4">
                                                <Label className="form-label">E-mail</Label>
                                                <Input
                                                    name="email"
                                                    className="form-control"
                                                    placeholder="Enter your email"
                                                    type="email"
                                                    onChange={validation.handleChange}
                                                    onBlur={validation.handleBlur}
                                                    value={validation.values.email || ""}
                                                    invalid={validation.touched.email && validation.errors.email ? true : false}
                                                />
                                                {validation.touched.email && validation.errors.email ? (
                                                    <FormFeedback type="invalid">{validation.errors.email}</FormFeedback>
                                                ) : null}
                                            </div>

                                            <div className="mb-4">
                                                <Label className="form-label">Password</Label>
                                                <div className="input-group">
                                                    <Input
                                                        name="password"
                                                        style={{
                                                            outline: "none",
                                                            boxShadow: "none",
                                                            borderRight: "none",
                                                            borderColor: validation.touched.password && validation.errors.password ? "#f46a6a" : "#ced4da"
                                                        }}
                                                        autoComplete="off"
                                                        value={validation.values.password || ""}
                                                        type={showPassword ? "text" : "password"}
                                                        placeholder="Text hare..."
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        invalid={
                                                            validation.touched.password && validation.errors.password ? true : false
                                                        }
                                                    />
                                                    <span className="input-group-text" style={{ backgroundColor: "white", borderColor: validation.touched.password && validation.errors.password ? "#f46a6a" : "#ced4da", }}>
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
                                                    <FormFeedback type="invalid" style={{ display: "block", }}>
                                                        {validation.errors.password}
                                                    </FormFeedback>
                                                ) : null}
                                            </div>

                                            <div className="mb-4">
                                            <Label className="form-label">Confirm Password</Label>
                                            <div className="input-group">
                                                <Input
                                                    name="confirmpassword"
                                                    type={showPassword ? "text" : "password"}
                                                    placeholder="Confirm your password"
                                                    value={validation.values.confirmpassword || ""}
                                                    onChange={validation.handleChange}
                                                    onBlur={validation.handleBlur}
                                                    invalid={validation.touched.confirmpassword && validation.errors.confirmpassword ? true : false}
                                                />
                                                <span className="input-group-text" onClick={togglePasswordVisibility}>
                                                    {showPassword ? <i className="mdi mdi-eye-off" /> : <i className="mdi mdi-eye" />}
                                                </span>
                                            </div>
                                            {validation.touched.confirmpassword && validation.errors.confirmpassword && (
                                                <FormFeedback>{validation.errors.confirmpassword}</FormFeedback>
                                            )}
                                        </div>


                                            <div className="d-flex justify-content-end mb-md-5">
                                                <a href="#" className="text-primary">
                                                    Forgot password?
                                                </a>
                                            </div>
                                            <Button
                                                className="btn w-100 mt-md-5 mb-md-5 text-white"
                                                color={isSignupDisabled ? "secondary" : "dark"}
                                                type="submit"
                                                disabled={isSignupDisabled}
                                                style={{ backgroundColor: "#41619A" }}
                                            >
                                                Sing Up
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

export default withRouter(Signup);

Signup.propTypes = {
    history: PropTypes.object,
};
