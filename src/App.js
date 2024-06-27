// import logo from './logo.svg';
import React from 'react';
import './App.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {BrowserRouter as Router, Route , Routes , Link} from 'react-router-dom';
import Footer from './Footer';
// import Carousel from './Components/Carousel';
// import Carousel2 from './Components/Carousel2';
// import Carousel3 from './Components/Carousel3';
import NavBar from "./FuncionNavBar/NavBar.js";
import Agregar from "./Formularios/AddAlojamientotipo";
import Gethttp from "./Formularios/Formularioget";
import Eliminar from "./Formularios/Formulariodelete";
import Login from "./Login/LoginForm";
import Prueva from "./Components/Prueva.js";
import Crear from "./Formularios/CrearAlojamiento.js";
import EliminarAloja from "./Formularios/EliminarAlojamiento.js";
import Prueva2 from "./Components/prueva2.js";
import ServicioCrear from "./FormularioServicios/CrearServicio.js";
import CargaModificacion from "./FormularioServicios/Cargar-EditarServicios.js";
import EliminarServi from "./FormularioServicios/EliminarServi.js";
import GetServicios from './FormularioServicios/GetServicios.js';
import CrearServicio from "./Servicio-Alojamiento/CrearSerAloja.js";
import EditarServiAloja from "./Servicio-Alojamiento/SerAlojaEdit-Carga.js";
import EliminarSerAloja from "./Servicio-Alojamiento/EliminarSerAloja.js";
import MostrarSerAloja from"./Servicio-Alojamiento/GetIDTodos.js";
import CrearImage from "./FormulariosImagenes/CrearImagen.js";
import EditarImagen from "./FormulariosImagenes/EditarImagenes.js";
import EliminarImagen from "./FormulariosImagenes/EliminarImagen.js";
import GetImagenes from "./FormulariosImagenes/GetImagenes.js"


function Gestion() {
  return (
    <div>
        <section>
            <h1>Bienvenido Al Sistema de Gestion de Alojamientos</h1>
        </section>
        
            <div>
              <Crear/>
            </div>
            <div className='Btn-Tipoalojamiento'>
              <label>Seccion de Crear Tipos Alojamientos</label>
                <Link to="/Formulario"><button id='btn btn-success btn-block'> Crear Tipo </button></Link>
                <Link to="/Quitar"><button id='btn btn-success btn-block'> Eliminar un Tipo Alojamiento </button></Link>
                <Link to="/Datos"><button id='btn btn-success btn-block'> Mostrar Tipos Alojamientos </button></Link>
            </div>
            <div className='Btn-Alojamientos'>
            <label>Seccion de Crear  Alojamientos</label>
                <Link to="/Prueva"><button id='btn btn-success btn-block'>  Alojamientos </button></Link>
                <Link to="/EliminarAlojamiento"><button id='btn btn-success btn-block'> Eliminar </button></Link>
                <Link to="/ModificarAlojamiento"><button id='btn btn-success btn-block'> Modificar </button></Link>
            </div>
            <div className='Btn-Servicios'>
            <label>Seccion de Crear Servicios</label>
                <Link to="/AgregarServicio"><button id='btn btn-success btn-block'> Crear Servicio </button></Link>
                <Link to="/BusYEdit"><button id='btn btn-success btn-block'> Buscar e Modificar Servicio </button></Link>
                <Link to="/EliminarServicio"><button id='btn btn-success btn-block'> Eliminar Servicio </button></Link>
                <Link to="/DatosServicios"><button id='btn btn-success btn-block'>  Servicios </button></Link>
            </div>
            <div className='Btn-ServicioRelacion'>
            <label>Seccion de Crear Relaciones</label>
                <Link to="/CrearRealacion"><button id='btn btn-success btn-block'>  Crear Relacion </button></Link>
                <Link to="/ModificarRealacion"><button id='btn btn-success btn-block'>  Modificar Relacion </button></Link>
                <Link to="/EliminarRealacion"><button id='btn btn-success btn-block'>  Eliminar Relacion </button></Link>
                <Link to="/MostrarRealacion"><button id='btn btn-success btn-block'>  Mostrar Relaciones </button></Link>
            </div>
            <div className='Btn-CrearImagine'>
            <label>Seccion de Crear Imagen</label>
                <Link to="/CrearImagen"><button id='btn btn-success btn-block'> Crear Nueva Imagen </button></Link>
                <Link to="/EliminarImagen"><button id='btn btn-success btn-block'> Eliminar Imagen </button></Link>
                <Link to="/EditarImagen"><button id='btn btn-success btn-block'> Editar Imagenes </button></Link>
                <Link to="/MostrarImagen"><button id='btn btn-success btn-block'> Mostrar Imagenes </button></Link>
            </div>
            
        
    </div>
  );
}

function Home() {
  return (
    <div>
      <section className="home-container">
        <h1>Bienvenido Alojamienento en Linea </h1>
      </section>
      <section>
        <div> 
          <NavBar/>
        </div>
      </section>
    </div>
  );
}


function App() {

  return (
    <Router>
      <div className='App'>
        <main>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Formulario' element={<Agregar/>}></Route>
            <Route path='/Contacto' element={<Footer/>}></Route>  
            <Route path='/Datos' element={<Gethttp/>}></Route>
            <Route path='/Quitar' element={<Eliminar/>}></Route>
            <Route path='/Login' element={<Login/>}></Route>
            <Route path='/Gestion' element={<Gestion/>}></Route>
            <Route path='/Prueva' element={<Prueva/>}></Route>
            <Route path='/CreacionAlojamiento' element={<Crear/>}></Route>
            <Route path='/EliminarAlojamiento' element={<EliminarAloja/>}></Route>
            <Route path='/ModificarAlojamiento' element={<Prueva2/>}></Route>
            <Route path='/AgregarServicio' element={<ServicioCrear/>}></Route>
            <Route path='/BusYEdit' element={<CargaModificacion/>}></Route>
            <Route path='/EliminarServicio' element={<EliminarServi/>}></Route>
            <Route path='/DatosServicios' element={<GetServicios/>}></Route>
            <Route path='/CrearRealacion' element={<CrearServicio/>}></Route>
            <Route path='/ModificarRealacion' element={<EditarServiAloja/>}></Route>
            <Route path='/EliminarRealacion' element={<EliminarSerAloja/>}></Route>
            <Route path='/MostrarRealacion' element={<MostrarSerAloja/>}></Route>
            <Route path='/CrearImagen' element={<CrearImage/>}></Route>
            <Route path='/EliminarImagen' element={<EliminarImagen/>}></Route>
            <Route path='/EditarImagen' element={<EditarImagen/>}></Route>
            <Route path='/MostrarImagen' element={<GetImagenes/>}></Route>
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;