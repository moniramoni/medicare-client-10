import React, { useEffect, useState } from 'react';
import './Services.css'
import Service from '../Service/Service';
import { Col, Row } from 'react-bootstrap';

const Services = () => {

    const [services, setServices] = useState([])
    console.log(services)

    useEffect( () => {
        fetch('./services.JSON')
        .then(res=> res.json())
        .then(data => setServices(data))
      }, [])

    return (
        <div>
            <div>
            <h5>Browse All Services</h5>
            </div>
            <div className="services-container">
                {
                    services.map(service => <Service 
                        
                        key={service.id}
                        service={service}

                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;