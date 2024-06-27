import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const DataModificationForm = () => {
  const [id, setId] = useState('');
  const [data, setData] = useState(null); // Aqui se almacenan los datos cargados.
  const [preciopordia , setPrecioPorDia] = useState('');
  const [estado , setEstado] = useState('');
  const [titulo , setTitulo] = useState('');

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handlePrecioChange = (e) => {
    setPrecioPorDia(e.target.value);
  };
  const handleEstado = (e) => {
    setEstado(e.target.value);
  };
  const handleTitulo = (e) => {
    setTitulo(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Realiza la solicitud a la API para obtener los datos del ID ingresado
      const response = await fetch(`http://localhost:3001/alojamiento/getAlojamiento/${id}`);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };

  const handleSaveChange = async () => {
    try {
        // Envia los datos modificados a la API.
        await fetch(`http://localhost:3001/alojamiento/putAlojamiento/${id}`,{
            method:'PUT',
            headers:{ 
                'Content-Type':'application/json',

            },
            body: JSON.stringify({PrecioPorDia:preciopordia , Estado:estado ,Titulo:titulo}),
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
          <p>Estado: {data.Titulo}</p>
          <p>Titulo: {data.PrecioPorDia}</p>
          <p>Precio Por Dia: {data.Estado}</p>
        </div>
      )}
      <label>Modifica el Titulo</label>
      <input
        type='text'
        value={titulo}
        onChange={handleTitulo}
      />

      <label>Modifica el Precio:</label>
      <input
        type='text'
        value={preciopordia}
        onChange={handlePrecioChange}
      />

      <label>Modifica el Estado: </label>
      <input
        type='text'
        value={estado}
        onChange={handleEstado}
      />

      <button onClick={handleSaveChange}>Guardar Cambios</button>
      <Link to="/Gestion"><button>Volver</button></Link>
    </div>
  );
};

export default DataModificationForm;

