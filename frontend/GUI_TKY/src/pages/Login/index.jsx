import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { loginUser } from '@/store/auth/login/action';
import PropTypes from 'prop-types';
//redux
import withRouter from '@/components/Common/withRouter';
import trunkeylogo from '../../assets/images/turnkey-logo.png';
import { createSelector } from 'reselect';
// Formik validation
import * as Yup from 'yup';
import { useFormik } from 'formik';

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
} from 'reactstrap';

const Login = (props) => {
  //meta title
  document.title = 'Login | Trunkey';
  const dispatch = useDispatch();
  // const [error, setError] = useState('');
  // State for toggling password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Formik setup for form validation and submission
  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Please Enter Your Username'),
      password: Yup.string().required('Please Enter Your Password'),
    }),
    onSubmit: (values) => {
      const payload = {
        email: values?.email,
        password: values?.password,
      };
      dispatch(loginUser(values, props.router.navigate));
    },
  });
  const LoginProperties = createSelector(
    (state) => state.Login,
    (login) => ({
      error: login.error,
    })
  );

  const { error } = useSelector(LoginProperties);
  // Handler to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Determine if the login button should be disabled
  const isLoginDisabled =
    !validation.values.email || !validation.values.password;

  return (
    <React.Fragment>
      <div
        className="container-fluid min-vh-100 align-items-center justify-content-center"
        style={{ backgroundColor: '#2d3b60' }}
      >
        <div className="text-center pt-md-5 p-4 text-white  align-items-center justify-content-center ">
          <img
            src={trunkeylogo} // Replace with the actual path to your logo
            alt="Logo"
            style={{ height: '40px', marginRight: '10px' }} // Adjust size and spacing as needed
          />
          <div className="mt-4">
            <p
              className="text-center fs-6 fw-medium text-white lh-base"
              style={{ fontFamily: 'Montserrat' }}
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
                  style={{ fontFamily: 'Montserrat' }}
                >
                  <div className="p-2 ">
                    <h3 className="mb-md-5">Login</h3>
                    <Form
                      className="form-horizontal"
                      onSubmit={(e) => {
                        e.preventDefault();
                        validation.handleSubmit();
                        return false;
                      }}
                    >
                      {error ? <Alert color="danger">{error}</Alert> : null}

                      <div className="mb-md-5">
                        <Label className="form-label">E-mail</Label>
                        <Input
                          name="email"
                          style={{
                            outline: 'none',
                            boxShadow: 'none',
                          }}
                          className="form-control"
                          placeholder="Text hare..."
                          type="email"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.email || ''}
                          invalid={
                            validation.touched.email && validation.errors.email
                              ? true
                              : false
                          }
                        />
                        {validation.touched.email && validation.errors.email ? (
                          <FormFeedback type="invalid">
                            {validation.errors.email}
                          </FormFeedback>
                        ) : null}
                      </div>

                      <div className="mb-4">
                        <Label className="form-label">Password</Label>
                        <div className="input-group">
                          <Input
                            name="password"
                            style={{
                              outline: 'none',
                              boxShadow: 'none',
                              borderRight: 'none',
                              borderColor:
                                validation.touched.password &&
                                validation.errors.password
                                  ? '#f46a6a'
                                  : '#ced4da',
                            }}
                            autoComplete="off"
                            value={validation.values.password || ''}
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Text hare..."
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
                              backgroundColor: 'white',
                              borderColor:
                                validation.touched.password &&
                                validation.errors.password
                                  ? '#f46a6a'
                                  : '#ced4da',
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
                            style={{ display: 'block' }}
                          >
                            {validation.errors.password}
                          </FormFeedback>
                        ) : null}
                      </div>

                      <div className="d-flex justify-content-end mb-md-5">
                        <Link to="/">Forgot password?</Link>
                      </div>
                      <Button
                        className="btn w-100 mt-md-5 mb-md-5 text-white"
                        color={isLoginDisabled ? 'secondary' : 'dark'}
                        type="submit"
                        disabled={isLoginDisabled}
                        style={{ backgroundColor: '#41619A' }}
                      >
                        Log In
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

export default withRouter(Login);

Login.propTypes = {
  history: PropTypes.object,
};
