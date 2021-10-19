import { useState } from "react";

// Import components
import TodoForm from "./Todoform";
import Tasks from "./Tasks";

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

  const deleteTask = (id) => {
    const removeTaskToTheArray = [...tasks].filter((task) => task.id !== id);

    setTasks(removeTaskToTheArray);
  };

  const completeTask = (id) => {
    let updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Welcome to my new todolist app</h1>
      <TodoForm onSubmit={addTask} />
      <Tasks
        tasks={tasks}
        completeTask={completeTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default Todolist;
