import React from 'react';

import image1 from '../assets/img/1.jpg';
import image2 from '../assets/img/2.jpg';
import image3 from '../assets/img/3.jpg';

const Images = () =>(
    <div className="container_image">
        <img src={image1}/>
        <img src={image2}/>
        <img src={image3}/>
    </div>
);
export default Images;
