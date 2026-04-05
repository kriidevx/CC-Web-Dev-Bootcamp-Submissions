import { useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";

function Dashboard({ tasks, setTasks }) {
  const [filter, setFilter] = useState("all");

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const filteredTasks = tasks.filter((t) => {
    if (filter === "completed") return t.completed;
    if (filter === "pending") return !t.completed;
    return true;
  });

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Productivity Tracker</h1>

        <TaskForm addTask={addTask} />

        <div style={styles.filterBar}>
          <button onClick={() => setFilter("all")}>All</button>
          <button onClick={() => setFilter("completed")}>Completed</button>
          <button onClick={() => setFilter("pending")}>Pending</button>
        </div>

        <div>
          {filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
 page: {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: "80px", // 👈 pushes content below navbar
},
  container: {
    width: "500px",
    padding: "20px",
    background: "rgba(0, 0, 0, 0.6)",
    borderRadius: "15px",
    backdropFilter: "blur(10px)",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  filterBar: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    margin: "15px 0",
  },
};

export default Dashboard;