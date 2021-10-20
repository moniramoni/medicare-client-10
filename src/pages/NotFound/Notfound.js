import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Notfound.css';

const Notfound = () => {
    return (
        <div className="notfound-section container px-5 pb-5">
            <div className="notfound-container container p-5 pt-0">
                <div>
                    <img className="w-100" src="https://i.ibb.co/sgZrFh1/74-ai.png" alt="" />
                    <Link to="/home"><Button className="notfound-btn" variant="info">Go Back Home </Button>{' '}</Link>
                </div>
            </div>
        </div>
    );
};

export default Notfound;