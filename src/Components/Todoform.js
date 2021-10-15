import { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 200000),
      text: input,
    });

    setInput("");
  }

  function handleChange(e) {
    setInput(e.target.value);
  }

  return (
    <form className="todo__form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a task"
        value={input}
        name="text"
        className="todo__form-input"
        onChange={handleChange}
      />
      <button className="todo__form-button">Add a new task</button>
    </form>
  );
}

export default TodoForm;
