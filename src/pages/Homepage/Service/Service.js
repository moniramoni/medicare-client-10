import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const{serviceName, img, bigImg, id, description, visitFee, cost, }=props.service
    return (
        <div>
            <div className="courses">
                <div className="img">
                    <img src={img} alt="" />
                </div>
                <div className="enrolled">
                    <div className="lession">
                        <div><i className="fas fa-file-video"></i></div>
                        <div><p>{visitFee} Lesson</p></div>
                    </div>
                    <div className="student">
                        <div><i className="far fa-user"></i></div>
                        <div><p>{id} Students</p></div>
                    </div>
                </div>
                <h2>{serviceName}</h2>
                {/* <p className="rating"> <Rating initialRating={star} emptySymbol="far fa-star" fullSymbol="fas fa-star" readonly></Rating>({review})</p> */}
                <hr />
                <div className="info-price">
                    <div className="instructor-info">
                        {/* <img src={instructorImg} alt="" /> */}
                        {/* <h4>{instructorName}</h4> */}
                        <Link to={`/serviceDetails/${id}`}><Button variant="info">select Service</Button>{' '}</Link>
                    </div>
                    <a href="">
                        <div className="price">
                            <div className="cart"><i className="fas fa-cart-arrow-down"></i></div>
                            <div><h4>${cost}</h4></div>  
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Service;