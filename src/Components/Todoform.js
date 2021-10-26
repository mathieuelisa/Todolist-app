import { useState, useRef, useEffect } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
    document.title = "Tasks List | App for your daily tasks ...";
  });

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
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Update your task"
            value={input}
            name="text"
            className="todo__form-input"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo__form-button">Update your task</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Add a task"
            value={input}
            name="text"
            className="todo__form-input"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo__form-button">Add a new task</button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
