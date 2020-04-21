import React from 'react';
import Images from '../../components/Images';
import Footer from '../../components/footer';
import Article from '../../components/Article';
import Events from '../../components/Events';
import Principal from '../../components/Principal';
import Menu from '../../components/Menu';
import ItemMenu from '../../components/ItemMenu';

const Home = () => (
    <div id="Inicio" className="Dom">
        <Menu>
            <ItemMenu nome="Inicio" linkDestino="#Inicio"/>
            <ItemMenu nome="Criar Eventos" id = "event" linkDestino="../pages/Evento/Evento.js"/>
            <ItemMenu nome="Eventos" linkDestino="#my-event"/>
        </Menu>

        <Principal>
            <Images />
            <Article />
        </Principal>

        <Events />
        <Footer />
    </div>
);

export default Home;