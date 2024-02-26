

const todosContainer = document.getElementById('todos-container');
console.log(todosContainer);

fetch('https://dummyjson.com/todos')
  .then((res) => res.json())
  .then(console.log);
