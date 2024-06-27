import React, { useState } from 'react'
import "../Formularios/Formulariodelete.css";
import { Link } from 'react-router-dom';
const CrearSerAloja = () => {
  const [ nombre, setIdAloja] = useState("");
  const [ apellido, setIdServi] = useState("");
  
  const enviar = async (e) => {
    e.preventDefault();
    const json = {
        idAlojamiento:nombre,
        idServicio:apellido
    };
    
    try{
      const respose = await fetch('http://localhost:3001/alojamientosServicios/createAlojamientoServicio',{
        method:'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(json),
      });
      if(respose.ok) {
        alert('Relacion Creada Exitosamente');
      }
      else{
        console.error('Error');
        alert('Error al crear Relacion');
      }
      }catch (error){
        console.error('Error',error);
        alert('Error al establecer Conexion');
      }
  }
  return (
    <div id='form1' className='form-container'>
      <form onSubmit={enviar}>
        <div>
          <label htmlFor='nombre'> Id del Alojamiento:</label>
          <input
            type='text'
            id='nombre'
            value={nombre}
            onChange={(e) => setIdAloja(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='nombre'> Id del Servicio:</label>
          <input
            type='text'
            id='apellido'
            value={apellido}
            onChange={(e) => setIdServi(e.target.value)}
          />
        </div>
        <button type='submit'>Agregar</button>
        <Link to="/Gestion"><button>Volver</button></Link>
      </form>
    </div>
  )
};
export default CrearSerAloja;