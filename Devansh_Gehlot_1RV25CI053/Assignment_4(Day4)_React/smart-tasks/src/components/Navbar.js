import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  return (
    <nav style={{ 
      background: 'white', 
      padding: '1rem 2rem', 
      borderBottom: '1px solid #e2e8f0',
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center' 
    }}>
      <div style={{ fontSize: '1.8rem', fontWeight: '700' }}>📋 SmartTasks</div>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <Link to="/" style={{ color: location.pathname === '/' ? '#4f46e5' : '#64748b', textDecoration: 'none', fontWeight: 500 }}>Tasks</Link>
        <Link to="/dashboard" style={{ color: location.pathname === '/dashboard' ? '#4f46e5' : '#64748b', textDecoration: 'none', fontWeight: 500 }}>Dashboard</Link>
      </div>
    </nav>
  );
}

export default Navbar;