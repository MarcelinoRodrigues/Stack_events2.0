import React from 'react';

import Home from './Home';
import Images from './Images';
import Seach from './Seach';
import Footer from './footer';
import Article from './Article';

const Primary = () => (
    <div className="Dom">
        <Home />
        <Seach/>
        <div>
            <Images />
            <Article/>
        </div>
        <Footer/>
    </div>
);
export default Primary;