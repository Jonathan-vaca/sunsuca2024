import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  // Estado inicial cargando usuarios de localStorage
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem('users');
    return savedUsers ? JSON.parse(savedUsers) : [
      { username: 'admin', password: 'admin123', role: 'admin' },
      { username: 'usuario', password: 'usuario123', role: 'user' },
    ];
  });

  // Guardar usuarios en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  // Función para manejar el inicio de sesión
  const handleLogin = (e) => {
    e.preventDefault();

    const user = users.find((u) => u.username === username && u.password === password);
    if (user) {
      if (user.role === 'admin') {
        navigate('/admin-dashboard');
      } else if (user.role === 'user') {
        navigate('/user-dashboard');  // Redirigir al User Dashboard
      }
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  // Función para manejar el registro
  const handleRegister = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Todos los campos son obligatorios.');
      setSuccess('');
      return;
    }

    const userExists = users.some((u) => u.username === username);
    if (userExists) {
      setError('El nombre de usuario ya está en uso. Por favor, elige otro.');
      setSuccess('');
      return;
    }

    const newUser = { username, password, role: 'user' };
    setUsers([...users, newUser]);
    setSuccess('Usuario registrado exitosamente. Ahora puedes iniciar sesión.');
    setError('');
    setUsername('');
    setPassword('');
    setIsRegistering(false);
  };

  return (
    <section id="login-register">
      <h1>{isRegistering ? 'Registro de Usuario' : 'Inicio de Sesión'}</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}

      {isRegistering ? (
        <form onSubmit={handleRegister}>
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

          <button type="submit">Registrar</button>
          <p>
            ¿Ya tienes cuenta?{' '}
            <button type="button" onClick={() => setIsRegistering(false)}>
              Inicia sesión
            </button>
          </p>
        </form>
      ) : (
        <form onSubmit={handleLogin}>
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
          <p>
            ¿No tienes cuenta?{' '}
            <button type="button" onClick={() => setIsRegistering(true)}>
              Regístrate
            </button>
          </p>
        </form>
      )}
    </section>
  );
};

export default LoginPage;
