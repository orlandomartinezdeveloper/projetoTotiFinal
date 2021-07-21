import React, { Fragment } from 'react';
import MainCSS from '../CSS/Main.module.css';
import Carousel from '../Components/Carousel.js';
import Control from '../Components/Control.js';
import CachorrosTp from '../Components/CachorrosTp.js';
const Main = () => {
    return (
        <Fragment>
            <div className={MainCSS.geral}>
                <Carousel />
                <Control />
                <CachorrosTp />
            </div>
        </Fragment>
    )
}
export default Main;
