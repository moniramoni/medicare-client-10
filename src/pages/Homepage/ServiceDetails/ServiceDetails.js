import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './ServiceDetails.css';

const ServiceDetails = () => {
    let {serviceId} = useParams();
    const [serviceDetails, setServiceDetails] = useState([])
    const [singleService, setSingleService] = useState([])
    console.log(singleService)


    useEffect( () => {
        fetch('/serviceDetails.json')
        .then(res=> res.json())
        .then(data => setServiceDetails(data.serviceDetails))
      }, [])

      useEffect(()=>{
        const foundService = serviceDetails.find(service=> service.id === serviceId)
        setSingleService(foundService)
      },[serviceDetails]) 

    return (
        <div>
            <div className="single-service-bg p-5 ">
                <h1 className="fw-bold">{singleService?.serviceName}</h1>
                <p>{singleService?.para}</p>
            </div>
            <Container>
            <Row className="py-5">
                {/* --------appoinmemt info part---------- */}
                <Col xs={12} md={12} lg={6}>
                    <div className="service-img my-5 mx-0">
                        <h1 className="fw-bold text-start pt-5 pb-2"> Make An <br /> Appointment </h1>
                        <p  className="text-start pt-2">{singleService?.description}</p>
                        <h6 className="fw-bold text-start py-2">Available Appointments on <span className="availableDate fw-bold fs-5 text-start pt-5 pb-2">{singleService?.availableDate}</span> </h6>

                        {/* ----Service Cost & Visit Fee---- */}
                            <h2 className="fw-bold visit-fee text-light fs-5 w-50 text-center pt-2 pb-2 my-3">Cost = {singleService?.cost}$</h2>
                        {/* ----appointment time & btn---- */}
                        <Row className="pt-3">
                            <Col xs={6} md={8}>
                                <div className="recovery-story">
                                    <div className="">
                                        <i className="fas fa-history"></i></div>
                                    <div>
                                        <h4 className="fw-bold text-start ps-3 fs-6">{singleService?.availableTimeOne}</h4>
                                    </div> 
                                </div>
                                <p className="fw-light ps-5 text-start ss-5 d-sm-none d-md-block d-lg-block d-none "><small className="text-start">{singleService?.availableTextOne} </small></p>

                            </Col>
                            {/* -----appointment btn----- */}
                            <Col xs={6} md={4}>
                                <Link to="/signIn"><Button className="signIn-btn mb-3 w-100 p-2 rounded bg-dark text-light fs-6" as="input" type="submit" value="Appointment" />{' '}</Link>
                            </Col>
                        </Row>

                        <Row className="pt-3">
                            <Col xs={6} md={8}>
                                <div className="recovery-story">
                                    <div className="">
                                        <i className="fas fa-history"></i></div>
                                    <div>
                                        <h4 className="fw-bold text-start ps-3 fs-6">{singleService?.availableTimeTwo}</h4>
                                    </div> 
                                </div>
                                <p className="fw-light ps-5 text-start ss-5 d-sm-none d-md-block d-lg-block d-none"><small className="text-start">{singleService?.availableTextTwo} </small></p>

                            </Col>
                            {/* -----appointment btn----- */}
                            <Col xs={6} md={4}>
                                <Link to="/signIn"><Button className="signIn-btn mb-3 w-100 p-2 rounded bg-dark text-light fs-6" as="input" type="submit" value="Appointment" />{' '}</Link>
                            </Col>
                        </Row>
                        <Row className="py-3">
                            <Col xs={6} md={8}>
                                <div className="recovery-story">
                                    <div className="">
                                        <i className="fas fa-history"></i></div>
                                    <div>
                                        <h4 className="fw-bold text-start ps-3 fs-6">{singleService?.availableTimeThree}</h4>
                                    </div> 
                                </div>
                                <p className="fw-light ps-5 text-start ss-5 d-sm-none d-md-block d-lg-block d-none"><small className="text-start">{singleService?.availableTextThree} </small></p>

                            </Col>
                            {/* -----appointment btn----- */}
                            <Col xs={6} md={4}>
                                <Link to="/signIn"><Button className="signIn-btn mb-3 w-100 p-2 rounded bg-dark text-light fs-6" as="input" type="submit" value="Appointment" />{' '}</Link>
                            </Col>
                        </Row>
                    </div>
                </Col>
                {/* --------appoinmemt image part---------- */}
                <Col xs={12} md={12} lg={6}>
                    <div className="service-img container mt-md-5 mt-lg-5 mt-sm-1 mt-1 mb-5">
                        <img className="w-100" src={singleService?.bigImg} alt="" />
                    </div>
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default ServiceDetails;