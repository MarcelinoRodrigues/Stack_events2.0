import React from 'react';

import Home from './Home';
import Images from './Images';
import Seach from './Seach';
import Footer from './footer';

const Primary = () => (
    <div className="Dom">
        <Home />
        <Seach/>
        <Images />
        <Footer/>
    </div>
);
export default Primary;