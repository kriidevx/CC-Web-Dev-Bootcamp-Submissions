import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Focus from './Focus';

function App() {
  // REQUIREMENT: useState & useEffect (localStorage)
  // We initialize state by checking if there's anything saved in local storage first.
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('bootcampTasks');
    if (savedTasks) {
      return JSON.parse(savedTasks);
    } else {
      return [];
    }
  });

  // Whenever the 'tasks' array changes, this useEffect runs and saves it to local storage.
  useEffect(() => {
    localStorage.setItem('bootcampTasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <BrowserRouter>
      <div style={{ fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
        {/* Navigation Bar */}
        <nav style={{ padding: '15px 30px', backgroundColor: '#1e293b', color: 'white', display: 'flex', gap: '20px' }}>
          <Link to="/" style={{ color: '#38bdf8', textDecoration: 'none', fontWeight: 'bold' }}>Dashboard</Link>
          <Link to="/focus" style={{ color: '#38bdf8', textDecoration: 'none', fontWeight: 'bold' }}>Focus Mode</Link>
        </nav>

        {/* Page Routing - Notice how we pass tasks and setTasks as PROPS */}
        <Routes>
          <Route path="/" element={<Home tasks={tasks} setTasks={setTasks} />} />
          <Route path="/focus" element={<Focus tasks={tasks} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;