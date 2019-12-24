import React from 'react';

import Event1 from '../assets/img/event1.jpg';
import Event2 from '../assets/img/event2.jpg';
import Event3 from '../assets/img/event3.jpg';

function Tomorrow(props){
    return(
        <div className="container">
                <div>
                    <span>1 JAN</span>
                    <span>8 JAN</span>
                    <span>21 JAN</span>
                </div>
                <div>
                    <span>6º CBEE - Fortaleza (CE) 2019</span>
                    <span>Circuito de Corrida - Fortaleza</span>
                    <span>2 Sunset - Show Fortaleza</span>
                </div>
                <div>
                    <img src={Event3}/>
                    <img src={Event2}/>
                    <img src={Event1}/>
                </div>
            </div>
    )
}
export default function Events(){
    return(
        <div className="my-event">
            <div>
                <span>Eventos</span>
            </div>
            <hr/>
            <div className="container-button">
                <button>Hoje</button>
                <button>Amanhâ</button>
                <button>Próxima semana</button>
                <button>Próximo fim de semana</button>
            </div>
            <div className="container">
                <div>
                    <span>6 DEZ</span>
                    <span>8 DEZ</span>
                    <span>21 DEZ</span>
                </div>
                <div>
                    <span>5º CBEE - Fortaleza (CE) 2019</span>
                    <span>Circuito das Estações - Verão - Fortaleza (divulgação)</span>
                    <span>Barong Sunset - Natiruts Fortaleza</span>
                </div>
                <div>
                    <img src={Event1}/>
                    <img src={Event2}/>
                    <img src={Event3}/>
                </div>
            </div>
        </div>
    );
}