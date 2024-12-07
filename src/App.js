import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { AuthProvider } from './contexts/AuthContext';
import { EventProvider } from './contexts/EventContext';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import CatalogoPage from './pages/CatalogoPage';
import GaleriaPage from './pages/GaleriaPage';
import DashboardPage from './pages/DashboardPage';
import EventosPage from './pages/EventosPage';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './pages/AdminDashboard'; // Importa AdminDashboard

const App = () => {
  return (
    <AuthProvider>
      <EventProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/catalogo" element={<CatalogoPage />} />
            <Route path="/galeria" element={<GaleriaPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/user-dashboard" element={<UserDashboard />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} /> {/* Ruta Admin */}
            <Route path="/eventos" element={<EventosPage />} />
          </Routes>
          <Footer />
        </Router>
      </EventProvider>
    </AuthProvider>
  );
};

export default App;
