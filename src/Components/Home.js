import React from 'react';

import Nav from './Nav';
import Images from './Images';
import Seach from './Seach';
import Footer from './footer';
import Article from './Article';
import Events from './Events';

const Home = () => (
    <div className="Dom">
        <Nav />
        <div>
            <Seach/>
            <Images />
            <Article/>
            <Events/>
        </div>
        <Footer/>
    </div>
);
export default Home;