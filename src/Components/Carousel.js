import React from "react";
import "./Carousel.css"
import imagenes from "../assets/imagenes"

const Carousel = () => {
    return (
        <div>
            <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={imagenes.img7} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={imagenes.img7} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={imagenes.img7} className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden"> Atras</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel;