import React from 'react';

import Nav from '../Components/Nav';
import Images from '../Components/Images';
import Seach from '../Components/Seach';
import Footer from '../Components/footer';
import Article from '../Components/Article';
import Events from '../Components/Events';

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