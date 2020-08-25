let todos = [
  {
    completed: false,
    description: "Take Jim to the hair salon",
  },
  {
    completed: true,
    description: "Drop off wedding invitation at mailbox",
  },
  {
    completed: false,
    description: "Pick up the cake",
  },
  {
    completed: false,
    description: "Call the caterers",
  },
];

function renderTodoApp() {
  let app = document.querySelector("#app");


  let todoItems = ""
  
  for (let i = 0; i < todos.length; i++) {
    let tasks = todos[i];
    let checkbox = tasks.completed ? "checked" : "";
    todoItems += `<li><input type="checkbox" ${checkbox}>${tasks.description}</li>`;
    
  }
  app.innerHTML = `<ul>${todoItems}</ul>`
}
renderTodoApp();

function todoList(){
  let input = document.querySelector(".todo-input").value
  let newObject = {completed: false, description: input}
  todos.push(newObject)
  document.querySelector(".todo-input").value = ""
  renderTodoApp()
}