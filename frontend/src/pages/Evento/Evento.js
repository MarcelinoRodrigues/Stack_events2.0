import React from 'react';
import Menu from '../../components/Menu';
import ItemMenu from '../../components/ItemMenu';
import Rodape from '../../components/rodape';
import Formulario from '../../components/Formulario';

const Evento = () => (
    <>
    <Menu>
        <ItemMenu nome="Sair" id = "padrao" linkDestino="http://localhost:3000/" />
    </Menu>

    <Formulario/>

    <Rodape/>
    </>
);

export default Evento;