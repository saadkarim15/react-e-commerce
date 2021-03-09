import React from "react";
import Todo from "./Todo";
import "../styles/TodoList.css";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todoList__container">
      <ul className="todo__list">
        {filteredTodos.map((todo) => (
          <li>
            <Todo
              todoText={todo.text}
              key={todo.id}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
