import React, { useState } from 'react'
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
    <div className='form-container'>
      <h1>Alta de Tipo Alojamiento</h1>
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
        <button type='submit'>Enviar</button>
      </form>
    </div>
  )
};
export default AddAlojamientotipo;




