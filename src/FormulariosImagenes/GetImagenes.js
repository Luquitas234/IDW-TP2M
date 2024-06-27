import React, { useState} from 'react';
import axios from 'axios';
import "../Formularios/EstilosFormularios.css";
import { Link } from 'react-router-dom';

const GetServicios = () => {
  const [id, setId] = useState('');
  const [data, setData] = useState(null);
  const [allData, setAllData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`http://localhost:3001/imagen/getImagen/${id}`);
      if (response.status === 200) {
        if (response.data === "") {
          setError("No Hay Datos con esa ID.");
        } else {
          setData(response.data);
          alert('Datos obtenidos exitosamente');
          console.log(data);
        }
      } else {
        setError(`Error al obtener los datos: ${response.status}`);
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError(`ingrese una ID `);
      } else {
        setError('Error al obtener los datos');
      }
    }
  };

  const handleGetAll = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/imagen/getAllImagenes`);
      if (response.status === 200) {
        setAllData(response.data);
        alert('Todos los datos obtenidos exitosamente');
        console.log(allData);
      } else {
        setError(`Error al obtener todos los datos: ${response.status}`);
      }
    } catch (error) {
      setError('Error al obtener todos los datos');
    }
  };

  const handleClear = () => {
    setId('');
    setData(null);
    setAllData(null);
    setError(null);
    document.getElementById('limpiar').focus();
  };

  return (
    <div id='form3' className='form-get'>
      <form onSubmit={handleSubmit}>
        <label>
          ID del dato a obtener:
          <input id='limpiar' type="text" value={id} onChange={(e) => setId(e.target.value)} require />
        </label>
        <button type="submit">Obtener</button>
        <button type="button" onClick={handleGetAll}>Obtener Todos</button>
        <button type="button" onClick={handleClear}>Limpiar</button>
        <Link to="/Gestion"><button>Volver</button></Link>
      </form>
      {error && (
        <div style={{ color: 'red' }}>
          <p>{error}</p>
        </div>
      )}
      <div className="data-container">
        {data && (
          <div>
            <h2>Datos obtenidos:</h2>
            <table>
              <thead>
                <tr>
                  <th>ID Imagen:</th>
                  <th>ID Alojamiento:</th>
                  <th>Ruta del Archivo:</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{data.idImagen}</td>
                  <td>{data.idAlojamiento}</td>
                  <td>{data.RutaArchivo}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {allData && (
          <div>
            <h2>Todas las Imagenes:</h2>
            <table>
              <thead>
                <tr>
                  <th> ID: </th>
                  <th>ID Alojamiento:</th>
                  <th>RUTA del Archivo:</th>
                </tr>
              </thead>
              <tbody>
                {allData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.idImagen}</td>
                    <td>{item.idAlojamiento}</td>
                    <td>{item.RutaArchivo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default GetServicios;