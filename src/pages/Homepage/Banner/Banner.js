import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} variant="dark" fluid>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://i.ibb.co/93HQSZz/Young-female-surgeon-with-medical-team-in-back-before-surgery.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3 className="color">First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://i.ibb.co/93HQSZz/Young-female-surgeon-with-medical-team-in-back-before-surgery.jpg"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3 className="color">Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://i.ibb.co/93HQSZz/Young-female-surgeon-with-medical-team-in-back-before-surgery.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3 className="color">Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;