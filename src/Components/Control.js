import React from 'react';
import ControlCSS from '../CSS/Control.module.css';
import { Link } from 'react-router-dom';
// import Cadastro from './Cadastro'
const Control = () => {

    return (
        <div className={ControlCSS.module}>
            <div className={ControlCSS.cBotoes}>
<<<<<<< HEAD
                <button className={ControlCSS.botao} > <Link to="/cadastro">Novo Animal</Link></button>
=======
                <button className={ControlCSS.botao}>Novo Veículo</button>
>>>>>>> main
                <div className={ControlCSS.busqueda}>
                    <div className="input-group mb-3" />
                    <input type="text" className="form-control" placeholder="Qual carro você está procurando?" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <span className="input-group-text" id="basic-addon2"><i className="fa fa-search"></i></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Control;