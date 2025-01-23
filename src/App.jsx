import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import bannerImageComputer from './assets/banner-barueri.png';
import bannerImageMobile from './assets/banner-barueri-m.jpeg';
import logoVitta from './assets/logo-vitta-nobre.svg';
import jsafraLogo from './assets/jsafra.svg';
import mindoMaisVitta from './assets/mindo-mais-vita.png';
import ciaLogo from './assets/cia.png';
import facebookIcon from './assets/Facebook.svg';
import instagramIcon from './assets/Instagram.svg';
import youtubeIcon from './assets/Youtube.svg';
import './App.css';

function App() {
  const [bannerImage, setBannerImage] = useState(bannerImageComputer);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [checkbox, setCheckbox] = useState({
    todos: false,
    whatsapp: false,
    telefoneCheck: false,
    emailCheck: false,
  });

  useEffect(() => {
    console.log("window.innerWidth <= 768", window.innerWidth <= 768);
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setBannerImage(bannerImageMobile);
      } else {
        setBannerImage(bannerImageComputer);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const message = `Novo Cadastro:
    Nome: ${nome}
    E-mail: ${email}
    Telefone: ${telefone}
    WhatsApp: ${checkbox.whatsapp ? 'Sim' : 'Não'}
    Telefone: ${checkbox.telefoneCheck ? 'Sim' : 'Não'}
    E-mail: ${checkbox.emailCheck ? 'Sim' : 'Não'}`;
  
    const encodedMessage = encodeURIComponent(message);
  
    alert("Clique em 'Iniciar conversa' para enviar a mensagem!");
  
    window.location.href = `https://wa.me/5511983006699?text=${encodedMessage}`;
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;

    if (name === 'todos') {
      setCheckbox({
        todos: checked,
        whatsapp: checked,
        telefoneCheck: checked,
        emailCheck: checked,
      });
    } else {
      setCheckbox((prevCheckbox) => ({
        ...prevCheckbox,
        [name]: checked,
      }));
    }
  };

  return (
    <div>
      <header>
        <div className="logo">
          <figure>
            <img src={logoVitta} alt="Vitta Nobre" />
          </figure>
        </div>
        <div className="descricao">
          <h1>
            Chegamos em <strong>Barueri!</strong>
          </h1>
          <h2>Em breve, você descobrirá o mais novo loteamento com a qualidade Vitta que você conhece.</h2>
        </div>
      </header>
      <main style={{ backgroundImage: `url(${bannerImage})` }}>
        <section id="form">
          <div className="form">
            <h3>Antecipe-se e conheça tudo antes!</h3>
            <p>Faça o seu cadastro e receba primeiro todas as novidades deste novo empreendimento.</p>
            <form onSubmit={handleSubmit}>
              <div className="contatos">
                <div className="right">
                  <label className="field">
                    <input
                      type="checkbox"
                      name="todos"
                      checked={checkbox.todos}
                      onChange={handleCheckboxChange}
                    />
                    <span>Marcar todos itens</span>
                  </label>
                  <label className="field">
                    <input
                      type="checkbox"
                      name="whatsapp"
                      checked={checkbox.whatsapp}
                      onChange={handleCheckboxChange}
                    />
                    <span>WhatsApp</span>
                  </label>
                </div>
                <div className="left-form">
                  <label className="field">
                    <input
                      type="checkbox"
                      name="telefoneCheck"
                      checked={checkbox.telefoneCheck}
                      onChange={handleCheckboxChange}
                    />
                    <span>Telefone</span>
                  </label>
                  <label className="field">
                    <input
                      type="checkbox"
                      name="emailCheck"
                      checked={checkbox.emailCheck}
                      onChange={handleCheckboxChange}
                    />
                    <span>E-mail</span>
                  </label>
                </div>
              </div>
              <div className="nome">
                <input
                  className="input"
                  type="text"
                  name="nome"
                  placeholder="Digite seu Nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                />
              </div>
              <div className="e-mail">
                <input
                  className="input"
                  type="email"
                  name="email"
                  placeholder="Digite seu E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="telefone">
                <input
                  className="input"
                  type="tel"
                  name="telefone"
                  placeholder="DDD + Telefone"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  required
                />
              </div>
              <div className="termos">
                <label>
                  <input type="checkbox" required />
                  <span>
                    Concordo com a <a href="#">Política de Privacidade</a>
                  </span>
                </label>
                <label>
                  <input type="checkbox" required />
                  <span>Aceito receber novidades sobre o futuro lançamento</span>
                </label>
              </div>
              <button type="submit" className="button">ENVIAR</button>
            </form>
          </div>
        </section>
      </main>
      <footer>
        <div className="jsafra">
          <figure>
            <img src={jsafraLogo} alt="Folha rodapé" />
          </figure>
        </div>
        <div className="selos">
          <div className="vitta">
            <figure>
              <img src={mindoMaisVitta} alt="Mundo mais Vitta" />
            </figure>
          </div>
          <div className="cia">
            <p>Coordenação de vendas</p>
            <figure>
              <img src={ciaLogo} alt="Cia" />
            </figure>
          </div>
          <div className="redes">
            <p>Conheça nossas redes sociais</p>
            <ul>
              <li>
                <a href="#" title="Facebook">
                  <img src={facebookIcon} alt="Facebook" />
                </a>
              </li>
              <li>
                <a href="#" title="Instagram">
                  <img src={instagramIcon} alt="Instagram" />
                </a>
              </li>
              <li>
                <a href="#" title="YouTube">
                  <img src={youtubeIcon} alt="YouTube" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
