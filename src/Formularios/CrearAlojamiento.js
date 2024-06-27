import React, { useState } from 'react'
import "./CrearAlojamiento.css"
import { Link } from 'react-router-dom';


const CrearAlojamiento = () => {
    const [ titulo, setTitulo] = useState("");
    const [ descripcion, setDescripcion] = useState("");
    const [ latitud, setLatitud] = useState("");
    const [ longitud, setLongitud] = useState("");
    const [ preciopordia, setPrecioPorDia] = useState("");
    const [ cantidaddormitorios, setCantidadDormitorios] = useState("");
    const [ cantidadbanios, setCantidadBanios] = useState("");
    const [ estado, setEstado] = useState("");
    const [ tipoalojamiento, setTipoAlojamiento] = useState("");

    const crear = async (e) => {
        e.preventDefault();
        const json = {
            Titulo:titulo,
            Descripcion:descripcion,
            Latitud:latitud,
            Longitud:longitud,
            PrecioPorDia:preciopordia,
            CantidadDormitorios:cantidaddormitorios,
            CantidadBanios:cantidadbanios,
            Estado:estado,
            TipoAlojamiento:tipoalojamiento,
        };

        try{
            const response = await fetch('http://localhost:3001/alojamiento/createAlojamiento',{
                method:'POST',
                headers:{
                    'Content-type':'application/json',
                },
                body: JSON.stringify(json),
            });
            if(response.ok){
                alert('se creo correctamente el Alojamiento');
                console.log(json);
            }
            else{
                console.error('Error');
                console.log(json);
                alert('Error al crear el Alojamiento');
            }
            }catch (error){
                console.error('Error',error);
                alert('Error al establecer el servicio');
            }
    }
    return (
        <div>
            <form className='crear-aloja' onSubmit={crear}>
                <div>
                    <label htmlFor='titulo'>Titulo</label>
                    <input
                       type='text'
                       id='titulo'
                       value={titulo}
                       onChange={(e)=> setTitulo(e.target.value)}
                       required
                    />
                </div>
                <div>
                    <label htmlFor='descripcion'>Descripcion</label>
                    <input
                    type='text'
                    id='descripcion'
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <label htmlFor='latitud'>Latitud</label>
                    <input
                    type='text'
                    id='latitud'
                    value={latitud}
                    onChange={(e) => setLatitud(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <label htmlFor='longitud'>Longitud</label>
                    <input
                    type='text'
                    id='longitud'
                    value={longitud}
                    onChange={(e) => setLongitud(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <label htmlFor='preciopordia'>Precio Por Dia</label>
                    <input
                    type='text'
                    id='preciopordia'
                    value={preciopordia}
                    onChange={(e) => setPrecioPorDia(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <label htmlFor='cantidaddormitorios'>Cantidad Dormitorios</label>
                    <input
                    type='text'
                    id='cantidaddormitorios'
                    value={cantidaddormitorios}
                    onChange={(e) => setCantidadDormitorios(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <label htmlFor='cantidadbanios'>Cantidad Banios</label>
                    <input
                    type='text'
                    id='cantidadbanios'
                    value={cantidadbanios}
                    onChange={(e) => setCantidadBanios(e.target.value)} 
                    required
                    />
                </div>
                <div>
                    <label htmlFor='estado'>Estado</label>
                    <input
                    type='text'
                    id='estado'
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <label htmlFor='tipoalojamiento'>Tipo Alojamiento</label>
                    <input
                    type='text'
                    id='tipoalojamiento'
                    value={tipoalojamiento}
                    onChange={(e) => setTipoAlojamiento(e.target.value)}
                    required
                    />
                </div>
                <button type='submit'>Crear</button>    
            </form>
            <Link to="/Login"><button id='butonCerrar'> Cerrar sesión </button></Link>
            
        </div>
    )
}

export default CrearAlojamiento;
