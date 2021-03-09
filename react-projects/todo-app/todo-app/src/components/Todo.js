import React from "react";
import "../styles/Todo.css";

const Todo = ({ todoText, todo, todos, setTodos }) => {
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
    <div className="todo__container">
      <div className={`todo ${todo.completed ? "completed" : ""}`}>
        <p className="todo__name">{todoText}</p>
        <button onClick={deleteHandler} className="delete__btn">
          <i className="far fa-trash-alt"></i>
        </button>
        <button onClick={completeHandler} className="check__btn">
          <i className="fas fa-check"></i>
        </button>
      </div>
    </div>
  );
};

export default Todo;
