import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const CargarEditarServicios = () => {
  const [id, setId] = useState('');
  const [data, setData] = useState(null); // Aqui se almacenan los datos cargados.
  
  const [nombre , setNombre] = useState('');
 

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handleNombre = (e) => {
    setNombre(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Realiza la solicitud a la API para obtener los datos del ID ingresado
      const response = await fetch(`http://localhost:3001/servicio/getServicio/${id}`);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };

  const handleSaveChange = async () => {
    try {
        // Envia los datos modificados a la API.
        await fetch(`http://localhost:3001/servicio/updateServicio/${id}`,{
            method:'PUT',
            headers:{ 
                'Content-Type':'application/json',

            },
            body: JSON.stringify({Nombre:nombre}),
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
          <p>Nombre: {data.Nombre}</p>
        </div>
      )}
      <label>Modifica el Nombre:</label>
      <input
        type='text'
        value={nombre}
        onChange={handleNombre}
      />
      <button onClick={handleSaveChange}>Guardar Cambios</button>
      <Link to="/Gestion"><button>Volver</button></Link>
    </div>
  );
};

export default CargarEditarServicios;