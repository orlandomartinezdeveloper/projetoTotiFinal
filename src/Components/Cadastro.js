import React, { useState } from 'react'
import CadastroCss from '../CSS/Cadastro.module.css'
import logo from '../Img/logo-car-finder.png'
import { Link } from 'react-router-dom';
const Cadastro = () => {
    const [urlFotoPrincipal, setUrlFotoPrincipal] = useState('')
    const [cidade, setCidade] = useState('')
    const [uf, setUf] = useState('')
    const [contato, setContato] = useState('')
    const [descricao, setDescricao] = useState('')
    const [marca, setMarca] = useState('')
    const [modelo, setModelo] = useState('')
    const [cor, setCor] = useState('')
    const [ano, setAno] = useState('')
    const [combustivel, setCombustivel] = useState('')
    const [transmissao, setTransmissao] = useState('')
    const [preco, setPreco] = useState('')
    const [cadastradoPor, setCadastradoPor] = useState('')

    const create = () => {
        if (!urlFotoPrincipal && !cidade && !uf && !contato && !descricao  && !contato && !marca && !modelo && !cor && !ano && !combustivel && !transmissao && !preco && !cadastradoPor) 
        return console.error('Campos obrigatórios!')
        
        const data ={
            urlFotoPrincipal, 
            cidade,
            uf, 
            contato,
            descricao,
            marca,
            modelo,
            cor,
            ano,
            combustivel,
            transmissao,
            preco,
            cadastradoPor
        }

        // const urlBase = 'https://carfinder-toti.herokuapp.com'
    
        fetch('https://carfinder-toti.herokuapp.com/cars', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(response =>response.json())
        .then(data => {console.log(data)})
        .catch(error=>{console.log(error)})
    }

    return (
        <div className={CadastroCss.container}>
            <div className={CadastroCss.headerCadastro}>
                <img className={CadastroCss.logo} src={logo} alt="logo" />
                <div className={CadastroCss.titulo}>CADASTRO DE VEÍCULO</div>   
            </div>
            <form onSubmit={() => create()}>
                <div className={CadastroCss.containerForm}>
                    <div className="mb-3">
                        <label htmlFor="urlFotoPrincipal" className="form-label">Foto</label>
                        <input type="url" className="form-control" id="urlFotoPrincipal" placeholder="https://" required value={urlFotoPrincipal} onChange={(event) => setUrlFotoPrincipal(event.target.value)} /> 
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cidade" className="form-label">Cidade</label>
                        <input type="texto" className="form-control" id="cidade" placeholder="" required value={cidade} onChange={(event) => setCidade(event.target.value)}/> 
                    </div>
                    <div className="mb-3">
                        <label htmlFor="uf" className="form-label">UF</label>
                        <input type="texto" className="form-control" id="uf" placeholder="" required value={uf} onChange={(event) => setUf(event.target.value)}/> 
                    </div>
                    <div className="mb-3">
                        <label htmlFor="contato" className="form-label">Contato</label>
                        <input type="texto" className="form-control" id="contato" placeholder="(11) 11111 1111" required value={contato} onChange={(event) => setContato(event.target.value)} /> 
                    </div>
                    <div className="mb-3">
                        <label htmlFor="descricao" className="form-label">Descrição</label>
                        <input type="texto" className="form-control" id="descricao" placeholder="Poco uso" required value={descricao} onChange={(event) => setDescricao(event.target.value)} /> 
                    </div>
                    <div className="mb-3">
                        <label htmlFor="marca" className="form-label">Marca</label>
                        <input type="texto" className="form-control" id="marca" placeholder="Jeep" required value={marca} onChange={(event) => setMarca(event.target.value)} /> 
                    </div>
                    <div className="mb-3">
                        <label htmlFor="modelo" className="form-label">Modelo</label>
                        <input type="texto" className="form-control" id="modelo" placeholder="Corolla XLi 1.6 16V 110cv Mec." required value={modelo} onChange={(event) => setModelo(event.target.value)} /> 
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cor" className="form-label">Cor</label>
                        <input type="texto" className="form-control" id="cor" placeholder="Vermelho" required value={cor} onChange={(event) => setCor(event.target.value)} /> 
                    </div>
                    <div className="mb-3">
                        <label htmlFor="ano" className="form-label">Ano</label>
                        <input type="number" className="form-control" id="ano" placeholder="2014" required value={ano} onChange={(event) => setAno(event.target.value)} /> 
                    </div>
                    <div className="mb-3">
                        <label htmlFor="combustivel" className="form-label">Combustivel</label>
                        <input type="texto" className="form-control" id="combustivel" placeholder="Gasolina" required value={combustivel} onChange={(event) => setCombustivel(event.target.value)} /> 
                    </div>
                    <div className="mb-3">
                        <label htmlFor="transmissao" className="form-label">Transmissão</label>
                        <input type="texto" className="form-control" id="transmissao" placeholder="Automático" required value={transmissao} onChange={(event) => setTransmissao(event.target.value)} /> 
                    </div>
                    <div className="mb-3">
                        <label htmlFor="preco" className="form-label">Preço</label>
                        <input type="number" className="form-control" id="preco" placeholder="1000.12" required value={preco} onChange={(event) => setPreco(event.target.value)} /> 
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cadastradoPor" className="form-label">Cadastrado por:</label>
                        <input type="texto" className="form-control" id="cadastradoPor" placeholder="" required value={cadastradoPor} onChange={(event) => setCadastradoPor(event.target.value)} /> 
                    </div>
                </div>
                <hr />
                <div className={CadastroCss.containerButtons}>
                    <button type="submit" className={CadastroCss.buttonRegistrar}>Cadastrar</button>
                    <Link to="/" className={CadastroCss.buttonCancelar}>Cancelar</Link>
                </div> 
            </form>
        </div>
    )
}

export default Cadastro