import React, { useState, useEffect } from 'react';

function DashboardPage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('smarttasks');
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  const completed = tasks.filter(t => t.completed).length;
  const progress = tasks.length ? Math.round((completed / tasks.length) * 100) : 0;

  const [suggested, setSuggested] = useState(null);

  const pickRandom = () => {
    const pending = tasks.filter(t => !t.completed);
    if (pending.length === 0) return alert("All done!");
    setSuggested(pending[Math.floor(Math.random() * pending.length)]);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <h1>📊 Dashboard</h1>
      <p>Total Tasks: {tasks.length} | Completed: {completed} | Progress: {progress}%</p>

      <button onClick={pickRandom} style={{ padding: '12px 24px', background: '#7c3aed', color: 'white', border: 'none', borderRadius: '8px', margin: '1rem 0' }}>
        Pick Random Task (Smart Feature)
      </button>

      {suggested && <p style={{ background: '#f0f0f0', padding: '1rem' }}>Focus on: {suggested.title}</p>}
    </div>
  );
}

export default DashboardPage;