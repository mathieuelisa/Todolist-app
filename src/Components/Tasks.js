import { useState } from "react";

// Import React icons
import { AiFillCloseCircle } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import TodoForm from "./Todoform";

function Tasks({ tasks, completeTask, deleteTask, updateTask }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTask(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  function deleteTasks() {
    console.log("clicked and deleted");
  }

  const updateEdit = () => {
    console.log("task edited");
  };

  return tasks.map((task, index) => (
    <div
      className={task.isComplete ? "task__complete" : "task__row"}
      key={index}
    >
      <div key={task.id} onClick={() => completeTask(task.id)}>
        {task.text}
      </div>

      <div className="icons">
        <AiFillCloseCircle onClick={() => deleteTask(task.id)} />
        <FiEdit2 onClick={() => setEdit({ id: task.id, value: task.text })} />
      </div>
    </div>
  ));
}

export default Tasks;
