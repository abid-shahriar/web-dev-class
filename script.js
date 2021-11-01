const input = document.querySelector('.todo-input');
const btn = document.querySelector('.add-todo');

const todoBox = document.querySelector('.todos');

// console.log(input, btn, todoBox);

let userInput = '';

input.addEventListener('input', function (e) {
  //   console.log(e.target.value);

  userInput = e.target.value;
});

btn.addEventListener('click', function () {
  //   console.log(userInput);

  //   console.log(input.value);

  const todo = `<li>${input.value}</li>`;

  todoBox.insertAdjacentHTML('beforeend', todo);

  input.value = '';
});
