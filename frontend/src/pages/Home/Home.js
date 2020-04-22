import React from 'react';
import Imagens from '../../components/images';
import Article from '../../components/article';
import Eventos from '../../components/eventos';
import Rodape from '../../components/rodape';
import Principal from '../../components/Principal';
import Menu from '../../components/Menu';
import ItemMenu from '../../components/ItemMenu';

const Home = () => (
    <div id="Inicio" className="Dom">
        <Menu>
            <ItemMenu nome="Inicio" linkDestino="#Inicio"/>
            <ItemMenu nome="Criar Eventos" id = "padrao" linkDestino="../pages/Evento/Evento.js"/>
            <ItemMenu nome="Eventos" linkDestino="#my-event"/>
        </Menu>

        <Principal>
            <Imagens/>
            <Article/>
        </Principal>

        <Eventos />
        <Rodape/>
    </div>
);

export default Home;