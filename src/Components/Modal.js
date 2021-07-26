import React from 'react'
import ModalCss from '../CSS/Modal.module.css'
import { Link } from 'react-router-dom'

const Modal = (props)=>{
    const fecharModal = props.fecharModal
    const menssagemModal = props.menssagemModal
    const bottonModal =props.bottonModal
    return(
        <div className={ModalCss.modal}>
            <div className={ModalCss.conteudoModal}>
                <p className={ModalCss.menssagem}>{menssagemModal}</p>
                <div className={ModalCss.containerButtons}>
                    <Link onClick={fecharModal} className={ModalCss.buttonRegistrar}>{bottonModal}</Link>
                    <Link to="/" className={ModalCss.buttonCancelar}>Menu Inicial</Link>
                </div>
            </div>
        </div>
    )
}

export default Modal