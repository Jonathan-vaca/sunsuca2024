import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Importa useHistory para redirigir

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory(); // Usamos useHistory para redirigir

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    // Lógica de autenticación simple
    if (username === 'admin' && password === 'admin123') {
      // Si el usuario es admin, redirige a dashboard
      history.push('/dashboard');
    } else if (username === 'usuario' && password === 'usuario123') {
      // Si el usuario es normal, redirige a eventos
      history.push('/eventos');
    } else {
      // Si las credenciales no coinciden, muestra un error
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <section id="login">
      <h1>Inicio de Sesión</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Muestra el mensaje de error si es necesario */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Usuario:</label>
        <input 
          type="text" 
          id="username" 
          name="username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />

        <label htmlFor="password">Contraseña:</label>
        <input 
          type="password" 
          id="password" 
          name="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />

        <button type="submit">Iniciar Sesión</button>
      </form>
    </section>
  );
};

export default Login;
