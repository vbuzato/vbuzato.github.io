import { FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiJavascript, SiJest, SiRedux } from 'react-icons/si';
import AppReceitas from '../images/app-receitas.png';
import AppReceitas2 from '../images/app-receitas2.png';
import Bussolar from '../images/bussolar1.jpeg';
import Bussolar2 from '../images/bussolar2.jpeg';
import Nasa from '../images/hackathon-nasa.png';
import Trivia from '../images/trivia-game.png';
import TicTacToe from '../images/tic-tac-toe.png';

export default function Portfolio() {
  return (
    <div className="standard-content">
      <h1 className="page-title">
        <span className="title-slash">./</span>
        Portfólio
      </h1>

      <div className="job-box">
        <div className="job-desc-techs">
          <h2 className="job-title">Hackathon CCR</h2>
          <p className="job-description">
            Este foi um projeto desenvolvido durante o fim de semana do hackathon, onde
            atuei no front-end. O Bussolar surgiu para ser o guia especializado dos
            jovens brasileiros na difícil tarefa de identificação das suas habilidades.
            Nossa missão é ajudá-los a encontrar suas afinidades e o que falta para
            potencializa-las. Os modelos tradicionais de testes vocacionais são muitas
            vezes elementos de decisão binária, diferente de nós, que conduzimos os
            jovens através de um chatbot aberto, sustentado pela conexão de diferentes
            metodologias como &quot;Big 5&quot; e &quot;Arquétipos de Young&quot;.
            Cada resposta desse diálogo fornece elementos para identificação de
            habilidades e afinidades ou a identificação de elementos da
            multipotencialidade. Bussolar, uma conversa franca que pode abrir as
            portas do auto-conhecimento.
          </p>
          <div className="techs-box">
            <div className="used-tech">
              <FaReact />
              <span className="tech">ReactJS</span>
            </div>
            <div className="used-tech">
              <SiJavascript />
              <span className="tech">JavaScript</span>
            </div>
            <div className="used-tech">
              <FaHtml5 />
              <span className="tech">HTML</span>
            </div>
            <div className="used-tech">
              <FaCss3Alt />
              <span className="tech">CSS</span>
            </div>
          </div>
        </div>
        <div className="group-bts-thumb">
          <div className="job-box-thumb">
            <img src={ Bussolar } alt="Tic-Tac-Toe" className="job-thumb" />
            <img src={ Bussolar2 } alt="Tic-Tac-Toe" className="job-thumb" />
          </div>
          <div className="job-buttons">
            <a href="https://www.youtube.com/watch?v=-6gGENM1afI" target="_blank" rel="noreferrer" className="bt-job-view border-rad-bot-left">
              Visualizar demo
            </a>
            <a href="https://github.com/vbuzato/bussolar/tree/master/pwa" target="_blank" rel="noreferrer" className="bt-job-view border-rad-bot-right">
              Ver código do projeto
            </a>
          </div>
        </div>
      </div>

      <div className="job-box">
        <div className="job-desc-techs">
          <h2 className="job-title">App de Receitas</h2>
          <p className="job-description">
            Este projeto se trata de um app que tem como objetivo consumir uma API de
            receitas e disponibilizá-las aos usuários. Foram criadas diversas
            funcionalidades como filtros por comidas, drinks, ingredientes específicos,
            opções para favoritar receitas, salvar receitas, utilizar o app no andamento
            da receita e armazenar as receitas concluídas. Também possui validação de
            e-mail e senha na tela de login conforme regra de negócio. Projeto feito em
            grupo de 4 pessoas dentro das exigências do curso da Trybe. Aprendemos muito,
            com certeza foi um projeto ótimo de planejar e codar.
          </p>
          <div className="techs-box">
            <div className="used-tech">
              <FaReact />
              <span className="tech">ReactJS</span>
            </div>
            <div className="used-tech">
              <FaReact />
              <span className="tech">Context API</span>
            </div>
            <div className="used-tech">
              <SiJavascript />
              <span className="tech">JavaScript</span>
            </div>
            <div className="used-tech">
              <FaHtml5 />
              <span className="tech">HTML</span>
            </div>
            <div className="used-tech">
              <FaCss3Alt />
              <span className="tech">CSS</span>
            </div>
            <div className="used-tech">
              <SiJest />
              <span className="tech">Jest</span>
            </div>
          </div>
        </div>
        <div className="group-bts-thumb">
          <div className="job-box-thumb">
            <img src={ AppReceitas } alt="App de Receitas" className="job-thumb" />
            <img src={ AppReceitas2 } alt="App de Receitas" className="job-thumb" />
          </div>
          <div className="job-buttons">
            <a href="https://vbuzato.github.io/trivia-react-redux/" target="_blank" rel="noreferrer" className="bt-job-view border-rad-bot-left">
              Visualizar projeto
            </a>
            <a href="https://vbuzato.github.io/trivia-react-redux/" target="_blank" rel="noreferrer" className="bt-job-view border-rad-bot-right">
              Ver código do projeto
            </a>
          </div>
        </div>
      </div>

      <div className="job-box">
        <div className="job-desc-techs">
          <h2 className="job-title">Trivia Game</h2>
          <p className="job-description">
            Trivia é um jogo de perguntas e respostas, estilo show do milhão. As
            perguntas vem de uma API. Nesse projeto foi incluído áudio, filtros,
            e utilizado redux para controlar o estado da aplicação. Também há uma
            pontuação para cada rodada de perguntas e um ranking ao final do jogo.
          </p>
          <div className="techs-box">
            <div className="used-tech">
              <FaReact />
              <span className="tech">ReactJS</span>
            </div>
            <div className="used-tech">
              <SiRedux />
              <span className="tech">Redux</span>
            </div>
            <div className="used-tech">
              <SiJavascript />
              <span className="tech">JavaScript</span>
            </div>
            <div className="used-tech">
              <FaHtml5 />
              <span className="tech">HTML</span>
            </div>
            <div className="used-tech">
              <FaCss3Alt />
              <span className="tech">CSS</span>
            </div>
          </div>
        </div>
        <div className="group-bts-thumb">
          <div className="job-box-thumb">
            <img src={ Trivia } alt="Trivia Game" className="job-thumb" />
          </div>
          <div className="job-buttons">
            <a href="https://vbuzato.github.io/trivia-react-redux/" target="_blank" rel="noreferrer" className="bt-job-view border-rad-bot-left">
              Visualizar projeto
            </a>
            <a href="https://github.com/vbuzato/trivia-react-redux" target="_blank" rel="noreferrer" className="bt-job-view border-rad-bot-right">
              Ver código do projeto
            </a>
          </div>
        </div>
      </div>

      <div className="job-box">
        <div className="job-desc-techs">
          <h2 className="job-title">Hackathon da NASA 2020</h2>
          <p className="job-description">
            Este foi meu primeiro Hackathon, e o objetivo era demonstrar a funcionalidade
            de encontrar satélites próximos ao local definido no campo de busca. Neste
            projeto foi utilizado JS puro, consumo de APIs da Nasa, de geolocalização e de
            conversão de nomes de cidades para coordenadas geográficas. Com certeza valeu
            o aprendizado!
          </p>
          <div className="techs-box">
            <div className="used-tech">
              <SiJavascript />
              <span className="tech">JavaScript</span>
            </div>
            <div className="used-tech">
              <FaHtml5 />
              <span className="tech">HTML</span>
            </div>
            <div className="used-tech">
              <FaCss3Alt />
              <span className="tech">CSS</span>
            </div>
          </div>
        </div>
        <div className="group-bts-thumb">
          <div className="job-box-thumb">
            <img src={ Nasa } alt="Hackathon da NASA 2020" className="job-thumb" />
          </div>
          <div className="job-buttons">
            <a href="https://www.youtube.com/watch?v=swgVXbvqYBk" target="_blank" rel="noreferrer" className="bt-job-view border-rad-bot-left">
              Visualizar demo
            </a>
            <a href="https://github.com/vbuzato/Nasa-Space-Apps-Challenge-2020" target="_blank" rel="noreferrer" className="bt-job-view border-rad-bot-right">
              Ver código do projeto
            </a>
          </div>
        </div>
      </div>

      <div className="job-box">
        <div className="job-desc-techs">
          <h2 className="job-title">Tic-Tac-Toe</h2>
          <p className="job-description">
            Fiz um simples jogo da velha para praticar e matar a curiosidade de criá-lo!
          </p>
          <div className="techs-box">
            <div className="used-tech">
              <FaReact />
              <span className="tech">ReactJS</span>
            </div>
            <div className="used-tech">
              <SiJavascript />
              <span className="tech">JavaScript</span>
            </div>
            <div className="used-tech">
              <FaHtml5 />
              <span className="tech">HTML</span>
            </div>
            <div className="used-tech">
              <FaCss3Alt />
              <span className="tech">CSS</span>
            </div>
          </div>
        </div>
        <div className="group-bts-thumb">
          <div className="job-box-thumb">
            <img src={ TicTacToe } alt="Tic-Tac-Toe" className="job-thumb" />
          </div>
          <div className="job-buttons">
            <a href="https://vbuzato.github.io/tic-tac-toe/" target="_blank" rel="noreferrer" className="bt-job-view border-rad-bot-left">
              Visualizar projeto
            </a>
            <a href="https://github.com/vbuzato/tic-tac-toe" target="_blank" rel="noreferrer" className="bt-job-view border-rad-bot-right">
              Ver código do projeto
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
