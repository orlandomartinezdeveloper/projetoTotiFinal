import React from 'react'
import AlertDeleteCss from '../CSS/AlertDelete.module.css'
import { Link } from 'react-router-dom'

const AlertDelete = (props) => {
  const fecharModal = props.fecharModal
  const menssagemModal = props.menssagemModal
  const deleteCar = props.deleteCar
  const desactSi = props.desactSi
  const desactNo = props.desactNo
  const id = props.id
  return (
    <div className={AlertDeleteCss.modal}>
      <div className={AlertDeleteCss.conteudoModal}>
        {desactSi && <p className={AlertDeleteCss.menssagem}>{menssagemModal}</p>}
        {desactNo && <p className={AlertDeleteCss.menssagem}>Apagando Registro...</p>}
        <div className={AlertDeleteCss.containerButtons}>
          {desactSi && <div onClick={()=>{deleteCar(id)}} className={AlertDeleteCss.buttonRegistrar}>si</div>}
          {desactSi && <Link to={id ? `/mostrarCar/${id}`: `/Cadastro`} onClick={fecharModal} className={AlertDeleteCss.buttonCancelar}>No</Link>}
        </div>
      </div>
    </div>
  )
}

export default AlertDelete