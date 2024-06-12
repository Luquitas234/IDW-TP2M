import React from "react";
import "./App.css";
import imagenes from "./assets/imagenes";
import { Link } from "react-router-dom";


function Footer (){
    return(
        <footer className="Pie-pagina" id="Mi-pie">
            <div className="grupo-1">
                <div className="box">
                    <figure>
                        <Link href="#">
                            <img src={imagenes.img13} alt="Logopagina"/>
                        </Link>
                    </figure>
                </div>
                <div className="box">
                    <h2>SOBRE NOSOTROS</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, ipsam!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id.</p>
                </div>
                <div className="box">
                    <h2>SEGUINOS</h2>
                    <div className="red-social">
                        <Link href="#" className="fa fa-facebook" ></Link>
                        <Link href="#"className="fa fa-instagram"></Link>
                        <Link href="#"className="fa fa-twitter"></Link>
                        <Link href="#"className="fa fa-youtube"></Link>
                    </div>
                </div>
                <div className="box">
                    <h2>CONTACTOS</h2>
                    <div className="red-social">
                        <Link href="#" className="fa-solid fa-phone"></Link>
                        <Link href="#" className="fa-solid fa-envelope"></Link>  
                    </div>
                </div>
            </div>
            <div className="grupo-2">
                <small>&copy; 2024 <b>LYB</b> -Todos los Derechos Reservados. </small>
            </div>
        </footer>
    );
}
export default Footer;


