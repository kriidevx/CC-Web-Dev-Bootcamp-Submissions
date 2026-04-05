import { useState } from "react";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !priority) return;

    addTask({
      id: Date.now(),
      title,
      priority,
      completed: false,
    });

    setTitle("");
    setPriority("");
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        placeholder="Enter task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={styles.input}
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        style={styles.select}
      >
        <option value="">Priority</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      <button style={styles.button}>Add Task</button>
    </form>
  );
}

const styles = {
  form: {
    display: "flex",
    justifyContent: "center", // 👈 CENTER EVERYTHING
    alignItems: "center",
    gap: "10px",
    marginBottom: "15px",
  },
  input: {
    width: "200px",
    padding: "8px",
    borderRadius: "5px",
    border: "none",
  },
  select: {
    padding: "8px",
    borderRadius: "5px",
    border: "none",
  },
  button: {
    padding: "8px 12px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  },
};

export default TaskForm;