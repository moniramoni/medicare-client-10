import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Footer></Footer>
        </div>
    );
};

export default Home;