import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./AddAlojamientotipo.css";

const AddAlojamientotipo = () => {
  const [ descripcion, setDescripcion] = useState("");
  
  const enviar = async (e) => {
    e.preventDefault();
    const json = {
      Descripcion:descripcion
    };
    
    try{
      const respose = await fetch('http://localhost:3001/tiposAlojamiento/createTipoAlojamiento',{
        method:'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(json),
      });
      if(respose.ok) {
        alert('se creo correctamente el Alojamiento tipo');
      }
      else{
        console.error('Error');
        alert('Error al crear el alojamiento tipo');
      }
      }catch (error){
        console.error('Error',error);
        alert('Error al establecer el servicio');
      }
  }
  return (
    <div id='form1' className='form-container'>
      <form onSubmit={enviar}>
        <div>
          <label htmlFor='descripcion'>Descripcion:</label>
          <input
            type='text'
            id='descripcion'
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>
        <button type='submit'>Agregar</button>
        <Link to="/Gestion"><button>Volver</button></Link>
      </form>
    </div>
  )
};
export default AddAlojamientotipo;




