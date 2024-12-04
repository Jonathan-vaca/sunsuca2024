import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';  // Sin 'src/' porque está dentro de 'src'
import Footer from './components/Footer';  // Sin 'src/'
import { AuthProvider } from './contexts/AuthContext';  // Sin 'src/'
import HomePage from './pages/HomePage';  // Sin 'src/'
import LoginPage from './pages/LoginPage';  // Sin 'src/'
import CatalogoPage from './pages/CatalogoPage';  // Sin 'src/'
import GaleriaPage from './pages/GaleriaPage';  // Sin 'src/'
import DashboardPage from './pages/DashboardPage';  // Sin 'src/'

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/catalogo" element={<CatalogoPage />} />
          <Route path="/galeria" element={<GaleriaPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;
