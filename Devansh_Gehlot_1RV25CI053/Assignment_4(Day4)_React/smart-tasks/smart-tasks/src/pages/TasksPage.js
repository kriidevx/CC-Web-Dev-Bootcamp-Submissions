import React, { useState, useEffect } from 'react';

function useTasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('smarttasks');
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('smarttasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks(prev => [...prev, { ...newTask, id: Date.now(), completed: false }]);
  };

  const toggleComplete = (id) => {
    setTasks(prev => prev.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  return { tasks, addTask, toggleComplete, deleteTask };
}

function TasksPage() {
  const { tasks, addTask, toggleComplete, deleteTask } = useTasks();
  
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('medium');
  const [category, setCategory] = useState('Personal');
  const [filterStatus, setFilterStatus] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const handleAdd = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask({ title: title.trim(), priority, category });
    setTitle('');
  };

  let filteredTasks = tasks.filter(task => {
    if (filterStatus === 'pending') return !task.completed;
    if (filterStatus === 'completed') return task.completed;
    return true;
  });

  if (categoryFilter !== 'all') {
    filteredTasks = filteredTasks.filter(t => t.category === categoryFilter);
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '1100px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>📋 My Tasks & Goals</h1>

      {/* Add Task Form */}
      <form onSubmit={handleAdd} style={{ display: 'grid', gridTemplateColumns: '1fr auto auto auto', gap: '1rem', marginBottom: '2rem' }}>
        <input
          type="text"
          placeholder="What needs to be done?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ padding: '14px', borderRadius: '12px', border: '1px solid #e2e8f0', fontSize: '1.1rem' }}
          required
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)} style={{ padding: '14px', borderRadius: '12px' }}>
          <option value="high">🔥 High</option>
          <option value="medium">⚡ Medium</option>
          <option value="low">📌 Low</option>
        </select>
        <select value={category} onChange={(e) => setCategory(e.target.value)} style={{ padding: '14px', borderRadius: '12px' }}>
          <option value="Personal">Personal</option>
          <option value="Study">Study</option>
          <option value="Work">Work</option>
          <option value="Health">Health</option>
          <option value="Other">Other</option>
        </select>
        <button type="submit" style={{ padding: '14px 28px', background: '#4f46e5', color: 'white', border: 'none', borderRadius: '12px', fontWeight: '600', cursor: 'pointer' }}>
          Add Task
        </button>
      </form>

      {/* Filters */}
      <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem' }}>
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} style={{ padding: '10px', borderRadius: '8px' }}>
          <option value="all">All Tasks</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
        <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} style={{ padding: '10px', borderRadius: '8px' }}>
          <option value="all">All Categories</option>
          <option value="Personal">Personal</option>
          <option value="Study">Study</option>
          <option value="Work">Work</option>
          <option value="Health">Health</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Task List */}
      {filteredTasks.length === 0 ? (
        <p style={{ textAlign: 'center', padding: '3rem', color: '#64748b' }}>No tasks found. Add some above!</p>
      ) : (
        filteredTasks.map(task => (
          <div key={task.id} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '1rem',
            background: 'white',
            borderRadius: '12px',
            marginBottom: '12px',
            border: '1px solid #e2e8f0'
          }}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(task.id)}
            />
            <div style={{ flex: 1 }}>
              <div style={{ textDecoration: task.completed ? 'line-through' : 'none', color: task.completed ? '#64748b' : 'black' }}>
                {task.title}
              </div>
              <div style={{ fontSize: '0.85rem', marginTop: '4px' }}>
                <span style={{ background: task.priority === 'high' ? '#fee2e2' : task.priority === 'medium' ? '#fef3c7' : '#ecfdf5', 
                               color: task.priority === 'high' ? '#b91c1c' : task.priority === 'medium' ? '#b45309' : '#0f766e',
                               padding: '2px 10px', borderRadius: '9999px', fontSize: '0.75rem' }}>
                  {task.priority.toUpperCase()}
                </span>
                {' • '}{task.category}
              </div>
            </div>
            <button 
              onClick={() => deleteTask(task.id)}
              style={{ padding: '8px 16px', background: '#ef4444', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default TasksPage;