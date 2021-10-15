import { useState } from "react";

function TodoForm() {
  const [input, setInput] = useState("");

  return (
    <form className="todo__form">
      <input
        type="text"
        placeholder="Add a task"
        value={input}
        name="text"
        className="todo__form-input"
      />
      <button className="todo__form-button">Add a new task</button>
    </form>
  );
}

export default TodoForm;
