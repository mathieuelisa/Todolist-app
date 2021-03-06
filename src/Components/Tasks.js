import { useState } from "react";
// Import React icons
import { AiFillCloseCircle } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
// Import Component
import TodoForm from "./Todoform";
// Import React Reveal Effect
import Fade from "react-reveal/Fade";

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

  return tasks.map((task, index) => (
    <Fade>
      <div
        className={task.isComplete ? "task__row complete" : "task__row"}
        key={index}
      >
        <div
          className="task__text"
          key={task.id}
          onClick={() => completeTask(task.id)}
        >
          {task.text}
        </div>

        <div className="icons">
          <AiFillCloseCircle
            className="icons-delete"
            onClick={() => deleteTask(task.id)}
          />
          <FiEdit2
            className="icons-update"
            onClick={() => setEdit({ id: task.id, value: task.text })}
          />
        </div>
      </div>
    </Fade>
  ));
}

export default Tasks;
