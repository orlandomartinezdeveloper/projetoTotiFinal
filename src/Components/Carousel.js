import React from 'react';
import Slide1 from '../Img/slide-projeto-final-1.jpg';
import Slide2 from '../Img/slide-projeto-final-2.jpg';
import Slide3 from '../Img/slide-projeto-final-3.jpg';
import CarouselCSS from '../CSS/Carousel.module.css';
const Carrousel = () => {

    return (
        <div>
            <div className="h-10">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={Slide1} className={"d-block w-100 " + CarouselCSS.images} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={Slide2} className={"d-block w-100 " + CarouselCSS.images} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={Slide3} className={"d-block w-100 " + CarouselCSS.images} alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>)
}

export default Carrousel;