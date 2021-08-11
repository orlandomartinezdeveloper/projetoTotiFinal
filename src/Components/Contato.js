import React from 'react';
import ContatoCSS from '../CSS/Contato.module.css';
import fondo from '../Img/wallcarros.jpg'
const Contato = () => {

    return (
        <div className={ContatoCSS.containerFluid} style={{ backgroundImage: `url(${fondo})` }}>
            <div className={ContatoCSS.conteudo}>
                <h1>Contato</h1>
                <div className={ContatoCSS.formulario}>
                    <h3 className={ContatoCSS.subtitulo}>Formulário de Contato</h3>
                    <form action="https://formsubmit.co/omjuniormusic@gmail.com" method="POST">
                        <input type="text" id="name" name="name" placeholder="Escreva seu nome" className="form-control mb-2" required />
                        <input type="email" id="email" name="email" placeholder="Digite seu email" className="form-control mb-2" required />
                        <button type="submit" id="button" className={ContatoCSS.botao}>Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contato;