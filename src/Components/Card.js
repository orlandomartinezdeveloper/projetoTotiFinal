import CarrosTPCSS from '../CSS/CarrosTP.module.css';

function Card ({ item }) {
    const { urlFotoPrincipal, marca, modelo, preco, cidade } = item;
    let imagesCar = [];
    imagesCar.push(urlFotoPrincipal);
    return (
        < div className={CarrosTPCSS.card} >
            <div className={CarrosTPCSS.containerImg}><img src={imagesCar} alt="Imagem" className={CarrosTPCSS.img} /></div>
            <div className={CarrosTPCSS.dados}>
                <div className={CarrosTPCSS.marca}>{marca}</div>
                <div className={CarrosTPCSS.modelo}>{modelo}</div>
                <div className={CarrosTPCSS.preco}>R$ {preco}</div>
                <div className={CarrosTPCSS.modelo}>{cidade}</div>
                <div className={CarrosTPCSS.preButton}><button className={CarrosTPCSS.button}><i className="fa fa-eye"></i></button></div>
            </div>
        </div >
)
}

export default Card;