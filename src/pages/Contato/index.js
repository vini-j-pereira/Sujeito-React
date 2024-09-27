import { Link } from 'react-router-dom';

function Contato() {
    return (
      <div>
      <h1>Fale conosco</h1><br></br><br></br>
      <Link to="/">Home</Link><br></br><br></br>
      <Link to="/sobre">Sobre</Link>
      </div>
    );
  }
  
  export default Contato;