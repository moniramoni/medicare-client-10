import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import RecoveryVideo from '../RecoveryVideo/RecoveryVideo';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <RecoveryVideo></RecoveryVideo>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;