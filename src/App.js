const todoInput = document.querySelector(".todo-input");
const formTodoCreate = document.querySelector(".todo-create");
const btnAddTodo = document.querySelector(".btn-add");

let todoList = document.querySelector(".todo-list");
let todoCount = document.querySelector(".todo-count");
const btnClearAll = document.querySelector(".btn-clear-all");

let todos = []; // Create an array to add todos

function renderTodo() {
  // A function to render todos
  todoList.innerHTML = "";
  todos.map((todo) => {
    todoList.innerHTML += `
        <div class="todo-item">
                    <span class="todo-item-text">${todo.title}</span>
                    <button class="todo-item-delete" onclick="deleteTodoItem(${todo.id})"><i class="fa fa-trash"></i></button>
                </div>
        `;
  });
  todoCount.innerHTML = todos.length; // The number of todos
}

// Add todo to the todos array when a form is submitted
formTodoCreate.addEventListener("submit", (e) => {
  e.preventDefault();
  let valueTodo = todoInput.value;

  // Returns if the create todo input was empty
  if (!valueTodo) return;

  todoList.innerHTML = "";
  // Create an object with the contents of todo
  let newTodo = {
    id: new Date().getTime(),
    title: valueTodo,
  };

  // Add the created object to the todos array
  todos.push(newTodo);

  renderTodo();
  formTodoCreate.reset();
});

// A function to delete items in todos by id
function deleteTodoItem(id) {
  let newTodoList = todos.filter((todo) => todo.id !== id);
  todos = newTodoList;
  renderTodo();
}

// Remove all items from the todos array
btnClearAll.addEventListener("click", () => {
  todos.splice(0, todos.length);
  todoList.innerHTML = "";
  renderTodo();
});
