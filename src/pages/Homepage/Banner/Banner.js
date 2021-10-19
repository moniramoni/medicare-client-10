import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} variant="dark" className="w-100">
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://i.ibb.co/yhHrYRH/Young-female-surgeon-with-medical-team-in-back-before-surgery.jpg"
                alt="First slide"
                />
                <Carousel.Caption className="p-5 d-sm-none d-none d-md-block d-lg-block">
                <div className="bg-banner p-3 fw-bold">
                    <h3 className="color">Caring for You and Your Family</h3>
                    <p>A Good and healthy body is the reason behind a healthy mind.</p>
                </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 bg-banner"
                src="https://i.ibb.co/qy5TkkX/We-know-that-our-work-can-help-many-people.jpg"
                alt="Second slide"
                />
                <Carousel.Caption className="p-5 d-sm-none d-none d-md-block d-lg-block">
                <div className="bg-banner p-3 fw-bold">
                    <h3 className="color">Healthy heart, healthy family</h3>
                    <p>Care and dedication is the driving force behind our work.</p>
                </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;