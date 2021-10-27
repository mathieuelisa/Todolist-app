import { useState, useRef, useEffect } from "react";
// Import React Reveal Effect
import Fade from "react-reveal/Fade";

function TodoForm({ edit, onSubmit }) {
  const [input, setInput] = useState(edit ? edit.value : "");

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
    document.title = "Tasks List | App for your daily tasks ...";
  });

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit({
      id: Math.floor(Math.random() * 200000),
      text: input,
    });
    setInput("");
  }

  function handleChange(e) {
    setInput(e.target.value);
  }

  return (
    <Fade left duration={2000}>
      <form className="todo__form" onSubmit={handleSubmit}>
        {edit ? (
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
    </Fade>
  );
}

export default TodoForm;
