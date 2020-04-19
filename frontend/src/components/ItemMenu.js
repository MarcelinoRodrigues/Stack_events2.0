import React from 'react';

const ItemMenu = ({ nome, linkDestino }) => (
    <a href={linkDestino}> {nome} </a>
)

export default ItemMenu;