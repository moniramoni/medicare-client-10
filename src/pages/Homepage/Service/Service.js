import React from 'react';
import { Button, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const{serviceName, img, bigImg, id, description,}=props.service
    return (        
        <div className="services col-lg-3 col-md-6 col-sm-12 col-12">
            <div>
                <div className="img">
                    <img src={img} alt="" />
                </div>

                {/* --card informations */}
                <div className="card-info px-3 pb-3">
                    <h2 className="px-1 fw-bold pt-4 pb-1 fs-5 text-start">{serviceName}</h2>
                    <p className="px-1 py-2 text-start">{description.slice(0, 80)}</p>
                    <hr />
                    <div className="card-btn">
                        <div className="btn">
                            <NavLink to={`/serviceDetails/${id}`} activeStyle={{fontWeight: "bold",  color:"red" }}><Button variant="">{serviceName}</Button>{' '}</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;