import React from 'react';
import CachorrosTPCSS from '../CSS/CachorrosTP.module.css';
import CachorrosJSON from '../Components/CachorrosJSON';
const CachorrosTp = () => {

    return (
        <div className={CachorrosTPCSS.geral}>
            <div className={CachorrosTPCSS.titulo}>Cachorros</div>
            <div className={CachorrosTPCSS.conteudo}>
                {
                    CachorrosJSON.map((item) =>

                        <div className={CachorrosTPCSS.card}>
                            <div className={CachorrosTPCSS.containerImg}><img src={item.img} alt="Imagem" className={CachorrosTPCSS.img} /></div>
                            <div className={CachorrosTPCSS.dados}>
                                <div className={CachorrosTPCSS.nome}>{item.nome}</div>
                                <div className={CachorrosTPCSS.cidade}>{item.cidade}</div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default CachorrosTp;