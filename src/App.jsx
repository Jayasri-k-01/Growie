import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import WalletPage from './pages/WalletPage';
import AnalyticsPage from './pages/AnalyticsPage';
import TransactionsPage from './pages/TransactionsPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return !!localStorage.getItem('token');
  });

  const handleLogin = (status) => {
    setIsAuthenticated(status);
    if (!status) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register onLogin={handleLogin} />} />
        <Route 
          path="/dashboard" 
          element={
            isAuthenticated ? <Dashboard onLogout={() => handleLogin(false)} /> : <Navigate to="/login" replace />
          } 
        />
        <Route 
          path="/wallet" 
          element={
            isAuthenticated ? <WalletPage onLogout={() => handleLogin(false)} /> : <Navigate to="/login" replace />
          } 
        />
        <Route 
          path="/analytics" 
          element={
            isAuthenticated ? <AnalyticsPage onLogout={() => handleLogin(false)} /> : <Navigate to="/login" replace />
          } 
        />
        <Route 
          path="/transactions" 
          element={
            isAuthenticated ? <TransactionsPage onLogout={() => handleLogin(false)} /> : <Navigate to="/login" replace />
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
