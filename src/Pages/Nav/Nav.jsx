import React from 'react';
import './Nav.css';

const Nav = () => (
    <div className="Container">
        <nav>
            <ul>
                <li><a id="linkmenu" href="#">Inicio</a></li>
                <li><a id="linkmenu" href="https://www.sympla.com.br/eventos/fortaleza-ce" target="_blank">Eventos</a></li>
                <li><a id="linkmenu" href="#my-footer">Contacto</a></li>
            </ul>
        </nav>
    </div>
);

export default Nav;