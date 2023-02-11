document.addEventListener('DOMContentLoaded', function() {
  const taskForm = document.querySelector('#taskForm');
  const todoList = document.querySelector('#todoList');

  taskForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';

    const newTask = document.createElement('li');
    newTask.innerText = document.querySelector('#taskInput').value;

    todoList.appendChild(newTask);
    newTask.appendChild(removeButton);
    taskForm.reset();
  })

  todoList.addEventListener('click', function(e) {
    const listItem = e.target.tagName.toLowerCase();
    if (listItem === 'li') {
      e.target.style.textDecoration = 'line-through';
    } else if (listItem === 'button') {
     e.target.parentNode.remove(); 
    }
    });
  });