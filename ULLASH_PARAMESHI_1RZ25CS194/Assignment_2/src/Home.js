import React, { useState } from 'react';

// REQUIREMENT: Display using components. 
// This is a sub-component that takes props to render individual tasks.
function TaskItem({ task, toggleComplete, deleteTask }) {
  return (
    <li style={{ 
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '12px', margin: '10px 0', borderRadius: '6px',
      backgroundColor: task.completed ? '#f1f5f9' : '#ffffff',
      border: '1px solid #cbd5e1',
      textDecoration: task.completed ? 'line-through' : 'none',
      color: task.completed ? '#94a3b8' : '#0f172a'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        {/* Interaction 1: Toggle */}
        <input 
          type="checkbox" 
          checked={task.completed} 
          onChange={() => toggleComplete(task.id)} 
          style={{ cursor: 'pointer', transform: 'scale(1.2)' }}
        />
        <span>
          <strong>{task.title}</strong> 
          <span style={{ fontSize: '0.85em', marginLeft: '8px', padding: '2px 6px', borderRadius: '4px', backgroundColor: task.priority === 'High' ? '#fee2e2' : '#e0f2fe', color: task.priority === 'High' ? '#ef4444' : '#0ea5e9' }}>
            {task.priority}
          </span>
        </span>
      </div>
      {/* Interaction 2: Delete */}
      <button onClick={() => deleteTask(task.id)} style={{ padding: '5px 10px', backgroundColor: '#ef4444', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        Delete
      </button>
    </li>
  );
}

function Home({ tasks, setTasks }) {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('Medium');
  
  // Interaction 3: Filter state
  const [filter, setFilter] = useState('All'); 

  // Add Task Function
  const addTask = (e) => {
    e.preventDefault(); // Prevents page reload
    if (!title.trim()) return;

    const newTask = {
      id: Date.now(),
      title: title,
      priority: priority,
      completed: false // 3rd property
    };

    setTasks([...tasks, newTask]);
    setTitle(''); 
  };

  const toggleComplete = (id) => {
    const updatedTasks = tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter(task => task.id !== id);
    setTasks(filteredTasks);
  };

  // Filter logic
  const displayedTasks = tasks.filter(task => {
    if (filter === 'All') return true;
    if (filter === 'Completed') return task.completed;
    if (filter === 'Pending') return !task.completed;
    return true;
  });

  return (
    <div style={{ padding: '30px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Productivity Dashboard 📝</h1>
      
      {/* ADD TASK FORM */}
      <form onSubmit={addTask} style={{ display: 'flex', gap: '10px', marginBottom: '30px' }}>
        <input 
          type="text" 
          placeholder="What do you need to do?" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)}
          style={{ flex: 1, padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)} style={{ padding: '10px', borderRadius: '4px' }}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Add Task
        </button>
      </form>

      {/* FILTER CONTROLS */}
      <div style={{ marginBottom: '15px' }}>
        <strong>Filter: </strong>
        <select value={filter} onChange={(e) => setFilter(e.target.value)} style={{ padding: '5px', borderRadius: '4px' }}>
          <option value="All">All Tasks</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      {/* REQUIREMENT: Display using .map() */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {displayedTasks.length > 0 ? (
          displayedTasks.map(task => (
            <TaskItem 
              key={task.id} 
              task={task} 
              toggleComplete={toggleComplete} 
              deleteTask={deleteTask} 
            />
          ))
        ) : (
          <p style={{ color: '#64748b' }}>No tasks found in this view.</p>
        )}
      </ul>
    </div>
  );
}

export default Home;