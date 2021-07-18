import '../styles/header.scss';
import webImage from '../assets/images/webimage1.png';
import perfilPhoto from '../assets/images/perfil.jpeg'

interface HeaderProps {
  onHandleOpenNewSendMailModal: () => void;
}

export function Header({ onHandleOpenNewSendMailModal }: HeaderProps) {
  return (
    <header id="header" >
      <div className="navigation">
        <img src={perfilPhoto} alt="Foto de perfil" />
        <button onClick={ onHandleOpenNewSendMailModal } >Fale comigo</button>
      </div>
      <div className="content">
        <div className="hello-world">
          <h1>Olá Mundo, <br />
            sou Cainã!</h1>
          <span>Estudante e apaixonado por tecnologia, focado em desenvolvimento Front-end</span>
        </div>
        <div className="computer-image">
          <img src={webImage} alt="Imagem Computador" data-aos="fade-left" />
        </div>

      </div>
    </header>

  )
}