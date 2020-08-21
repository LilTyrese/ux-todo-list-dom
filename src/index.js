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
  let h1 = document.createElement("h1");
  let ul = document.createElement("ul");
  
  h1.innerText = "Tyrese's To-do List";
  app.appendChild(h1);
  
  for (let i = 0; i < todos.length; i++) {
    let li = document.createElement("li");
    let tasks = todos[i];
    let checkbox = tasks.completed ? "checked" : "";
    let todoItems = `<input type="checkbox" ${checkbox}>${tasks.description}</input>`;
    
    li.innerHTML += todoItems;
    ul.appendChild(li);
  }
  
  app.appendChild(ul);
}


renderTodoApp();

document.addEventListener("keyup", function(event)){
  if(event.keyCode == 13){
    const.todo = input.value;
    if(todo){
      addTodo(todo);
    }
    input.value = " ";
  }
}

let todoBtn = document.querySelector('#todo-button')

todoBtn.onclick = () => {
  alert('An alert was triggered!')
}

let form = document.querySelector('#form')
let formInput = document.querySelector('#form-input')

form.onsubmit = (e) => {
  e.preventDefault()
  alert(formInput.value)
}