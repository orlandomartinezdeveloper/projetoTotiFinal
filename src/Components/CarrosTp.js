import React, { useEffect, useState } from 'react';
import Card from './Card';
import CarrosTPCSS from '../CSS/CarrosTP.module.css';
import ReactPaginate from 'react-paginate';
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
            <div className={CarrosTPCSS.preCards}>
                {Map}
                <div className={CarrosTPCSS.barraNavega}>
                    <ReactPaginate
                        previousLabel={<i class="fas fa-arrow-left"></i>}
                        nextLabel={<i class="fas fa-arrow-right"></i>}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={CarrosTPCSS.paginacaoButtons}
                        previousLinkClassName={CarrosTPCSS.previousNext}
                        nextLinkClassName={CarrosTPCSS.previousNext}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={CarrosTPCSS.paginacaoActive}
                    />
                </div>
            </div>

        </div >
    )
}

export default CarrosTp;