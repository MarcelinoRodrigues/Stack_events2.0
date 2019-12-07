import React from 'react';

import Git from '../assets/git.png';
import Insta from '../assets/instagram.png';
import Whatsapp from '../assets/whatsapp.png';

const Footer = () => (
    <footer>
        <p>Nossos Contatos</p>
        <a href="https://github.com/MarcelinoRodrigues/playing-in-ReactJs.git"><img src={Git}/></a>
        <a href="https://www.instagram.com/?hl=pt-br"><img src={Insta}/></a>
        <a href="#"><img src={Whatsapp}/></a>
    </footer>
);
export default Footer;