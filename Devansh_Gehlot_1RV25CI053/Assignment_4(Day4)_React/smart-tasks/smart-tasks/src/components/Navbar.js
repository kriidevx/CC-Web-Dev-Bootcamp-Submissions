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
      alignItems: 'center',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
    }}>
      <div style={{ fontSize: '1.8rem', fontWeight: 'bold', background: 'linear-gradient(90deg, #4f46e5, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        📋 SmartTasks
      </div>

      <div style={{ display: 'flex', gap: '2rem' }}>
        <Link 
          to="/" 
          style={{
            textDecoration: 'none',
            color: location.pathname === '/' ? '#4f46e5' : '#64748b',
            fontWeight: '500',
            padding: '8px 16px',
            borderRadius: '9999px'
          }}
        >
          Tasks
        </Link>
        <Link 
          to="/dashboard" 
          style={{
            textDecoration: 'none',
            color: location.pathname === '/dashboard' ? '#4f46e5' : '#64748b',
            fontWeight: '500',
            padding: '8px 16px',
            borderRadius: '9999px'
          }}
        >
          Dashboard
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;