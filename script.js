const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', () => {
  const taskText = taskInput.value;
  if (taskText === '') return;

  const listItem = document.createElement('li');
  listItem.textContent = taskText;

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      listItem.classList.add('completed');
    } else {
      listItem.classList.remove('completed');
    }
  });
  listItem.prepend(checkbox); 

  taskList.appendChild(listItem);
  taskInput.value = '';
});