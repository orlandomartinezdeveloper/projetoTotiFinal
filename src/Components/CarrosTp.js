import React from 'react';
import CarrosTPCSS from '../CSS/CarrosTP.module.css';
import CarrosJSON from './CarrosJSON';
const CarrosTp = () => {

    return (
        <div className={CarrosTPCSS.geral}>
            <div className={CarrosTPCSS.titulo}>Carros</div>
            <div className={CarrosTPCSS.conteudo}>
                {
                    CarrosJSON.map((item) =>

                        <div className={CarrosTPCSS.card}>
                            <div className={CarrosTPCSS.containerImg}><img src={item.img} alt="Imagem" className={CarrosTPCSS.img} /></div>
                            <div className={CarrosTPCSS.dados}>
                                <div className={CarrosTPCSS.marca}>{item.marca}</div>
                                <div className={CarrosTPCSS.modelo}>{item.modelo}</div>
                                <div className={CarrosTPCSS.preco}>R$ {item.preco}</div>
                                <div className={CarrosTPCSS.modelo}>{item.cidade}</div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default CarrosTp;