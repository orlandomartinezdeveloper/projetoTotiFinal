import React from 'react';
import ContatoCSS from '../CSS/Contato.module.css';
import fondo from '../Img/wallcarros.jpg'
const Contato = () => {

    return (
        <div className={ContatoCSS.containerFluid} style={{ backgroundImage: `url(${fondo})` }}>
            <div className={ContatoCSS.conteudo}>
                <h1>Contato</h1>
                <div className={ContatoCSS.formulario}>
                    <h3>Formulário de Contato</h3>
                    <form>
                        <input type="text" id="name" placeholder="Escreva seu nome" required />
                        <input type="email" id="email" placeholder="Digite seu email" required />
                        <button type="reset" id="button">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contato;