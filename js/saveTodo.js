import { calculateRandomColor } from "./calculator.js";
import { todos } from "./script.js";
import { showNotification } from "./warnings.js";

export const saveTodo = () => {
    const todoInput = document.getElementById("newtodo");
    const todoValue = todoInput.value;
    
    const priorityInput = document.getElementById('priority');
    const priority = Number(document.getElementById('priority').value);
    
    const isEmpty = todoValue === "";

    if (isEmpty) {
      showNotification('Input is empty!');
    }else {
            const todo = {
                title: todoValue, 
                checked: false,
                priorityValue: priority, 
                color: calculateRandomColor()
              };
        todos.push(todo);
    
        todoInput.value = "";
        priorityInput.value = "";

      }
    };