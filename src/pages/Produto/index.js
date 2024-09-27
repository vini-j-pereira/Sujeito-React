import { useParams } from 'react-router-dom'

function Produto(){

    const { id } = useParams();

    return(
        <div>
            <h3>Pagina de Produtos</h3><br></br>

            <span>
                Meu Produto { id }
            </span>
        </div>
    )
}

export default Produto;