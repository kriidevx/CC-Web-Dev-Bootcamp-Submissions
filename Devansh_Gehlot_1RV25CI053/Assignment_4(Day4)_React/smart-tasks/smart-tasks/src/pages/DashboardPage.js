import React, { useState, useEffect } from 'react';

function DashboardPage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('smarttasks');
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  const completed = tasks.filter(t => t.completed).length;
  const pending = tasks.length - completed;
  const progress = tasks.length > 0 ? Math.round((completed / tasks.length) * 100) : 0;

  const [suggested, setSuggested] = useState(null);

  const pickRandom = () => {
    const pendingTasks = tasks.filter(t => !t.completed);
    if (pendingTasks.length === 0) {
      alert("🎉 All tasks are completed! Great job!");
      return;
    }
    const random = pendingTasks[Math.floor(Math.random() * pendingTasks.length)];
    setSuggested(random);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '1100px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.2rem', marginBottom: '2rem' }}>📊 Dashboard</h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '16px', textAlign: 'center' }}>
          <h3>Total Tasks</h3>
          <h2 style={{ fontSize: '3rem', color: '#4f46e5' }}>{tasks.length}</h2>
        </div>
        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '16px', textAlign: 'center' }}>
          <h3>Completed</h3>
          <h2 style={{ fontSize: '3rem', color: '#10b981' }}>{completed}</h2>
        </div>
        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '16px', textAlign: 'center' }}>
          <h3>Pending</h3>
          <h2 style={{ fontSize: '3rem', color: '#f59e0b' }}>{pending}</h2>
        </div>
      </div>

      {/* Progress */}
      <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', marginBottom: '2rem' }}>
        <h3>Overall Progress</h3>
        <div style={{ height: '12px', background: '#e2e8f0', borderRadius: '9999px', margin: '1rem 0' }}>
          <div style={{ width: `${progress}%`, height: '100%', background: 'linear-gradient(90deg, #4f46e5, #7c3aed)', borderRadius: '9999px' }}></div>
        </div>
        <p>{progress}% Complete ({completed} of {tasks.length})</p>
      </div>

      {/* Smart Feature - Random Task */}
      <div style={{ background: 'white', padding: '2rem', borderRadius: '16px' }}>
        <h3>🎯 Smart Focus Mode</h3>
        <button 
          onClick={pickRandom}
          style={{ margin: '1rem 0', padding: '14px 28px', background: '#7c3aed', color: 'white', border: 'none', borderRadius: '12px', cursor: 'pointer', fontSize: '1.1rem' }}
        >
          Pick a Random Task
        </button>

        {suggested && (
          <div style={{ marginTop: '1rem', padding: '1.5rem', background: '#f8fafc', border: '2px dashed #7c3aed', borderRadius: '12px' }}>
            <strong>Next Focus Task:</strong><br />
            {suggested.title} <span style={{ color: '#64748b' }}>({suggested.category} • {suggested.priority})</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default DashboardPage;