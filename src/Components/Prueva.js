import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../App.css"

function Prueva() {

  const [Descripcion, setDescripcion] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/Alojamiento/getAlojamientos')
    
      .then((response) => {
        return response.json()
      })
      .then((descripcion) => {
        setDescripcion(descripcion)
        console.log(descripcion)
      })
  }, [])

  return (
    <div>
      <h1> Lista de Alojamientos</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Titulo</th>
            <th>Descripción</th>
            <th>Latitud</th>
            <th>Longitud</th>
            <th>Precio Por Dia</th>
            <th>Cantidad Dormitorios</th>
            <th>Cantidad Baños</th>
            <th>Estado</th>
            <th>Tipo Alojamiento</th>
            


          </tr>
        </thead>
        <tbody className='TablaDatos'>
          {Descripcion.map(Des => {
            return (
              <tr key={Des.Descripcion}>
                <td>{Des.idAlojamiento}</td>
                <td>{Des.Titulo}</td>
                <td>{Des.Descripcion}</td>
                <td>{Des.Latitud}</td>
                <td>{Des.Longitud}</td>
                <td>{Des.PrecioPorDia}</td>
                <td>{Des.CantidadDormitorios}</td>
                <td>{Des.CantidadBanios}</td>
                <td>{Des.Estado}</td>
                <td>{Des.TipoAlojamiento}</td>
              </tr>
            );
          })}
        </tbody>
      </table> 
      <Link to="/Gestion"><button>Volver</button></Link>
    </div>
  );
}

export default Prueva;