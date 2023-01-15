import { checkAndDeleteElements} from "./actions.js";
import { calculateAsc, calculateDecr, calculateMax, calculateMin, calculateProgress, calculateRandomColor} from "./calculator.js";
import { renderTodos } from "./renderTodos.js";
import { saveTodo } from "./saveTodo.js";
import { setTheme } from "./setThemes.js";
import { showNotification } from "./warnings.js";



export const initTodos =() => {
    submitBtn();
    orderBtns();
    checkAndDeleteElements();
    checkTodo();
    deleteTodo();
    updateTodos();
    setTheme(mode);
};

  const updateProgress = ()=>{
    document.querySelector('#progress').textContent = `${Math.round(calculateProgress(todos) * 100)}%`
  }

  const submitBtn = ()=>{
   document
  .getElementById("todoform")
  .addEventListener("submit", (event)=> {
  event.preventDefault();

    saveTodo();
    updateTodos();
  });
}

export let todos=[];
 
 export const checkTodo = (todoID) => {
    todos = todos.map((todo, index) => ({
      ...todo, 
      checked: index === todoID ? !todo.checked : todo.checked,
    }));    
    console.log('check',todoID); 
    console.log('--------------');  
updateTodos();
  }

 export const deleteTodo = (todoID)=>{        
todos = todos.filter((todo, index) => index !== todoID);

console.log('delete',todoID);

updateTodos();

  }

const orderBtns = () => {
  document.querySelector('#order-asc').addEventListener('click', () => {
    calculateAsc(todos);
    updateTodos();
  });

  document.querySelector('#order-decr').addEventListener('click', () => {
      calculateDecr(todos);
      updateTodos();
     
  });
}

let minPriority;
let maxPriority;
const findFirstPriority = ()=>{
  minPriority = calculateMin(todos);
  document.querySelector('#max-priority').textContent = minPriority;
};

const findMostImportantTodo =()=>{
document.querySelector('#important-todo').textContent = todos.find(t => t.priorityValue === minPriority).title;
};

const findLastPriority = ()=>{
  maxPriority = calculateMax(todos);
  document.querySelector('#min-priority').textContent = maxPriority;
};

const findLastTodo =()=>{
document.querySelector('#less-important-todo').textContent = todos.find(t => t.priorityValue === maxPriority).title;
};

let themeDots = document.getElementsByClassName('theme-dot');

for (let i = 0; themeDots.length > i; i++){
  themeDots[i].addEventListener('click', (e)=>{
      let mode = e.target.dataset.mode;
      setTheme(mode);
  });
};

const updateTodos=()=>{
  renderTodos();
  updateProgress();
  findFirstPriority();
  findMostImportantTodo();
  findLastPriority();
  findLastTodo();
}



