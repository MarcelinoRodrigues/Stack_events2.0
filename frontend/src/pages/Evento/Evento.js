import React from 'react';
import Nav from '../../components/Nav';

function Sair(props) {
    return <li><a href="#my-event">{props.children}</a></li>
}

const Evento = () => (
    <>
        <Nav>
            <Sair name="sair"/>
        </Nav> 
    </>
);

export default Evento;