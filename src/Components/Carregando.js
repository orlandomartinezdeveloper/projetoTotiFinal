import React from 'react';
import CarregandoCSS from '../CSS/Carregando.module.css'
import Pneu from '../Img/pneu.png';
const Carregando = () => {

    return (
        <div className={CarregandoCSS.containerFather}>
            <div className={CarregandoCSS.caucho}><img src={Pneu} alt="Pneu" className={CarregandoCSS.rueda} /></div>
            <div className={CarregandoCSS.container}>
                <span>C</span>
                <span>A</span>
                <span>R</span>
                <span>R</span>
                <span>E</span>
                <span>G</span>
                <span>A</span>
                <span>N</span>
                <span>D</span>
                <span>O</span>
            </div>
            <div className={CarregandoCSS.caucho}><img src={Pneu} alt="Pneu" className={CarregandoCSS.rueda} /></div>
        </div>
    )
}
export default Carregando;