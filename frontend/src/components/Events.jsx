import React, { useState, useEffect } from 'react';

import DateUtil from '../util/dateUtil';

import Event1 from '../assets/img/event1.jpg';
import Event2 from '../assets/img/event2.jpg';
import Event3 from '../assets/img/event3.jpg';

const AcoesEventos = {
    HOJE: {
        nome: "Hoje",
        acao: DateUtil.ehDataHoje
    },
    AMANHA: {
        nome: "Amanhã",
        acao: DateUtil.ehDataAmanha
    },
    PROXIMA_SEMANA: {
        nome: "Próxima Semana",
        acao: DateUtil.ehDataProximaSemana
    },
    PROXIMO_FIM_DE_SEMANA: {
        nome: "Próximo Final de Semana",
        acao: DateUtil.ehDataProximoFinalDeSemana
    },
};

const BotaoEvento = (props) => {
    const { acaoEvento } = props;
    return <button onClick={() => props.aoClicar(acaoEvento.acao)}> {acaoEvento.nome} </button>
};

const eventos = [
    {
        data: new Date(),
        descricao: '5º CBEE - Fortaleza (CE) 2019',
        imagem: Event1
    },
    {
        data: new Date(2020, 2, 7),
        descricao: 'Circuito das Estações - Verão - Fortaleza (divulgação)',
        imagem: Event2
    },
    {
        data: new Date(2020, 2, 10),
        descricao: 'Barong Sunset - Natiruts Fortaleza',
        imagem: Event3
    },
    {
        data: new Date(2020, 2, 7),
        descricao: 'Teste próximo final de semana',
        imagem: Event3
    }
];

const filtrarEventos = acao => eventos.filter(e => acao(e.data));

export default function Events() {
    const [eventosFiltrados, setEventosFiltrados] = useState([]);

    const aoClicar = acao => {
        setEventosFiltrados(() => filtrarEventos(acao));
    };

    useEffect(() => {
        setEventosFiltrados(() => filtrarEventos(AcoesEventos.HOJE.acao));
    }, []);

    return (
        <div id="my-event">
            <div>
                <span>Eventos</span>
            </div>
            <hr />
            <div className="container-button">
                <BotaoEvento aoClicar={aoClicar} acaoEvento={AcoesEventos.HOJE} />
                <BotaoEvento aoClicar={aoClicar} acaoEvento={AcoesEventos.AMANHA} />
                <BotaoEvento aoClicar={aoClicar} acaoEvento={AcoesEventos.PROXIMA_SEMANA} />
                <BotaoEvento aoClicar={aoClicar} acaoEvento={AcoesEventos.PROXIMO_FIM_DE_SEMANA} />
            </div>
            <div className="box">
                <table>
                    <tbody>
                        {
                            eventosFiltrados.map((evento, id) => {
                                const data = evento.data;
                                const dataFormatada = `${data.getDate()} ${DateUtil.obtemMesFormatado(data.getMonth())}`

                                return (
                                    <tr key={id}>
                                        <td>{dataFormatada}</td>
                                        <td>{evento.descricao}</td>
                                        <td> <img alt="Img_Evento" src={evento.imagem} /></td>
                                    </tr>
                                )
                            }
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}