
import {todos} from './script.js'

export const renderTodos = () => {
    
    const todosListElement = document.getElementById("todos-list");
  
    if (todos.length === 0){
        todosListElement.innerHTML = '<center style="color:red">Nothing to do!:)</center>'
        return
    }
    todosListElement.innerHTML = "";
    
    todos.forEach((todo, index) => {
      todosListElement.innerHTML += `  
    <div class="todo"  id=${index} >
    <i class="bi ${todo.checked ? 'bi-check-circle-fill' : "bi-circle"}"  
    style ="color : ${todo.color}"
    data-action="check"
    ></i>
    <p 
    class="${todo.checked ? 'complete' : 'incomplete'}" 
    data-action ="check">${index} ${todo.title} -> <span style="color:red">${todo.priorityValue}<span></p>
    <i class="bi bi-trash"  data-action="delete"></i>
  </div>`;
  
    })};
  


