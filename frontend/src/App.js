import React from 'react';
import './App.css';

import image1 from './Assets/img/1.jpg';
import image2 from './Assets/img/2.jpg';
import image3 from './Assets/img/3.jpg';
import image4 from './Assets/img/4.jpg';
import image5 from './Assets/img/5.jpeg';
import image6 from './Assets/img/6.jpeg';

import instagram from './Assets/logo/instagram.png';
import git from './Assets/logo/git.png';
import whatsapp from './Assets/logo/whatsapp.png';

function App() {
  return (
    <div className="App" id="Inicio">
      <nav>
        <ul>
          <li><a href="#Inicio">Inicio </a></li>
          <li id="event"><a href="">Criar Evento</a></li>
          <li><a href="#my-event">Eventos</a></li>
        </ul>
      </nav>
      <div className="container">
        <div className="events">
          <h2>Bem vindo</h2>
          <img src={image1}/>
          <img src={image2}/>
          <img src={image3}/>
          <img src={image4}/>
          <img src={image5}/>
          <img src={image6}/>
        </div>
        <article>
          <p>Bem vindo a plataforma de eventos a maior plataforma publica já criada
          para você.A plataforma tem como intuito ajudar você a Encontrar suas lojas
          de eventos com mais facilidade.</p>
          <p> Cadastrar seu email é a parte mais importante
          pois precisaremos dele como seu dado para confirmar quando você precisar
          de um evento.
          </p>
        </article>
      </div>
      <div id="my-event">
        <div>
          <span>Eventos</span>
        </div>
        <hr />
        <div class="container-button">
          <input id="hoje" type="submit" value="Hoje" />
          <input id="amanha" type="submit" value="Amanhã" />
          <input id="proximaSemana" type="submit" value="Próxima semana" />
          <input id="all" type="submit" value="Todos os Eventos" />
        </div>
        <div id="box" class="box">
          <table>
            <tr>
              <td></td>
              <td></td>
              <td>
                <img src="" />
              </td>
            </tr>
          </table>
        </div>
      </div>
      <footer>
        <h2>Desenvolvedor</h2>
        <a href="https://www.instagram.com/ino_css/?hl=pt-br" target="_blank">
          <img src={instagram} />
        </a>
        <a href="https://github.com/MarcelinoRodrigues" target="_blank">
          <img src={git} />
        </a>
        <a href="https://whats.link/marcelinorodriguesdonascimento" target="_blank">
          <img src={whatsapp} />
        </a>
      </footer>
    </div>
  );
}

export default App;
