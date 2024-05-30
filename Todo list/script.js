document.addEventListener('DOMContentLoaded', function () {
  const inputField = document.querySelector('.input');
  const addButton = document.querySelector('.ADD_button');
  const todoContainer = document.querySelector('.todo-container');

  addButton.addEventListener('click', function () {
      const taskText = inputField.value.trim();
      if (taskText !== '') {
          const newTask = document.createElement('li');
          newTask.innerHTML = `
            <span class="circle-symbol"></span>
            <span>${taskText}</span>
            <button class="delete-button">Delete</button>
          `;
          todoContainer.appendChild(newTask);
          inputField.value = '';
      }
  });

  todoContainer.addEventListener('click', function (event) {
      const target = event.target;
      if (target.classList.contains('delete-button')) {
          target.closest('li').remove();
      } else if (target.classList.contains('circle-symbol')) {
          target.parentNode.classList.toggle('completed');
      }
  });

  
  document.querySelector('.todo-filter').addEventListener('change', function () {
      const selectedOption = this.value;
      const todoItems = todoContainer.querySelectorAll('li');
      todoItems.forEach(function (item) {
          const isCompleted = item.classList.contains('completed');
          if (selectedOption === 'All' ||
              (selectedOption === 'Completed' && isCompleted) ||
              (selectedOption === 'Incomplete' && !isCompleted)) {
              item.style.display = 'block';
          } else {
              item.style.display = 'none';
          }
      });
  });

 
});
