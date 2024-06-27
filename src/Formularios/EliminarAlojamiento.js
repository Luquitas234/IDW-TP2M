import React, { useState } from 'react';
import axios from 'axios';
import './Formulariodelete.css';
import { Link } from 'react-router-dom';
const DeleteForm = () => {
  const [id, setId] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.delete(`http://localhost:3001/alojamiento/deleteAlojamiento/${id}`);
      console.log(response.data);
      alert('Dato eliminado exitosamente');
    } catch (error) {
      console.error(error);
      alert('Hubo un error al eliminar el dato');
    }
  };

  return (
    <div id='form2' className='form'>
      <form  onSubmit={handleSubmit}>
        <label>
          ID del Alojamiento a eliminar:
          <input type="text" value={id} onChange={(event) => setId(event.target.value)}  />
        </label>
        <button type="submit">Eliminar</button>
        <Link to="/Gestion"><button>Volver</button></Link>
      </form>
    </div>
  );
};

export default DeleteForm;
