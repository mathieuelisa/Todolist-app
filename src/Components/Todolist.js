import { useEffect, useState } from "react";
// Import components
import TodoForm from "./Todoform";
import Tasks from "./Tasks";
// Import font
import "../Assets/Fonts/Richardson.otf";
import "../Assets/Fonts/Champagne.ttf";

function Todolist() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("myTasks") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("myTasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add task
  const addTask = (task) => {
    if (!task.text) {
      return;
    }

    const newTasks = [task, ...tasks];
    setTasks(newTasks);

    console.log(task, ...tasks);
  };

  //Update task
  const updateTask = (taskId, newValue) => {
    if (!newValue.text) {
      return;
    }

    setTasks((prev) =>
      prev.map((element) => (element.id === taskId ? newValue : element))
    );
  };

  // Remove task
  const deleteTask = (id) => {
    const removeTaskToTheArray = [...tasks].filter((task) => task.id !== id);

    setTasks(removeTaskToTheArray);
  };

  // Complete task
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
    <div className="todo__formCustom">
      <h1 className="todo__mainTitle">Tasks Lists</h1>
      <TodoForm onSubmit={addTask} />
      <Tasks
        tasks={tasks}
        completeTask={completeTask}
        deleteTask={deleteTask}
        updateTask={updateTask}
      />
    </div>
  );
}

export default Todolist;
