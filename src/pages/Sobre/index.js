import { Link } from 'react-router-dom';

function Sobre() {
    return (
      <div>
      <h1>Sobre Nós!</h1><br></br>
      <Link to="/">Home</Link><br></br><br></br>
      <Link to="/contato">Contato</Link>
      </div>
    );
  }
  
  export default Sobre;