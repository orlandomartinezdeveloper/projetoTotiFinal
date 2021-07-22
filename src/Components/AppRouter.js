import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Cadastro from './Cadastro'
const AppRouter = () => {

    return (
        <div>
            <Router>
                <Switch>
                    <Route path='/Cadastro'>
                        <Cadastro />
                    </Route>
                    <Route path='/Main'>
                        <div>Hola</div>
                    </Route>
                    <Route exact path='/'>
                        <Header />
                        <Main />
                        <Footer />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
export default AppRouter;