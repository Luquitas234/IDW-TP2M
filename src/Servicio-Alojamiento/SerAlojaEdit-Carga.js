import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const CargarEditarServicios = () => {
  const [id, setId] = useState('');
  const [data, setData] = useState(null); // Aqui se almacenan los datos cargados.
  
  const [idservi , setIdServi] = useState('');
  const [idaloja , setIdAloja] = useState('');
 

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handleIdAloja = (e) => {
    setIdAloja(e.target.value);
  };
  const handleIdServi = (e) => {
    setIdServi(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Realiza la solicitud a la API para obtener los datos del ID ingresado
      const response = await fetch(`http://localhost:3001/alojamientosServicios/getAlojamientoServicio/${id}`);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };

  const handleSaveChange = async () => {
    try {
        // Envia los datos modificados a la API.
        await fetch(`http://localhost:3001/alojamientosServicios/updateAlojamientoServicio/${id}`,{
            method:'PUT',
            headers:{ 
                'Content-Type':'application/json',

            },
            body: JSON.stringify({idAlojamiento:idaloja , idServicio:idservi }),
        });
        console.log('Datos Modificados Exitosamente');
        }catch (error){
        console.error('Error al Modificar los Datos',error);
    }
    };

  return (
    <div>
      <h2>Modificar Datos</h2>
      <form onSubmit={handleSubmit}>
        <label>Ingresa el ID:</label>
        <input
          type="text"
          value={id}
          onChange={handleIdChange}
        />
        <button type="submit">Cargar datos</button>
      </form>

      {data && (
        <div>
          {/* Muestra los datos cargados aquí */}
          <p>ID del Alojamiento: {data.idAlojamiento}</p>
          <p>ID del Servicio: {data.idServicio}</p>
        </div>
      )}
      <label>Modifica el ID del Alojamiento:</label>
      <input
        type='text'
        value={idaloja}
        onChange={handleIdAloja}
      />
      <label>Modifica el ID del Servicio:</label>
      <input
        type='text'
        value={idservi}
        onChange={handleIdServi}
      />
      <button onClick={handleSaveChange}>Guardar Cambios</button>
      <Link to="/Gestion"><button>Volver</button></Link>
    </div>
  );
};

export default CargarEditarServicios;