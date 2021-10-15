import { useState } from "react";
// Import components
import TodoForm from "./Todoform";

function Todolist() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (!task.text) {
      return;
    }

    const newTasks = [task, ...tasks];
    setTasks(newTasks);

    console.log(task, ...tasks);
  };

  return (
    <div>
      <h1>Welcome to my new todolist app</h1>
      <TodoForm onSubmit={addTask} />
    </div>
  );
}

export default Todolist;
