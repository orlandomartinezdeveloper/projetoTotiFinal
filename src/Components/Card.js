import CarrosTPCSS from '../CSS/CarrosTP.module.css';
function Card({ item }) {
    const { _id, urlFotoPrincipal, marca, modelo, preco, cidade } = item;
    let imagesCar = [];
    imagesCar.push(urlFotoPrincipal);

    const formatMoney = (num) => {
        const number = new Intl.NumberFormat("pt-br").format(num)
        return number
    }
    return (
        < div className={"animate__animated animate__fadeInUp " + CarrosTPCSS.card} >
            <div className={CarrosTPCSS.containerImg}><img src={imagesCar} alt="Imagem" className={CarrosTPCSS.img} /></div>
            <div className={CarrosTPCSS.dados}>
                <div className={CarrosTPCSS.marca}>{marca}</div>
                <div className={CarrosTPCSS.modelo}>{modelo}</div>
                <div className={CarrosTPCSS.preco}>R$ {formatMoney(preco)}</div>
                <div className={CarrosTPCSS.modelo}>{cidade}</div>
                <div className={CarrosTPCSS.preButton}><a href={`/mostrarCar/${_id}`} className={CarrosTPCSS.button}>Ver <i className="fas fa-sign-out-alt"></i></a></div>
            </div>
        </div >
    )
}
export default Card;