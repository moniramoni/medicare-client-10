import React from 'react';
import { Button } from 'react-bootstrap';
import './Notfound.css';

const Notfound = () => {
    return (
        <div className="notfound-section container px-5 pb-5">
            <div className="notfound-container container p-5 pt-0">
                <div>
                    <img className="w-100" src="https://i.ibb.co/sgZrFh1/74-ai.png" alt="" />
                    <Button className="notfound-btn" variant="info">Go Back Home </Button>{' '}
                </div>
            </div>
        </div>
    );
};

export default Notfound;