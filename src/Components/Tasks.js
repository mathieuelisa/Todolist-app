import { useState } from "react";

import { AiFillCloseCircle } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";

function Tasks({ tasks, completeTask }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const deleteTasks = () => {
    console.log("task delete");
  };

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
        <AiFillCloseCircle onClick={deleteTasks} />
        <FiEdit2 onClick={updateEdit} />
      </div>
    </div>
  ));
}

export default Tasks;
