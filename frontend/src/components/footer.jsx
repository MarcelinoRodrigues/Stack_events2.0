import React from 'react';

import Git from '../assets/logo/git.png';
import Insta from '../assets/logo/instagram.png';
import Whatsapp from '../assets/logo/whatsapp.png';

const Footer = () => (
    <footer id="my-footer">
        <p>Colaborador</p>
        <a href="https://www.instagram.com/ino_css/?hl=pt-br" target="_blank"><img src={Insta}/></a>
        <a href="https://whats.link/marcelinorodriguesdonascimento" target="_blank"><img src={Whatsapp}/></a>
        <a href="https://github.com/MarcelinoRodrigues/playing-in-ReactJs.git" target="_blank"><img src={Git}/></a>
    </footer>
);
export default Footer;