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
    setTasks(prev => prev.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
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
    <div style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <h1>📋 My Tasks</h1>

      <form onSubmit={handleAdd} style={{ display: 'grid', gridTemplateColumns: '1fr auto auto auto', gap: '1rem', margin: '2rem 0' }}>
        <input type="text" placeholder="Task title" value={title} onChange={e => setTitle(e.target.value)} style={{ padding: '12px', borderRadius: '8px' }} required />
        <select value={priority} onChange={e => setPriority(e.target.value)} style={{ padding: '12px' }}>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <select value={category} onChange={e => setCategory(e.target.value)} style={{ padding: '12px' }}>
          <option value="Personal">Personal</option>
          <option value="Study">Study</option>
          <option value="Work">Work</option>
        </select>
        <button type="submit" style={{ padding: '12px 24px', background: '#4f46e5', color: 'white', border: 'none', borderRadius: '8px' }}>Add</button>
      </form>

      {filteredTasks.map(task => (
        <div key={task.id} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'white', marginBottom: '10px', borderRadius: '8px' }}>
          <input type="checkbox" checked={task.completed} onChange={() => toggleComplete(task.id)} />
          <div style={{ flex: 1, textDecoration: task.completed ? 'line-through' : 'none' }}>{task.title}</div>
          <button onClick={() => deleteTask(task.id)} style={{ background: 'red', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '6px' }}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TasksPage;