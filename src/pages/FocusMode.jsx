import { useState, useEffect } from "react";

function FocusMode({ tasks }) {
  const [focusTask, setFocusTask] = useState(null);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const pendingTasks = tasks.filter((t) => !t.completed);

  // ⏱️ Stopwatch logic
  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const formatTime = (t) => {
    const mins = Math.floor(t / 60);
    const secs = t % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Focus Mode</h1>

        {/* 🎯 Selected Task */}
        {focusTask && (
          <div style={styles.focusBox}>
            <h2>🎯 Current Focus</h2>
            <h3>{focusTask.title}</h3>
            <p>Priority: {focusTask.priority}</p>
          </div>
        )}

        {/* ⏱️ Stopwatch */}
        <div style={styles.timerBox}>
          <h2>{formatTime(time)}</h2>

          <div>
            <button onClick={() => setIsRunning(true)}>Start</button>
            <button onClick={() => setIsRunning(false)}>Pause</button>
            <button
              onClick={() => {
                setIsRunning(false);
                setTime(0);
              }}
            >
              Reset
            </button>
          </div>
        </div>

        {/* 📋 Task Selection */}
        <h2>Select a Task:</h2>

        {pendingTasks.length === 0 ? (
          <p>No pending tasks</p>
        ) : (
          pendingTasks.map((task) => (
            <div
              key={task.id}
              style={styles.task}
              onClick={() => setFocusTask(task)}
            >
              <h3>{task.title}</h3>
              <p>Priority: {task.priority}</p>
            </div>
          ))
        )}
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
  },
  container: {
    width: "500px",
    padding: "20px",
    background: "rgba(0, 0, 0, 0.7)",
    borderRadius: "15px",
    backdropFilter: "blur(10px)",
    color: "white",
    textAlign: "center",
  },
  title: {
    marginBottom: "20px",
  },
  focusBox: {
    border: "2px solid #00ff88",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "10px",
  },
  timerBox: {
    marginBottom: "20px",
  },
  task: {
    background: "white",
    color: "black",
    borderRadius: "10px",
    padding: "10px",
    margin: "10px 0",
    cursor: "pointer",
  },
};

export default FocusMode;