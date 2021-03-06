import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos,filteredTodos }) => {
  return (
    <ul className="todo-list-container">
      <div className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            text={todo.text}
            key={todo.id}
            setTodos={setTodos}
            todos={todos}
            todo={todo}
          />
        ))}
      </div>
    </ul>
  );
};

export default TodoList;
