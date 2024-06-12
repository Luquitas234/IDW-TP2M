// import logo from './logo.svg';
import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route , Routes , Link} from 'react-router-dom';
import imagenes from './assets/imagenes';
import Footer from './Footer';
import Carousel from './Components/Carousel';
import Carousel2 from './Components/Carousel2';
import Carousel3 from './Components/Carousel3';
import Agregar from "./Formularios/AddAlojamientotipo";
import Gethttp from "./Formularios/Formularioget";
import Eliminar from "./Formularios/Formulariodelete";


function Home() {
  return (
    <div>
      <section className="home-container">
        <h1>Bienvenido Alojamienento en Linea </h1>
      </section>
      <section>
        <div>
          <Carousel/>
          <Carousel2/>
          <Carousel3/>
        </div>
      </section>
    </div>
  );
}


function App() {
  return (
    <Router>
      <div className='App'>
        <header>
          <div className='navbar'>
            <div className='logo'>RYB</div>
            <div className='search-bar'>
              <input type='text' placeholder='Buscar alojamientos...'></input>
            </div>
            <div className='user-profile'>
              <img src={imagenes.img4} alt='Perfil'/>
              <div className='menu-icon'>&#9776;
                <nav className='dropdown-menu'>
                  <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/Formulario">Admin</Link></li>
                    <li><Link to="/Contacto">Contactos</Link></li>
                    <li><Link to="/Datos">Lista</Link></li>
                    <li><Link to="/Quitar">Eliminar</Link></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Formulario' element={<Agregar/>}></Route>
            <Route path='/Contacto' element={<Footer/>}></Route>
            <Route path='/Datos' element={<Gethttp/>}></Route>
            <Route path='/Quitar' element={<Eliminar/>}></Route>
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}




export default App;