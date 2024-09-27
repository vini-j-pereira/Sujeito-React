import { Link } from 'react-router-dom';

function Home() {
    return (
      <div>
      <h1>Bem vindo a nossa Home</h1>
  
      <span>Vini</span><br></br><br></br>

      <Link to="/sobre">Sobre</Link><br></br><br></br>
      <Link to="/contato">Contato</Link>

      <hr></hr><br></br>

      <Link to='/produto/123'>Acessar Produto 123</Link>
      </div>
    );
  }
  
  export default Home;