import React, { Fragment } from 'react';
import MainCSS from '../CSS/Main.module.css';
import Carousel from '../Components/Carousel.js';
import Control from '../Components/Control.js';
const Main = (props) => {
    const handleSearch = props.handleSearch;
    return (
        <Fragment>
            <div className={MainCSS.geral}>
                <Carousel />
                <Control handleSearch={handleSearch} />
            </div>
        </Fragment>
    )
}
export default Main;
