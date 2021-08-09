import React, { useEffect, useState } from 'react';
import Card from './Card';
import CarrosTPCSS from '../CSS/CarrosTP.module.css';
import ReactPaginate from 'react-paginate';
import Carregando from './Carregando';
const CarrosTp = (props) => {

    const busca = props.busca;
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showEmpty, setShowEmpty] = useState(false);
    const [showError, setShowError] = useState('');


    const getCarros = () => {
        setLoading(true);
        setCars([]);
        setShowEmpty(false);
        const urlBase = 'https://carfinder-toti.herokuapp.com/cars';
        const endpoint = `${urlBase}?q=${busca}`;
        fetch(endpoint, {
            method: 'GET'
        })
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                setShowError('');
                setLoading(false);
                setCars(data);
                setShowEmpty(!data.length);
            })
            .catch((error) => {
                setShowError(`${error}`);
                setLoading(false);
                setShowEmpty(false);
            })

    }
    useEffect(getCarros, [busca]);
    const [pageNumber, setPageNumber] = useState(0);
    const carsPerPage = 8;
    const carsVisited = pageNumber * carsPerPage;
    const carSlice = cars.slice(carsVisited, carsVisited + carsPerPage);
    const pageCount = Math.ceil(cars.length / carsPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

    const Map = carSlice.map(item => (<Card item={item} key={item._id} />));

    const messageEmpty = (
        <h1 
            style={{ textAlign: 'center', padding: "10px" }}>
                Sua busca não tem coincidências
        </h1>
    )

    const messageError = (
        <h1 
            style={{ textAlign: 'center', padding: "10px" }}>
                {showError}
        </h1>
    )

    return (

        <div className={CarrosTPCSS.conteudo}>
            {loading && <Carregando />}
            {showEmpty && messageEmpty}
            {showError && messageError}
            <div className={CarrosTPCSS.preCards}>
                {Map}
            </div>
            <div className={CarrosTPCSS.barraNavega}>
                <ReactPaginate
                    previousLabel={<i className={" fas fa-arrow-left " + CarrosTPCSS.arrow}></i>}
                    nextLabel={<i className={"fas fa-arrow-right " + CarrosTPCSS.arrow}></i>}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={CarrosTPCSS.paginacaoButtons}
                    previousLinkClassName={CarrosTPCSS.previousNext}
                    nextLinkClassName={CarrosTPCSS.previousNext}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={CarrosTPCSS.paginacaoActive}
                />
            </div>
        </div >
    )

}

export default CarrosTp;