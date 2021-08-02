import { useState, useEffect } from 'react'
import MostrarCss from '../CSS/Mostrar.module.css'
// import logo from '../Img/logo-car-finder.png'
import { Link, useParams } from 'react-router-dom'
import Modal from './Modal'

const Mostrar = () => {
  const [car, setCar] = useState({});
  const [edit, setEdit] = useState(true);
  const [guardar, setGuardar] = useState(false);
  const [deletar, setDeletar] = useState(true);
  const [disabled, setDisabled] = useState(true);
  const [mostrarModal, setMostrarModal] = useState(false)
  const [menssagemModal, setMenssagemModal] = useState('')
  const [bottonModal, setBottonModal] = useState('')
  // const [idDelete, setidDelete ] = useState(0)
  const [bottonAtivo, setBottonAtivo] = useState(true)
  const [menssagemRegistro, setMenssagemRegistro] = useState(false)

  const {
    ano,
    cadastradoPor,
    cidade,
    combustivel,
    contato,
    cor,
    descricao,
    marca,
    modelo,
    preco,
    transmissao,
    uf,
    urlFotoPrincipal
  } = car;
  const { id } = useParams();
  const endPoint = 'https://carfinder-toti.herokuapp.com/cars'
  const obtenerCar = () => {
    fetch(`${endPoint}/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setCar(data);
      })
  }

  const EditarCar = (event) => {
    event.preventDefault()
    
    if (!urlFotoPrincipal && !cidade && !uf && !contato && !descricao && !contato && !marca && !modelo && !cor && !ano && !combustivel && !transmissao && !preco && !cadastradoPor) {
      return console.error('Campos obrigatórios!')
    }

    setMenssagemRegistro(true)
    setBottonAtivo(false)
    setGuardar(false)

    fetch(`${endPoint}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(car)
    })
      .then(response => response.json())
      .then(car => {
        setMenssagemModal('Dados do veículo modificados satistactoriamente')
        setBottonModal('Ver Registro')
        obtenerCar()
        setDisabled(true)
        setEdit(true)
        setDeletar(true)
        setBottonAtivo(true)
        setMenssagemRegistro(false)
        setMostrarModal(true)
        console.log(car)
      })
      .catch(error => {
        setMenssagemModal(`Veículo nao Modificado
             ${error}`)
        setBottonModal('Tentar novamente')
        setMostrarModal(false)
        console.log(error)
      })
  }

  useEffect(obtenerCar, [ id ])

  const deleteCar = (id) => {
    fetch(`${endPoint}/${id}`, {
      method: 'DELETE'
    })
    .then(response => response.text())
    .then(data => {
      // setidDelete(id)
      setMenssagemModal('Veículo apagado satistactoriamente')
      setBottonModal('desactivar este botton')
      setMostrarModal(true)
      console.log('deletado con sucesso')
      console.log(data)
    })
    .catch(function (error) {
      setMenssagemModal(`Veículo nao Apagado
             ${error}`)
      setBottonModal('Tentar novamente')
      setMostrarModal(false)
      console.log(error)
    });  
  } 

  const desactBotton = () => {
    setEdit(false)
    setGuardar(true)
    setDeletar(false)
    setDisabled(false)

  }

  const fecharModal = () => {
    setMostrarModal(false)
  }

  return (
    <div>
      <div className={ MostrarCss.container }>
        <div className={ MostrarCss.headerCadastro }>
        <img className={ MostrarCss.logo } src={ urlFotoPrincipal } alt="logo" />
        <div className={ MostrarCss.titulo }>{ marca } - { modelo }</div>
      </div>
        <form onSubmit={ (event) => EditarCar(event) }>
         <div className={ MostrarCss.containerForm }>
          <div className="mb-3">
            <label htmlFor="urlFotoPrincipal" className="form-label">Foto</label>
            <input type="url" className="form-control" id="urlFotoPrincipal" defaultValue={ urlFotoPrincipal } placeholder="https://" required disabled={ disabled } onChange={(event) =>  setCar({ ...car, urlFotoPrincipal:event.target.value })}/>
          </div>
          <div className="mb-3">
            <label htmlFor="cidade" className="form-label">Cidade</label>
            <input type="texto" className="form-control" defaultValue={ cidade } id="cidade" placeholder="" required disabled={ disabled } onChange={(event) => setCar({...car, cidade:event.target.value })}/>
          </div>
          <div className="mb-3">
            <label htmlFor="uf" className="form-label">UF</label>
            <input type="texto" className="form-control" defaultValue={ uf } id="uf" placeholder="" required disabled={ disabled } onChange={(event) => setCar({ ...car, uf:event.target.value })}/>
          </div>
          <div className="mb-3">
            <label htmlFor="contato" className="form-label">Contato</label>
            <input type="texto" className="form-control" id="contato" defaultValue={ contato } placeholder="(11) 11111 1111" required disabled={ disabled } onChange={(event) => setCar({ ...car, contato:event.target.value })} />
          </div>
          <div className="mb-3">
            <label htmlFor="descricao" className="form-label">Descrição</label>
            <input type="texto" className="form-control" id="descricao" defaultValue={ descricao } placeholder="Poco uso" required disabled={ disabled } onChange={ (event) => setCar({ ...car, descricao:event.target.value })}/>
          </div>
          <div className="mb-3">
            <label htmlFor="marca" className="form-label">Marca</label>
            <input type="texto" className="form-control" id="marca" defaultValue={marca} placeholder="Jeep" required disabled={ disabled } onChange={ (event) => setCar({ ...car, marca:event.target.value })}/>
          </div>
          <div className="mb-3">
            <label htmlFor="modelo" className="form-label">Modelo</label>
            <input type="texto" className="form-control" id="modelo" defaultValue={ modelo } placeholder="Corolla XLi 1.6 16V 110cv Mec." required disabled={ disabled } onChange={(event) => setCar({ ...car, modelo:event.target.value })}/>
          </div>
          <div className="mb-3">
            <label htmlFor="cor" className="form-label">Cor</label>
            <input type="texto" className="form-control" id="cor" defaultValue={ cor } placeholder="Vermelho" required disabled={ disabled } onChange={ (event) => setCar({ ...car, cor:event.target.value })}/>
          </div>
          <div className="mb-3">
            <label htmlFor="ano" className="form-label">Ano</label>
            <input type="number" className="form-control" id="ano" defaultValue={ ano } placeholder="2014" required disabled={ disabled } onChange={ (event) => setCar({ ...car, ano:event.target.value })}/>
          </div>
          <div className="mb-3">
            <label htmlFor="combustivel" className="form-label">Combustivel</label>
            <input type="texto" className="form-control" id="combustivel" defaultValue={ combustivel } placeholder="Gasolina" required disabled={ disabled } onChange={ (event) => setCar({ ...car, conbustivel:event.target.value })}/>
          </div>
          <div className="mb-3">
            <label htmlFor="transmissao" className="form-label">Transmissão</label>
            <input type="texto" className="form-control" id="transmissao" defaultValue={ transmissao } placeholder="Automático" required disabled={ disabled } onChange={ (event) => setCar({ ...car, transmissao:event.target.value })}/>
          </div>
          <div className="mb-3">
            <label htmlFor="preco" className="form-label">Preço</label>
            <input type="number" className="form-control" id="preco" defaultValue={ preco } placeholder="1000.12" required disabled={ disabled } onChange={ (event) => setCar({ ...car, preco:event.target.value })}/>
          </div>
          <div className="mb-3">
            <label htmlFor="cadastradoPor" className="form-label">Cadastrado por:</label>
            <input type="texto" className="form-control" id="cadastradoPor" defaultValue={ cadastradoPor } placeholder="" required disabled={ disabled } onChange={ (event) => setCar({...car, cadastradoPor:event.target.value })}/>
          </div>
        </div>
        <hr />
        <div className={ MostrarCss.containerButtons }>
          { guardar && <button type="submit" className={ MostrarCss.buttonRegistrar } >Guardar cambios</button> }
          { edit && <button className={ MostrarCss.buttonRegistrar } onClick={ desactBotton }>Editar</button> }
          { bottonAtivo && <Link to="/" className={ MostrarCss.buttonCancelar } onClick={ desactBotton }>Cancelar</Link> }
        </div>
        { menssagemRegistro && <div><p>Modificando o regitro do veículo...</p></div>}
      </form>
      { deletar && <button onClick={ () => {deleteCar(id)} } className={ MostrarCss.buttonRegistrar }>Deletar</button> }

      </div>
      { mostrarModal && <Modal fecharModal={ fecharModal } menssagemModal={ menssagemModal } bottonModal={ bottonModal } id={id} /> }
    </div> 
  )
}

export default Mostrar
