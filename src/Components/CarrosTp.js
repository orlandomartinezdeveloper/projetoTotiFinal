import React, { useEffect, useState } from 'react';
import CarrosTPCSS from '../CSS/CarrosTP.module.css';
import CarregandoFoto from '../Img/carregandoFoto.jpg';
const CarrosTP = () => {
    const [cars, setCars] = useState([])
    useEffect(() => {
        getCarros()
    }, []);

    const getCarros = () => {
        fetch('https://carfinder-toti.herokuapp.com/cars', {
            method: 'GET'
        })
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                setCars(data)
            })
    }

    return (
        <div className={CarrosTPCSS.conteudo}>
            {cars.map((item) => {
                let imagesCar = [];
                imagesCar.push(item.urlFotoPrincipal)

                return (
                    < div className={CarrosTPCSS.card} >
                        <div className={CarrosTPCSS.containerImg}><img src={imagesCar} alt="Imagem" className={CarrosTPCSS.img} /></div>
                        <div className={CarrosTPCSS.dados}>
                            <div className={CarrosTPCSS.marca}>{item.marca}</div>
                            <div className={CarrosTPCSS.modelo}>{item.modelo}</div>
                            <div className={CarrosTPCSS.preco}>R$ {item.preco}</div>
                            <div className={CarrosTPCSS.modelo}>{item.cidade}</div>
                        </div>
                    </div >
                )
            })}
        </div >
    )
}

export default CarrosTP;