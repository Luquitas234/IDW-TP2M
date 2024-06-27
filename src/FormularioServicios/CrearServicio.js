import React, { useState } from 'react'
import "../Formularios/Formulariodelete.css";

const CrearServicio = () => {
  const [ nombre, setNombre] = useState("");
  
  const enviar = async (e) => {
    e.preventDefault();
    const json = {
      Nombre:nombre
    };
    
    try{
      const respose = await fetch('http://localhost:3001/servicio/createServicio',{
        method:'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(json),
      });
      if(respose.ok) {
        alert('Servicio Creado Exitosamente');
      }
      else{
        console.error('Error');
        alert('Error al crear el Servicio');
      }
      }catch (error){
        console.error('Error',error);
        alert('Error al establecer el Conexion');
      }
  }
  return (
    <div id='form1' className='form-container'>
      <form onSubmit={enviar}>
        <div>
          <label htmlFor='nombre'> Nombre:</label>
          <input
            type='text'
            id='nombre'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <button type='submit'>Agregar</button>
      </form>
    </div>
  )
};
export default CrearServicio;