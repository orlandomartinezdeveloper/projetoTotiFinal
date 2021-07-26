import React, { Fragment } from 'react';
import MainCSS from '../CSS/Main.module.css';
import Carousel from '../Components/Carousel.js';
import Control from '../Components/Control.js';
import CarrosTP from './CarrosTP.js';
const Main = () => {
    return (
        <Fragment>
            <div className={MainCSS.geral}>
                <Carousel />
                <Control />
                <CarrosTP />
            </div>
        </Fragment>
    )
}
export default Main;
