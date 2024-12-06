// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { AuthProvider } from './contexts/AuthContext';
import { EventProvider } from './contexts/EventContext'; // Importamos el proveedor
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import CatalogoPage from './pages/CatalogoPage';
import GaleriaPage from './pages/GaleriaPage';
import DashboardPage from './pages/DashboardPage';
import EventosPage from './pages/EventosPage'; // Nueva ruta

const App = () => {
  return (
    <AuthProvider>
      <EventProvider>  {/* Envuelvo la aplicación con el proveedor de eventos */}
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/catalogo" element={<CatalogoPage />} />
            <Route path="/galeria" element={<GaleriaPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/eventos" element={<EventosPage />} /> {/* Nueva ruta */}
          </Routes>
          <Footer />
        </Router>
      </EventProvider>
    </AuthProvider>
  );
};

export default App;
