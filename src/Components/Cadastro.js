import React from 'react';
import CadastroCss from '../CSS/Cadastro.module.css'
const Cadastro = () => {
    return (
        <div className={CadastroCss.container}>
            <div className={CadastroCss.titulo}>CADASTRO DE VEICULO</div>
            <form action="">
                <div className={CadastroCss.containerForm}>
                    <div className="mb-3">
                        <label for="cadastradoPor" className="form-label">Cadastrado por:</label>
                        <input type="texto" className="form-control" id="cadastradoPor" placeholder="" required/> 
                    </div>
                    <div className="mb-3">
                        <label for="urlFotoPrincipal" className="form-label">Foto</label>
                        <input type="url" className="form-control" id="urlFotoPrincipal" placeholder="https://" required /> 
                    </div>
                    <div className="mb-3">
                        <label for="cidade" className="form-label">Cidade</label>
                        <input type="texto" className="form-control" id="cidade" placeholder="" required /> 
                    </div>
                    <div className="mb-3">
                        <label for="uf" className="form-label">UF</label>
                        <input type="texto" className="form-control" id="uf" placeholder="" required /> 
                    </div>
                    <div className="mb-3">
                        <label for="contato" className="form-label">Contato</label>
                        <input type="texto" className="form-control" id="contato" placeholder="(11) 11111 1111" required /> 
                    </div>
                    <div className="mb-3">
                        <label for="descricao" className="form-label">descricao</label>
                        <input type="texto" className="form-control" id="descricao" placeholder="Poco uso" required /> 
                    </div>
                    <div className="mb-3">
                        <label for="marca" className="form-label">Marca</label>
                        <input type="texto" className="form-control" id="marca" placeholder="Jeep" required /> 
                    </div>
                    <div className="mb-3">
                        <label for="modelo" className="form-label">Modelo</label>
                        <input type="texto" className="form-control" id="modelo" placeholder="Corolla XLi 1.6 16V 110cv Mec." required /> 
                    </div>
                    <div className="mb-3">
                        <label for="cor" className="form-label">Cor</label>
                        <input type="texto" className="form-control" id="cor" placeholder="Vermelho" required /> 
                    </div>
                    <div className="mb-3">
                        <label for="ano" className="form-label">Ano</label>
                        <input type="number" className="form-control" id="ano" placeholder="2014" required /> 
                    </div>
                    <div className="mb-3">
                        <label for="combustivel" className="form-label">Combustibel</label>
                        <input type="texto" className="form-control" id="combustivel" placeholder="Gasolina" required /> 
                    </div>
                    <div className="mb-3">
                        <label for="transmissao" className="form-label">Transmissao</label>
                        <input type="texto" className="form-control" id="transmissao" placeholder="Automático" required /> 
                    </div>
                    <div className="mb-3">
                        <label for="preco" className="form-label">Preco</label>
                        <input type="number" className="form-control" id="preco" placeholder="1000.12" required  /> 
                    </div>
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}

export default Cadastro