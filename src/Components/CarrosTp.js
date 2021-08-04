import React, { useEffect, useState } from 'react';
import Card from './Card';
import CarrosTPCSS from '../CSS/CarrosTP.module.css';
import ReactPaginate from 'react-paginate';
import Carregando from './Carregando';
const CarrosTp = (props) => {

    const busca = props.busca;
    console.log('Buscando: <' + busca + '>')
    const [cars, setCars] = useState([])
    const [loading, setLoading] = useState(true)


    const getCarros = () => {
        console.log('Espere...')
        const urlBase = 'https://carfinder-toti.herokuapp.com/cars';
        const endpoint = `${urlBase}?q=${busca}`;
        fetch(endpoint, {
            method: 'GET'
        })
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                setLoading(false)
                console.log('Pronto!!')
                setCars(data)
            })
            .catch((error) => {
                return (
                    <div>Error</div>
                )
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

    return (

        <div className={CarrosTPCSS.conteudo}>
            {loading && <Carregando />}
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