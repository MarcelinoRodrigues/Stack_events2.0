import React from 'react';
import Menu from '../../components/Menu';
import ItemMenu from '../../components/ItemMenu';

const Evento = () => (
    <Menu>
        <ItemMenu nome="Sair" id = "padrao" linkDestino="http://localhost:3000/" />
    </Menu>
);

export default Evento;