import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = (props) => {
    const {serviceId} = useParams();
    const [services, setServices] = useState([])
    console.log(services)

    useEffect( () => {
        fetch('./services.json')
        .then(res=> res.json())
        .then(data => setServices(data?.filter(item=> item.id === Number())))
      }, [])
    return (
        <div>
            <h2>Service Details {serviceId}</h2>
            <h1>{}</h1>
        </div>
    );
};

export default ServiceDetails;