import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Cadastro from './Cadastro';
import Mostrar from './Mostrar';
import CarrosTp from './CarrosTp';
import Carregando from './Carregando';
import Somos from './Somos';
import Contato from './Contato';

const AppRouter = () => {
    const [busca, setBusca] = useState('');
    const handleSearch = (captura) => {
        setBusca(captura)
    }

    return (
        <div>
            <Router>
                <Switch>
                    <Route path='/cadastro'>
                        <Cadastro />
                    </Route>
                    <Route path='/mostrarCar/:id'>
                        <Mostrar />
                    </Route>
                    <Route path='/Contato'>
                        <Header />
                        <Contato />
                    </Route>
                    <Route path='/Main'>
                        <Carregando />
                    </Route>
                    <Route path='/Somos'>
                        <Header />
                        <Somos />
                    </Route>
                    <Route exact path='/'>
                        <Header />
                        <Main handleSearch={handleSearch} />
                        <CarrosTp busca={busca} />
                        <Footer />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
export default AppRouter;