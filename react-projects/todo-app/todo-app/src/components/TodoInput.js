import React from "react";
import "../styles/TodoInput.css";

const TodoInput = ({
  setInputText,
  inputText,
  todos,
  setTodos,
  status,
  setStatus,
}) => {
  const submitTodo = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div className="todoInput__container">
      <form>
        <input
          onChange={(e) => setInputText(e.target.value)}
          type="text"
          className="todo__input"
          value={inputText}
        />
        <button type="submit" className="todo__submit" onClick={submitTodo}>
          <i className="fas fa-plus"></i>
        </button>
      </form>
      <select onChange={statusHandler} className="filter__names">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  );
};

export default TodoInput;
