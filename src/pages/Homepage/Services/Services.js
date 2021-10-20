import React, { useEffect, useState } from 'react';
import './Services.css'
import Service from '../Service/Service';
import { Row } from 'react-bootstrap';

const Services = () => {

    const [services, setServices] = useState([])
    console.log(services)

    useEffect( () => {
        fetch('./services.json')
        .then(res=> res.json())
        .then(data => setServices(data))
      }, [])

    return (
        <div>
            <div>
                <h1 className="fs-1 fw-bold">Browse All Services</h1>
            </div>
            {/* <div className="row m-0  gap-4 W-100 justify-content-center"> */}
                <Row className="services-container">
                        {
                            services.map(service => <Service 
                                
                                key={service.id}
                                service={service}

                            ></Service>)
                        }
                </Row>
            {/* </div> */}
        </div>
    );
};

export default Services;