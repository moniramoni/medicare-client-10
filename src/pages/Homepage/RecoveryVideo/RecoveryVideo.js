import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './RecoveryVideo.css';

const RecoveryVideo = () => {
    return (
        <div className="recovery-video-section w-100">
            <div className="recovery-video-container">
                <h2 className="recovery-title fw-light ">Watch the Stories <br /> Of Recovery</h2>
                <div className="recovery-story">
                    <div className=""><a target="blank"  href="https://youtu.be/rAj38E7vrS8"><i className="fas fa-play mt-5"></i></a></div>
                    <div>
                        <h2 className="story-title pt-5 fw-light fs-3 text-start ps-3">COVID recovery story</h2>
                        <p className="story-para text-light text-start ps-3 fs-md-6 fs-6"> For many who overcome Covid, leaving the hospital is <br /> only the beginning of getting back to health</p>
                    </div>                   
                </div>
                <Row className="container d-md-inline-flex d-sm-none d-none d-lg-flex w-100">
                    <Col xs={2} md={4} lg={4} className="mt-5 ">
                        <iframe className="border-video" width="w-100 w-md-50" height="h-100" src="https://www.youtube.com/embed/g_O2AS7P_jg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  
                    </Col> 
                    <Col xs={2} md={4} lg={4} className="mt-5 gap-md-2 d-md-none d-lg-block">
                    <iframe className="border-video" width="w-100" height="h-100" src="https://www.youtube.com/embed/ccl1dQZKqto" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Col>                               
                    <Col xs={2} md={4} lg={4} className="mt-5 d-md-none d-lg-block gap-md-2">
                        <iframe className="border-video" width="w-100 w-md-50" height="h-100" src="https://www.youtube.com/embed/2vOLAVHLSDQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Col>                               
                </Row>
            </div>
        </div>
    );
};

export default RecoveryVideo;