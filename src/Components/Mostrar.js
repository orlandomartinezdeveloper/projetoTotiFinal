import { useState, useEffect } from 'react'
import MostrarCss from '../CSS/Mostrar.module.css'
// import logo from '../Img/logo-car-finder.png'
import { Link, useParams } from 'react-router-dom';

const Mostrar = () => {
  const [car, setCar] = useState({});
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
  const endPoint = 'https://carfinder-toti.herokuapp.com/cars';
  const obtenerCar = () =>{
    fetch(`${endPoint}/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setCar(data);
      })
  };
  useEffect(obtenerCar, [id]);
  return (
    <div className={MostrarCss.container}>
      <div className={MostrarCss.headerCadastro}>
        <img className={MostrarCss.logo} src={urlFotoPrincipal} alt="logo" />
        <div className={MostrarCss.titulo}>NOMBRE DO VEÍCULO</div>
      </div>
      <form >
        <div className={MostrarCss.containerForm}>
          <div className="mb-3">
            <label htmlFor="urlFotoPrincipal" className="form-label">Foto</label>
            <input type="url" className="form-control" id="urlFotoPrincipal" defaultValue={urlFotoPrincipal} placeholder="https://" required />
          </div>
          <div className="mb-3">
            <label htmlFor="cidade" className="form-label">Cidade</label>
            <input type="texto" className="form-control" defaultValue={cidade} id="cidade" placeholder="" required />
          </div>
          <div className="mb-3">
            <label htmlFor="uf" className="form-label">UF</label>
            <input type="texto" className="form-control" defaultValue={uf} id="uf" placeholder="" required />
          </div>
          <div className="mb-3">
            <label htmlFor="contato" className="form-label">Contato</label>
            <input type="texto" className="form-control" id="contato" defaultValue={contato} placeholder="(11) 11111 1111" required />
          </div>
          <div className="mb-3">
            <label htmlFor="descricao" className="form-label">Descrição</label>
            <input type="texto" className="form-control" id="descricao" defaultValue={descricao} placeholder="Poco uso" required />
          </div>
          <div className="mb-3">
            <label htmlFor="marca" className="form-label">Marca</label>
            <input type="texto" className="form-control" id="marca" defaultValue={marca} placeholder="Jeep" required />
          </div>
          <div className="mb-3">
            <label htmlFor="modelo" className="form-label">Modelo</label>
            <input type="texto" className="form-control" id="modelo" defaultValue={modelo} placeholder="Corolla XLi 1.6 16V 110cv Mec." required />
          </div>
          <div className="mb-3">
            <label htmlFor="cor" className="form-label">Cor</label>
            <input type="texto" className="form-control" id="cor" defaultValue={cor} placeholder="Vermelho" required />
          </div>
          <div className="mb-3">
            <label htmlFor="ano" className="form-label">Ano</label>
            <input type="number" className="form-control" id="ano" defaultValue={ano} placeholder="2014" required />
          </div>
          <div className="mb-3">
            <label htmlFor="combustivel" className="form-label">Combustivel</label>
            <input type="texto" className="form-control" id="combustivel" defaultValue={combustivel} placeholder="Gasolina" required />
          </div>
          <div className="mb-3">
            <label htmlFor="transmissao" className="form-label">Transmissão</label>
            <input type="texto" className="form-control" id="transmissao" defaultValue={transmissao} placeholder="Automático" required />
          </div>
          <div className="mb-3">
            <label htmlFor="preco" className="form-label">Preço</label>
            <input type="number" className="form-control" id="preco" defaultValue={preco} placeholder="1000.12" required />
          </div>
          <div className="mb-3">
            <label htmlFor="cadastradoPor" className="form-label">Cadastrado por:</label>
            <input type="texto" className="form-control" id="cadastradoPor" defaultValue={cadastradoPor} placeholder="" required />
          </div>
        </div>
        <hr />
        <div className={MostrarCss.containerButtons}>
          {/* <button type="submit" className={MostrarCss.buttonRegistrar}>Cadastrar</button> */}
          <button className={MostrarCss.buttonRegistrar}>Editar</button>
          <button className={MostrarCss.buttonRegistrar}>Deletar</button>
          <Link to="/" className={MostrarCss.buttonCancelar}>Cancelar</Link>
        </div>
      </form>
    </div>
  )
}

export default Mostrar
