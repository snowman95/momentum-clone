const TODOS_KEY = "todos";
const HIDDEN_CLASSNAME = "hidden";
const todo = document.querySelector("#todo");
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form__text");
const todoList = document.querySelector("#todo-list__element");
let todos = [];

function saveTodos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event){
  const li = event.target.parentElement;
  li.remove();
  todos = todos.filter(todo => todo.id!==parseInt(li.id));
  saveTodos();
}

function paintTodo(newTodo){
  const li = document.createElement("li")
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = `${newTodo.text}`;
  
  const button = document.createElement("button");
  button.innerText = "❌"

  li.appendChild(span);
  li.appendChild(button);
  button.addEventListener("click",deleteTodo);
  todoList.appendChild(li);
}

export function loadTodoList() {
  todo.classList.remove(HIDDEN_CLASSNAME);
  todoForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
      text: newTodo,
      id: Date.now()
    }
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
    }
  );

  const savedTodos = localStorage.getItem(TODOS_KEY);
  if (savedTodos !== null) {
    const parseTodos = JSON.parse(savedTodos);
    todos = parseTodos;
    parseTodos.forEach(paintTodo);

  }
}
