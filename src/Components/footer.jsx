import React from 'react';

import Git from '../assets/git.png';
import Insta from '../assets/instagram.png';
import Whatsapp from '../assets/whatsapp.png';

const Footer = () => (
    <footer id="my-footer">
        <p>Colaborador</p>
        <a href="https://github.com/MarcelinoRodrigues/playing-in-ReactJs.git" target="_blank"><img src={Git}/></a>
        <a href="https://www.instagram.com/ino_css/?hl=pt-br" target="_blank"><img src={Insta}/></a>
        <a href="https://whats.link/marcelinorodriguesdonascimento" target="_blank"><img src={Whatsapp}/></a>
    </footer>
);
export default Footer;