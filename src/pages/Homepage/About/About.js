import React from 'react';
import './About.css'
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <div className="py-5 container">
                <div className="about p-0 p-md-5 p-lg-5 p-sm-0">
                    <Container className="w-100">
                        <Row className="w-100" >
                            {/* -------------column first part------- */}
                            <Col xs={12} md={12} lg={6}>
                                <div>
                                    <div className="about-tag ">
                                        <h6 className="">About Our Hospital</h6>
                                    </div>
                                    <h3 className="fs-2 fw-bold text-start py-4 ">Whatever Your Healthcare Needs We Are Here to Help</h3>
                                    <p className="fw-light text-start d-md-none d-lg-block">Medicare is missioned to connect people to proper healthcare timely and easily. To reduce treatment delays, Medicare build health awareness among the people through various ways.</p>
                                    <div>
                                        {/* -------- service row 1 (icon & service ) */}
                                        <Row className="p-2 w-100">
                                            <Col xs={12} md={6} lg={6} className="p-2 p-md-0 p-lg-0 p-sm-2">
                                                <div className="recovery-story">
                                                    <div className="">
                                                    <i className="fas fa-check"></i></div>
                                                    <div>
                                                        <h6 className="fw-light text-start ps-3 fs-6">Heart Surgery</h6>
                                                    </div> 
                                                </div>
                                            </Col>
                                            <Col xs={12} md={6} lg={6} className="p-2 p-md-0 p-lg-0 p-sm-2">
                                                <div className="recovery-story">
                                                    <div className="">
                                                    <i className="fas fa-check"></i></div>
                                                    <div>
                                                        <h6 className="fw-light text-start ps-3 fs-6">Eye Surgery</h6>
                                                    </div> 
                                                </div>
                                            </Col>
                                        </Row>
                                        {/* -------- service row 2 (icon & service ) */}
                                        <Row className="p-2 w-100">
                                            <Col xs={12} md={6} lg={6} className="p-2 p-md-0 p-lg-0 p-sm-2">
                                                <div className="recovery-story">
                                                    <div className="">
                                                    <i className="fas fa-check"></i></div>
                                                    <div>
                                                        <h6 className="fw-light text-start ps-3 fs-6">Cancer Surgery</h6>
                                                    </div> 
                                                </div>
                                            </Col>
                                            <Col xs={12} md={6} lg={6} className="p-2 p-md-0 p-lg-0 p-sm-2">
                                                <div className="recovery-story">
                                                    <div className="">
                                                    <i className="fas fa-check"></i></div>
                                                    <div>
                                                        <h6 className="fw-light text-start ps-3 fs-6">Chiropractor</h6>
                                                    </div> 
                                                </div>
                                            </Col>
                                        </Row>
                                        {/* -------- service row 3 (icon & service ) */}
                                        <Row className="p-2 w-100 d-none d-md-flex d-lg-flex d-sm-none">
                                            <Col xs={6} md={6} lg={6} className="p-2 p-md-0 p-lg-0 p-sm-2">
                                                <div className="recovery-story">
                                                    <div className="">
                                                    <i className="fas fa-check"></i></div>
                                                    <div>
                                                        <h6 className="fw-light text-start ps-3 fs-6">Cardiologist</h6>
                                                    </div> 
                                                </div>
                                            </Col>
                                            <Col xs={6} md={6} lg={6} className="p-2 p-md-0 p-lg-0 p-sm-2">
                                                <div className="recovery-story">
                                                    <div className="">
                                                    <i className="fas fa-check"></i></div>
                                                    <div>
                                                        <h6 className="fw-light text-start ps-3 fs-6">Dentist</h6>
                                                    </div> 
                                                </div>
                                            </Col>
                                        </Row>
                                        {/* -------- service row (year experience & members ) */}
                                        <Row className="w-100 d-none d-md-flex d-lg-flex d-sm-none">
                                            <Col xs={6} md={6} lg={6} className="p-2 p-md-0 p-lg-0 p-sm-2">
                                            <div className="recovery-story">
                                                <div className=""><a target="blank"  href="https://youtu.be/rAj38E7vrS8"><i className="fas fa-stethoscope mt-5"></i></a></div>
                                                <div>
                                                    <h2 className="story-title pt-5 fw-light fs-3 text-start ps-3">25 Years</h2>
                                                    <p className="story-para text-dark text-start ps-3"> Experience</p>
                                                </div> 
                                                </div>
                                            </Col>
                                            <Col xs={6} md={6} lg={6}>
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
                               </div>
                            </Col>
                            {/* -------------column second part------- */}
                            <Col xs={12} md={12} lg={6} className="about-img mt-md-5 pt-md-5 mt-lg-0 pt-lg-0 mt-sm-5 pt-sm-5 mt-5 pt-5">
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