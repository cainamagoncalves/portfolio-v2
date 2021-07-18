import twitterImg from '../assets/images/twitter.png'
import whatsappImg from '../assets/images/whatsapp.png'
import linkedinImg from '../assets/images/linkedin.png'
import '../styles/footer.scss';

export function Footer() {
  return (
    <div id="footer">
      <div className="content">
        <h2>Vivendo, aprendendo &amp; subindo de nível a cada dia</h2>
        <div className="images">
          <a href="https://twitter.com/CainaMoara" target="blank"><button><img src={twitterImg} alt="Imagem Twitter" /></button></a>
          <a href=" https://wa.me/5512981591418" target="blank"><button><img src={whatsappImg} alt="Imagem Wahtsapp" /></button></a>
          <a href="https://www.linkedin.com/in/cainã-gonçalves/" target="blank"><button><img src={linkedinImg} alt="Imagem linkedin" /></button></a>
        </div>
        <h3>Desenvolvido com ❤ por Cainã Gonçalves</h3>
      </div>
    </div>
  );
}