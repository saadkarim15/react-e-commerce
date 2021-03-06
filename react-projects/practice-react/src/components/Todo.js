import React from "react";

const Todo = ({ text, todo, setTodos, todos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className={`todo ${todo.completed ? "complete" : ""}`}>
      <li className="todo-item">{text}</li>
      <button onClick={completeHandler} className="checkButton">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trashButton">
        <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  );
};

export default Todo;
