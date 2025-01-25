import { useState, useEffect } from 'react';
import bannerImageComputer from './assets/fundo.jpg';
import logoVitta from './assets/logo-vitta-nobre.svg';
import jsafraLogo from './assets/jsafra.svg';
import phsLogo from './assets/phs-logo.png';
import facebookIcon from './assets/Facebook.svg';
import instagramIcon from './assets/Instagram.svg';
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
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setBannerImage(bannerImageComputer);
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
  
    const message = `Ola, eu venho através do site da phs e tenho interesse em saber mais sobre o vitta barueri, meus dados para cadastro:
    Nome: ${nome}
    E-mail: ${email}
    Telefone: ${telefone}
    Aceito receber mensagens via WhatsApp: ${checkbox.whatsapp ? 'Sim' : 'Não'}
    Aceito receber ligações e sms via Telefone: ${checkbox.telefoneCheck ? 'Sim' : 'Não'}
    Aceito receber informações via E-mail: ${checkbox.emailCheck ? 'Sim' : 'Não'}`;
  
    const encodedMessage = encodeURIComponent(message);
    
    window.location.href = `https://wa.me/5511934061572?text=${encodedMessage}`;
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
          <div>
            <p>Imobiliaria pioneira</p>
            <figure>
              <a href="https://www.imoveisphs.com.br" target="_blank">
                <img src={phsLogo} alt="phs" className="img-phs"/>  
              </a>
            </figure>
          </div>
          <div className="redes">
            <p>Conheça nossas redes sociais</p>
            <ul>
              <li>
                <a href="https://www.facebook.com/phs.negociosimob/" title="Facebook" target="_blank">
                  <img src={facebookIcon} alt="Facebook" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/phs.negociosimob/" title="Instagram" target="_blank">
                  <img src={instagramIcon} alt="Instagram" />
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
