// NavigationBar.js
import axios from 'axios';
import {Link} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';



const NavigationBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredAlojamientos, setFilteredAlojamientos] = useState([]);
  const [alojamientos, setAlojamientos] = useState([]);
  const [tipoAlojamiento, setTipoAlojamiento] = useState('');
  const [estado, setEstado] = useState('');
  const [precioMin, setPrecioMin] = useState('');
  const [precioMax, setPrecioMax] = useState('');
  

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    if (query === '') {
        setFilteredAlojamientos([]);
    } else {
        const filteredData = alojamientos.filter((alojamiento) => {
          return (
            alojamiento.Estado.toLowerCase().includes(query.toLowerCase()) &&
            (tipoAlojamiento === '' || alojamiento.idAlojamiento === tipoAlojamiento) &&
            (estado === '' || alojamiento.Estado === estado) &&
            (precioMin === '' || alojamiento.PrecioPorDia >= precioMin) &&
            (precioMax === '' || alojamiento.PrecioPorDia <= precioMax)
          );
        });
        console.log(filteredData);
        setFilteredAlojamientos(filteredData);
      }
    };

  const handleTipoAlojamientoChange = (event) => {
    setTipoAlojamiento(event.target.value);
  };

  const handleEstadoChange = (event) => {
    const selectedEstado = event.target.value;
    setEstado(selectedEstado);
  
    // Filtra los alojamientos según el estado seleccionado
    const filteredData = alojamientos.filter((alojamiento) => {
      return alojamiento.Estado.toLowerCase() === selectedEstado.toLowerCase();
    });
    setFilteredAlojamientos(filteredData);
  };

  const handlePrecioMinChange = (event) => {
    setPrecioMin(event.target.value);
  };

  const handlePrecioMaxChange = (event) => {
    setPrecioMax(event.target.value);
  };
  

  useEffect(() => {
    const fetchAlojamientos = async () => {
        try {
          const responseAlojamientos = await axios.get('http://localhost:3001/alojamiento/getAlojamientos');
          const responseServicios = await axios.get('http://localhost:3001/servicio/getAllServicios');
          const responseImagenes = await axios.get('http://localhost:3001/imagen/getAllImagenes');
  
          const alojamientosData = responseAlojamientos.data;
          const serviciosData = responseServicios.data;
          const imagenesData = responseImagenes.data;
  
          const combinedData = alojamientosData.map((alojamiento) => {
          const servicio = serviciosData.find((servicio) => servicio.idAlojamiento === alojamiento.idAlojamiento);
          const imagen = imagenesData.find((imagen) => imagen.idAlojamiento === alojamiento.idAlojamiento);
  
            return {
              ...alojamiento,
              servicio: servicio ? servicio.Nombre : '',
              imagen: imagen ? imagen.RutaArchivo : '',
            };
          });
  
          setAlojamientos(combinedData);
          setFilteredAlojamientos(combinedData); // Actualizar filteredAlojamientos con los datos iniciales
        } catch (error) {
          console.error(error);
        }
      };
  
    fetchAlojamientos();
  }, []);

  return (
    <header>
      <div className="navbar">
        <div className="logo">RYB</div>
        <div className="search-bar">
            <input
                type="text"
                placeholder="Buscar alojamientos..."
                value={searchQuery}
                onChange={handleSearch}
            />
            <select value={tipoAlojamiento} onChange={handleTipoAlojamientoChange}>
                <option value="">Buscar </option>
                <option value="hotel">Hotel</option>
                <option value="apartamento">Apartamento</option>
                <option value="hostal">Hostal</option>
            </select>
            <select value={estado} onChange={handleEstadoChange}>
                <option value="">Buscar</option>
                <option value="reservado">Reservado</option>
                <option value="disponible">Disponible</option>
            </select>
            <input type='number' placeholder='Precio mínimo...'
                value={precioMin}
                onChange={handlePrecioMinChange}
            />
            <input type='number' placeholder='Precio máximo...'
                value={precioMax}
                onChange={handlePrecioMaxChange}
            />
        </div>
        <div className="user-profile">
           <div className='menu-icon'>&#9776;
                <nav className='dropdown-menu'>
                  <ul>
                      <li><Link to="/">Inicio</Link></li>
                      <li><Link to="/Login">Admin</Link></li>
                      <li><Link to="/Contacto">Contactos</Link></li>
                  </ul>
                </nav>
            </div>
        </div>
      </div>
            <Carousel>
             {filteredAlojamientos.map((alojamiento) => (
                <div key={alojamiento.idAlojamiento}>
                    <img src={alojamiento.imagen} alt={alojamiento.idImagen} />
                    <p>{alojamiento.PrecioPorDia}</p>
                    <p>{alojamiento.Titulo}</p>
                    <p>{alojamiento.Descripcion}</p>
                    <p>{alojamiento.Estado}</p>
                </div>
              ))}
            </Carousel> 
    </header>
  );
};

export default NavigationBar;