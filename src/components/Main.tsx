import frontImg from '../assets/images/frontend.png'
import '../styles/main.scss'
import interestsImg from '../assets/images/interests.png'
import { Projects } from './Projects';
import { Footer } from './Footer';


export function Main() {
  return (
    <main>
      <div className="about">
        <h2>Seja bem vindo, é um prazer conhecer você!</h2>
        <p>
          Comecei minha jornada no desenvolvimento web em 2020, quando conheci o Javascript. Desde então,
          decidi me aperfeiçoar na linguagem, conhecendo e estudando contextos e recuros relacionados à
          stack. Após ver e experimentar diversas ferramentas, me identifiquei muito com ReactJs, biblioteca na qual
          estou me aperfeiçoando no momento.
        </p>
      </div>
      <div className="tools">
        <div className="interests" data-aos="zoom-in">
          <img src={interestsImg} alt="Imagem Interesses" />
          <h2>Meus interesses</h2>
          <p>
            Meus principais hobbies são jogos online e praticar exercícios, além claro, de praticar muito código. Amo
            música e sou bem eclético, mas meus estilos de preferência são lofi e progressive house. Gosto muito de 
            me reunir amigos próximos para conversar e fazer algo mais reservado.
          </p>
          <ul>
            <h3>Outras atividades</h3>
            <li>Tocar</li>
            <li>Ler</li>
            <li>Filmes</li>
            <li>Lives</li>
            <li>Cozinhar</li>
            <li>Café</li>
          </ul>
        </div>
        <div className="front-end" data-aos="zoom-in">
          <img src={frontImg} alt="" />
          <h2>Front-End Developer</h2>
          <p>Gosto muito de criar código e ver as coisas acontecerem no navegador de maneira dinâmica, bonita e responsiva</p>
          <div className="language">
            <h3>Proficiência nas linguagens</h3>
            <p>Javascript, HTML, CSS, Sass, Typescript, SQL</p>
          </div>
          <ul>
            <h3>Ferramentas</h3>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Github</li>
            <li>Terminal</li>
            <li>NodeJS</li>
            <li>PostgreSql</li>
            <li>Visual Studio Code</li>
          </ul>
        </div>
      </div>
      <Projects />
      <Footer />
    </main>
  );
}