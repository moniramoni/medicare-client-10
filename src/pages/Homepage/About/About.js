import React from 'react';
import './About.css'
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <div className="about-container">
                <div className="about p-5">
                    <Container className="">
                        <Row className="w-100" >
                            <Col xs={12} md={12} lg={6}>
                                <div className="about-tag">
                                    <h6 className="">About Our Hospital</h6>
                                </div>
                                <h3 className="fs-2 fw-bold text-start py-4 ">Whatever Your Healthcare Needs We Are Here to Help</h3>
                                <p className="fw-light text-start d-md-none d-lg-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua <br /> <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <div>
                                    <Row className="p-2 w-100">
                                        <Col xs={2} md={6} lg={6}>
                                            <div className="recovery-story">
                                                <div className="">
                                                <i className="fas fa-check"></i></div>
                                                <div>
                                                    <h6 className="fw-light text-start ps-3 fs-6">Heart Surgery</h6>
                                                </div> 
                                            </div>
                                        </Col>
                                        <Col xs={2} md={6} lg={6}>
                                            <div className="recovery-story">
                                                <div className="">
                                                <i className="fas fa-check"></i></div>
                                                <div>
                                                    <h6 className="fw-light text-start ps-3 fs-6">Eye Surgery</h6>
                                                </div> 
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className="p-2 w-100">
                                        <Col xs={2} md={6} lg={6}>
                                            <div className="recovery-story">
                                                <div className="">
                                                <i className="fas fa-check"></i></div>
                                                <div>
                                                    <h6 className="fw-light text-start ps-3 fs-6">Cancer Surgery</h6>
                                                </div> 
                                            </div>
                                        </Col>
                                        <Col xs={2} md={6} lg={6}>
                                            <div className="recovery-story">
                                                <div className="">
                                                <i className="fas fa-check"></i></div>
                                                <div>
                                                    <h6 className="fw-light text-start ps-3 fs-6">Chiropractor</h6>
                                                </div> 
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className="p-2 w-100">
                                        <Col xs={2} md={6} lg={6}>
                                            <div className="recovery-story">
                                                <div className="">
                                                <i className="fas fa-check"></i></div>
                                                <div>
                                                    <h6 className="fw-light text-start ps-3 fs-6">Cardiologist</h6>
                                                </div> 
                                            </div>
                                        </Col>
                                        <Col xs={2} md={6} lg={6}>
                                            <div className="recovery-story">
                                                <div className="">
                                                <i className="fas fa-check"></i></div>
                                                <div>
                                                    <h6 className="fw-light text-start ps-3 fs-6">Dentist</h6>
                                                </div> 
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className="w=100">
                                        <Col xs={2} md={6} lg={6}>
                                        <div className="recovery-story">
                                            <div className=""><a target="blank"  href="https://youtu.be/rAj38E7vrS8"><i className="fas fa-stethoscope mt-5"></i></a></div>
                                            <div>
                                                <h2 className="story-title pt-5 fw-light fs-3 text-start ps-3">25 Years</h2>
                                                <p className="story-para text-dark text-start ps-3"> Experience</p>
                                            </div> 
                                            </div>
                                        </Col>
                                        <Col xs={2} md={6} lg={6}>
                                        <div className="recovery-story">
                                            <div className=""><a target="blank"  href="https://youtu.be/rAj38E7vrS8"><i className="fas fa-user-md mt-5"></i></a></div>
                                            <div>
                                                <h2 className="story-title pt-5 fw-light fs-3 text-start ps-3">8585+</h2>
                                                <p className="story-para text-dark text-start ps-3"> Services</p>
                                            </div> 
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col xs={12} md={12} lg={6} className="about-img mt-md-5 pt-md-5">
                                <div className="about-image py-5 h-120">
                                    <img className="w-100" src="https://i.ibb.co/phrrS9G/ezgif-6-75c8e63a3dd7.jpg" alt="" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default About;