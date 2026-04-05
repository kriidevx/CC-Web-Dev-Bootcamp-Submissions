function TaskCard({ task, toggleTask, deleteTask }) {
  return (
    <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
      <h3
        style={{
          textDecoration: task.completed ? "line-through" : "none",
        }}
      >
        {task.title}
      </h3>

      <p>Priority: {task.priority}</p>

      <button onClick={() => toggleTask(task.id)}>Toggle</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}

export default TaskCard;