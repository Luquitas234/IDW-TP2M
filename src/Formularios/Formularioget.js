import React, { useState } from 'react';
import axios from 'axios';

const GetForm = () => {
  const [id, setId] = useState('');
  const [data, setData] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get("http://localhost:3001/tiposAlojamiento/getTiposAlojamiento");
      setData(response.data);
      alert('Datos obtenidos exitosamente');
    } catch (error) {
      console.error(error);
      alert('Hubo un error al obtener los datos');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          ID del dato a obtener:
          <input type="text" value={id} onChange={(e) => setId(e.target.value)}  />
        </label>
        <button type="submit">Obtener</button>
      </form>
      {data && (
        <div>
          <h2>Datos obtenidos:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default GetForm;































// import { useState } from "react";

// function Formularioget () {
//   const [ descripcion, setDescripcion] = useState("");
  
//   const Buscar = async (e) => {
//     e.preventDefault();
    
    
    
//     try{
//       const respose = await fetch('http://localhost:3001/tiposAlojamiento/getTiposAlojamiento',{
//         method:'GET',
//         headers: {
//           'Content-type': 'application/json',
//         },
        
        
//       });
//       if(respose.ok) {
//         alert('Lista Cargada');
//       }
//       else{
//         console.error('Error');
//         alert('Error al buscar el alojamiento tipo');
//       }
//       }catch (error){
//         console.error('Error',error);
//         alert('Error al establecer el servicio');
        
//       }
//   }
//   return (
//     <div className='form-container'>
//       <h1>Buscar Alojamientos</h1>
//       <form onSubmit={Buscar}>
//         <div>
//           <label htmlFor='descripcion'>Descripcion:</label>
//           <input
//             type='text'
//             id='descripcion'
//             value={descripcion}
//             onChange={(e) => setDescripcion(e.target.value)}
//           />
//         </div>
//         <button type='submit'>Buscar</button>
//       </form>
//       <div>
//         <h2>Lista de los Alojamientos</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Descripcion</th>
//             </tr>
//           </thead>
//           <tbody id='e'> 

//           </tbody>
//         </table>
//       </div>
//     </div>
    
//   )

// };

// export default Formularioget;