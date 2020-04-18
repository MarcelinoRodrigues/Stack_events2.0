import React from 'react';

import Nav from '../Pages/Nav/Nav';
import Images from '../Pages/Images/Images';
import Footer from '../Pages/Footer/footer';
import Article from '../Pages/Article/Article';
import Events from '../Pages/Events/Events';

const Home = () => (
    <div className="Dom">
        <body id="Inicio">
            <Nav />
            <div className="container">
                <Images />
                <Article/>
            </div>
            <Events/>
            <Footer/>
        </body>
    </div>
);
export default Home;