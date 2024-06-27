import React, { useState } from 'react';
import axios from 'axios';
import "../assets/imagenes";
const CrearImagen = () => {
  const [idAlojamiento, setIdAlojamiento] = useState('');
  const rutaImagen = './carousell1.jpeg'; 

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/imagen/createImagen', {
        idAlojamiento,
        RutaArchivo:rutaImagen,
      });
      console.log(response.data);
      alert('Imagen creada correctamente!');
    } catch (error) {
      console.error(error);
      alert('Error al crear la imagen');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        ID del alojamiento:
        <input type="number" value={idAlojamiento} onChange={(e) => setIdAlojamiento(e.target.value)} />
      </label>
      <button type="submit">Crear imagen</button>
    </form>
  );
};

export default CrearImagen;