import { useState } from "react";
import githubImg from '../assets/images/github.png'

import '../styles/projects.scss'

export function Projects() {
  const [isPrimaryCardHover, setIsPrimaryCardHover] = useState(false)
  const [isSecondaryCardHover, setIsSecondaryCardHover] = useState(false)
  const [isThirdCardHover, setIsThirdCardHover] = useState(false)

  function handleSetPrimaryCardHoverOpen() {
    setIsPrimaryCardHover(true)
  }

  function handleSetPrimaryCardHoverClose() {
    setIsPrimaryCardHover(false)
  }

  function handleSetSecondaryCardHoverOpen() {
    setIsSecondaryCardHover(true)
  }
  function handleSetSecondaryCardHoverClose() {
    setIsSecondaryCardHover(false)
  }

  function handleSetThirdCardHoverOpen() {
    setIsThirdCardHover(true)
  }
  function handleSetThirdCardHoverClose() {
    setIsThirdCardHover(false)
  }


  return (
    <div className="projects">
      <h1>Projetos</h1>
      <p>Aqui estão alguns dos meus projetos já desenvolvidos.</p>
      <div className="cards" data-aos="fade-right">
        <div
          onMouseOver={handleSetPrimaryCardHoverOpen}
          onMouseOut={handleSetPrimaryCardHoverClose}
          className={`primary-card${isPrimaryCardHover ? " active" : ""}`}
        >
          <div>
            <h2>Flappy Bird</h2>
            <p>Projeto desenvolvido no início de meu aprendizado, utilizando apenas CSS, Javascript e HTML.</p>
            <a href="https://github.com/cainamagoncalves/Projeto-Flappy-Bird" target="blank"><button>Repositório</button></a>
          </div>

        </div>
        <div
          onMouseOver={handleSetSecondaryCardHoverOpen}
          onMouseOut={handleSetSecondaryCardHoverClose}
          className={`secondary-card${isSecondaryCardHover ? " active" : ""}`}
        >
          <div>
            <h2>Cadastro de Usuário</h2>
            <p>
              Desenvolvido em React, tem como foco cadastro, edição e remoção usuários.
              Aprendi principalmente a trabalhar com navegação e estados, consumindo uma fake
              API provida por um Json server.
            </p>
            <a href="https://github.com/cainamagoncalves/Cadastro-de-Usuario" target="blank"><button>Repositório</button></a>
          </div>

        </div>
        <div
          onMouseOver={handleSetThirdCardHoverOpen}
          onMouseOut={handleSetThirdCardHoverClose}
          className={`third-card${isThirdCardHover ? " active" : ""}`}
        >
          <div>
            <h2>DtMoney</h2>
            <p>
              Desenvolvido no Bootcamp Ignite da Rocketseat, consiste em uma aplicação para controle financeiro,
              utilizando hooks como useContext e useState e styled-components para estilização.
            </p>
            <a href="https://github.com/cainamagoncalves/dtmoney" target="blank"><button>Repositório</button></a>
          </div>

        </div>
      </div>
      <a href="https://github.com/cainamagoncalves" target="blank"><button><img src={githubImg} alt="Imagem github" />Veja mais no Github</button></a>
    </div>
  );
}