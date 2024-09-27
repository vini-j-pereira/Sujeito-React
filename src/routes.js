import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Erro from './pages/Erro';
import Produto from './pages/Produto';

import Header from './components/Header';

function RoutesApp(){
    return(
        <BrowserRouter>
        <Header></Header>
        <Routes>
            <Route path='/' element={ <Home></Home> }></Route>
            <Route path='/sobre' element={ <Sobre></Sobre> }></Route>
            <Route path='/contato' element={ <Contato></Contato> }></Route>

            <Route path='/produto/:id' element={ <Produto></Produto> }></Route>

            <Route path='*' element={ <Erro></Erro> }></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;
