import { checkTodo, deleteTodo } from "./script.js";


export const checkAndDeleteElements = ()=>{

    const todosListElement = document.getElementById("todos-list");

    todosListElement.addEventListener("click", (event) => {

    const target = event.target;
    
    const parentElement = target.parentNode;

    if (parentElement.className !== "todo") return;

    const todoID = Number(parentElement.id);

    const action = target.dataset.action; 

    action === "check" && checkTodo(todoID);
    action === "delete" && deleteTodo(todoID);

  });
}