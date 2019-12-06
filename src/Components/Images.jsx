import React from 'react';

import image1 from '../assets/img/1.jpg';
import image2 from '../assets/img/2.jpg';
import image3 from '../assets/img/3.jpg';
import image4 from '../assets/img/4.jpg';
import image5 from '../assets/img/5.jpeg';
import image6 from '../assets/img/6.jpeg';

const Images = () => (
    <div className="container_image">
        <h1>New Restaurant</h1>
        <div>
            <img src={image1} />
            <img src={image2} />
            <img src={image3} />
            <img src={image4} />
            <img src={image5} />
            <img src={image6} />
        </div>
    </div>
);
export default Images;
