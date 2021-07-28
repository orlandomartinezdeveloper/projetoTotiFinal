import React, { useEffect, useState } from 'react';
import Card from './Card';
import CarrosTPCSS from '../CSS/CarrosTP.module.css';
const CarrosTp = () => {
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
            <div className={CarrosTPCSS.preCards}>
                {cars.map(item => (<Card item={item} key={item._id} />))}
            </div>
        </div >
    )
}

export default CarrosTp;