import React, { useState } from 'react';

// REQUIREMENT: Smart Feature (Pick random task)
function Focus({ tasks }) {
  const [focusTask, setFocusTask] = useState(null);

  const pickRandomTask = () => {
    // Only pick from tasks that are NOT completed
    const pendingTasks = tasks.filter(task => !task.completed);
    
    if (pendingTasks.length === 0) {
      alert("Great job! You have no pending tasks to focus on.");
      return;
    }

    const randomIndex = Math.floor(Math.random() * pendingTasks.length);
    setFocusTask(pendingTasks[randomIndex]);
  };

  return (
    <div style={{ padding: '30px', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <h2>🧠 Focus Mode</h2>
      <p style={{ color: '#64748b', marginBottom: '30px' }}>
        Feeling overwhelmed? Let the app pick a single pending task for you to focus on right now.
      </p>

      <button 
        onClick={pickRandomTask} 
        style={{ padding: '15px 30px', fontSize: '1.1em', backgroundColor: '#8b5cf6', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
      >
        🎯 Pick a Task for Me
      </button>

      {focusTask && (
        <div style={{ marginTop: '40px', padding: '30px', border: '2px dashed #8b5cf6', borderRadius: '12px', backgroundColor: '#f5f3ff' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#4c1d95' }}>Your Current Mission:</h3>
          <h1 style={{ margin: 0, color: '#0f172a' }}>{focusTask.title}</h1>
          <span style={{ display: 'inline-block', marginTop: '15px', padding: '5px 10px', backgroundColor: '#ddd6fe', color: '#5b21b6', borderRadius: '20px', fontSize: '0.9em', fontWeight: 'bold' }}>
            Priority: {focusTask.priority}
          </span>
        </div>
      )}
    </div>
  );
}

export default Focus;