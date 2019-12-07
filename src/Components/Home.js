import React from 'react';

import Nav from './Nav';
import Images from './Images';
import Seach from './Seach';
import Footer from './footer';
import Article from './Article';

const Home = () => (
    <div className="Dom">
        <Nav />
        <Seach/>
        <div>
            <Images />
            <Article/>
        </div>
        <Footer/>
    </div>
);
export default Home;