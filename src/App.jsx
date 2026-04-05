import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import FocusMode from "./pages/FocusMode";

function App() {
  const [tasks, setTasks] = useState([]);

  // Load tasks
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks"));
    if (saved) setTasks(saved);
  }, []);

  // Save tasks
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <BrowserRouter>
      <div style={styles.navbar}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/focus" style={styles.link}>Focus Mode</Link>
      </div>

      <Routes>
        <Route path="/" element={<Dashboard tasks={tasks} setTasks={setTasks} />} />
        <Route path="/focus" element={<FocusMode tasks={tasks} />} />
      </Routes>
    </BrowserRouter>
  );
}

const styles = {
  navbar: {
    position: "fixed", // 👈 keeps it on top
    top: "20px",
    left: "50%",
    transform: "translateX(-50%)", // 👈 center horizontally
    display: "flex",
    gap: "20px",
    background: "rgba(0,0,0,0.6)",
    padding: "10px 20px",
    borderRadius: "10px",
    backdropFilter: "blur(10px)",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default App;