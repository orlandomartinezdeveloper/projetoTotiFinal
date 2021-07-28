import React, { useState } from 'react';
import ControlCSS from '../CSS/Control.module.css';
import { Link } from 'react-router-dom';
// import Cadastro from './Cadastro'
const Control = (props) => {
    const [busca, setBusca] = useState('')
    console.log(busca);
    return (
        <div className={ControlCSS.module}>
            <div className={ControlCSS.cBotoes}>
                <Link to="/cadastro"><button className={ControlCSS.botao} >Novo_Carro</button></Link>
                <div className={ControlCSS.busqueda}>
                    <input type="text" className={ControlCSS.inputGrand} placeholder="Qual carro você está procurando?"
                        value={busca}
                        onChange={(event) => setBusca(event.target.value)} aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <span className={ControlCSS.lupa}><i className="fa fa-search"></i></span>
                </div>
            </div>
        </div>
    )
}
export default Control;