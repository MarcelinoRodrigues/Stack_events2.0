import React from 'react';

const Formulario =()=>(
    <form id="form" method="POST" enctype="multipart/form-data">
        <h2>Cadastrar Evento</h2>
        <input 
            type="text" 
            id="nomeE" 
            placeholder="Nome Do Evento" 
            autocomplete="off"
            required/>
        <input 
            type="date" 
            id="dataE"
            required/>
        <input 
            type="text"
            id="descricao"
            placeholder="Descrição do Evento"
            autocomplete="off"
            required/>
        <span>
            <h4>Arquivo</h4>
            <input 
                type="file" 
                name="arquivo" 
                id="arquivo"
                required/>
        </span>
        <input type="submit" id="send" value="Criar"/>
    </form>
);
export default Formulario;