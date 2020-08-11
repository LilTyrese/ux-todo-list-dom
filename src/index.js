
let todos = [
    {
        completed: false,
        description: "Take Jim to the hair salon"
    },
    {
        completed: true,
        description: "Drop off wedding invitation at mailbox"
    },
    {
        completed: false,
        description: "Pick up the cake"
    },
    {
        completed: false,
        description: "Call the caterers"
    }
];

function renderTodoApp() {
    let app = document.querySelector("#app")
    let h1 = document.createElement("h1")
    
    let todoItems = ''
    
    for(let i = 0; i < todos.length; i++){
        document.createElement('li')
        let tasks = todos[i]
        let checkbox = tasks.completed ? "checked" : " " 
        todoItems += `<li> <input ${checkbox} type = "checkbox"> ${tasks.description} </li>`
    }
        app [`h1`]



    app.appendChild(h1)
    // and maybe some here
}

renderTodoApp()