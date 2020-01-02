import React from 'react';

import Nav from '../Pages/Nav/Nav';
import Images from '../Pages/Images/Images';
import Seach from '../Pages/Seach/Seach';
import Footer from '../Pages/Footer/footer';
import Article from '../Pages/Article/Article';
import Events from '../Pages/Events/Events';

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