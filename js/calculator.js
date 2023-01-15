
export const calculateProgress = (todos)=>todos.filter(t=>t.checked).length/todos.length;

export const calculateMin = (todos)=> Math.min(...todos.map(t=>t.priorityValue));

export const calculateMax = (todos)=> Math.max(...todos.map(t=>t.priorityValue));

export const calculateAsc = (todos)=>
todos.sort((t1, t2) => t1.priorityValue < t2.priorityValue ? -1 : (t1.priorityValue === t2.priorityValue ? 0 : 1));

export const calculateDecr = (todos)=>
todos.sort((t1, t2) => t1.priorityValue < t2.priorityValue ? 1 : (t1.priorityValue === t2.priorityValue ? 0 : -1));

export const calculateRandomColor= ()=> '#' + (Math.random()*0xFFFFFF<<0).toString(16);




