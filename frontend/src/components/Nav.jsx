import React from 'react';

function Inicio(props) {
    return (
        <li><a href="#Inicio">{props.name}</a></li>
    )
}
function CriarEventos(props) {
    return (
        <li id="event"><a href="../pages/Evento/Evento.js">{props.name}</a></li>
    )
}
function Eventos(props) {
    return (
        <li><a href="#my-event">{props.name}</a></li>
    )
}

const Nav = () => (    
    <nav>
        <ul>
            <Inicio name="Inicio"/>
            <CriarEventos name="Criar Eventos"/>
            <Eventos name="Eventos"/>
        </ul>
    </nav>
);

export default Nav;