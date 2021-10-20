import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import About from '../Homepage/About/About';
import './Contact.css'

const Contact = () => {
    const { handleNameChange, handlePasswordChange, handleSignUp, handleEmailChange} = useAuth()
    return (
        <div>
            <div className="single-service-bg p-5 ">
                <h1 className="fw-bold">Contact Us</h1>
            </div>
            <About></About>
            {/* --------Contact Us-------- */}
            <Container>
                <Row className="contact-container">
                    <Col xs={12} md={12} lg={12}>
                        <div className=" w-50 w-md-75 w-sm-100 w-lg-50 m-auto">
                            <form>
                                <Form.Group className="mb-3">
                                    <Form.Control onBlur={handleNameChange} type="name" placeholder="Name" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control onBlur={handleEmailChange} type="email" placeholder="Email" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
                                </Form.Group>
                                <div className="row mb-3 text-danger"></div>
                                <Button onSubmit={handleSignUp} className="signIn-btn mb-3 w-100 p-2 rounded bg-dark" as="input" type="submit" value="Submit" />{' '}
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;