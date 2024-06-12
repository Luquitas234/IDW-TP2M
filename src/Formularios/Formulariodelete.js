import React, { useState } from 'react';
import axios from 'axios';
import './Formulariodelete';

const DeleteForm = () => {
  const [id, setId] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.delete(`http://localhost:3001/tiposAlojamiento/deleteTipoAlojamiento/${id}`);
      console.log(response.data);
      alert('Dato eliminado exitosamente');
    } catch (error) {
      console.error(error);
      alert('Hubo un error al eliminar el dato');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        ID del dato a eliminar:
        <input type="text" value={id} onChange={(event) => setId(event.target.value)}  />
      </label>
      <button type="submit">Eliminar</button>
    </form>
  );
};

export default DeleteForm;


