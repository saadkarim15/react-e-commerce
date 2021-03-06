const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterTodo = document.querySelector("select");

todoButton.addEventListener("click", addInput);
todoList.addEventListener("click", checkDelete);
filterTodo.addEventListener("click", filtered);

function addInput(event) {
  event.preventDefault();

  todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  newTodo = document.createElement("li");
  newTodo.classList.add("todo-item");
  newTodo.innerText = todoInput.value;

  todoDiv.appendChild(newTodo);

  checkButton = document.createElement("button");
  checkButton.classList.add("checkButton");
  checkButton.innerHTML = "<i class= 'fas fa-check'></i>";
  todoDiv.appendChild(checkButton);

  trashButton = document.createElement("button");
  trashButton.classList.add("trashButton");
  trashButton.innerHTML = "<i class= 'fas fa-trash'></i>";
  todoDiv.appendChild(trashButton);

  todoList.appendChild(todoDiv);
  todoInput.value = "";
}

function checkDelete(e) {
  const item = e.target;
  console.log(item);

  if (item.classList[0] === "trashButton") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  if (item.classList[0] === "checkButton") {
    const todo = item.parentElement;
    todo.classList.toggle("complete");
  }
}

function filtered(e) {
  const todos = todoList.childNodes;
  console.log(todos);
  todos.forEach((todo) => {
    console.log(todo);
    console.log(e.target.value)
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList("complete")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
