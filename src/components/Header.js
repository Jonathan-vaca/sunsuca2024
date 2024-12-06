import React from 'react';
import { Link } from 'react-router-dom';  // Importamos el componente Link de React Router

const Header = () => {
  return (
    <header>
      <div>
        <img src="/assets/images/Logo Sunsuca.png" alt="SUNSUCA Logo" />
      </div>
      <nav>
        <ul>
          <li><Link to="/catalogo">Servicio</Link></li>  {/* Usamos Link en lugar de <a> */}
          <li><a href="#about">Nosotros</a></li>
          <li><Link to="/galeria">Contacto</Link></li>  {/* Cambiado a Link para navegación */}
          <li><Link to="/Login">Cambiar Perfil</Link></li>  {/* Cambiado a Link para navegación */}

        </ul>
      </nav>
    </header>
  );
};

export default Header;

  