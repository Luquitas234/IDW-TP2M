import React, { useState } from 'react';
import './LoginEstilos.css';
import { Link } from 'react-router-dom';


const LoginForm = () => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  


  

  const handleSubmit = (event) => {
    event.preventDefault();

    
    if (!username || !password) {
      setError('Por favor, completa todos los campos');
      return;
    }

    // Datos simulados para la validación
    const userSimulado = 'admin';
    const passSimulada = '12345';

    if (username === userSimulado && password === passSimulada) {
      console.log('Inicio de sesión exitoso');
      setError('');
      window.location.replace('/Gestion');
    }else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username">Usuario:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {error && <p className="error-message">{error}</p>}
      <button type="submit">Iniciar sesión</button>
      <Link to="/"><button id='butonCerrar'> Volver </button></Link>
      
      
    </form>
  );
};
 
export default LoginForm;




