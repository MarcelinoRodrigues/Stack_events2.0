import React from 'react';

import Nav from '../../components/Nav';
import Images from '../../components/Images';
import Footer from '../../components/footer';
import Article from '../../components/Article';
import Events from '../../components/Events';

const Home = () => (
    <div id="Inicio" className="Dom">
        <Nav />
        <div className="container">
            <Images />
            <Article/>
        </div>
        <Events/>
        <Footer/>
    </div>
);
export default Home;