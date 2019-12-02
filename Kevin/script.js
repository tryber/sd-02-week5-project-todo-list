window.onload = function () {
  let todoItems = localStorage.getItem('TODO') ? JSON.parse(localStorage.getItem('TODO')) : [];

 
  function addTodo(text) {
    const todo = {
      text,
      checked: false,
      id: Date.now(),
    };

  todoItems.push(todo);

  const list = document.querySelector('.js-todo-list');
  list.insertAdjacentHTML('beforeend', `
    <li class='todo-item' data-key='${todo.id}'>
      <input id='${todo.id}' type='checkbox'/>
      <label for='${todo.id}' class='tick js-tick'></label>
      <span class='li'>${todo.text}</span>
      <button class='delete-todo js-delete-todo'>
        <svg><use href='#delete-icon'></use></svg>
      </button>
    </li>
  `);
 
}
  

    function toggleDone(key) {
      const index = todoItems.findIndex(item => item.id === Number(key));
      todoItems[index].checked = !todoItems[index].checked;

      const item = document.querySelector(`[data-key='${key}']`);
      if (todoItems[index].checked) {
        item.classList.add('done');
      } else {
        item.classList.remove('done');
      }
    }

function deleteTodo(key) {
  todoItems = todoItems.filter(item => item.id !== Number(key));
  const item = document.querySelector(`[data-key='${key}']`);
  item.remove();

  const list = document.querySelector('.js-todo-list');
  if (todoItems.length === 0) list.innerHTML = '';
}

    const form = document.querySelector('.js-form');
    form.addEventListener('submit', event => {
      event.preventDefault();
      const input = document.querySelector('.js-todo-input');

      const text = input.value.trim();
      if (text === '') {
        alert('You must write something!');
      } else if (text !== '') {
        addTodo(text);
        input.value = '';
        input.focus();
        localStorage.setItem("TODO", JSON.stringify(todoItems));
        
      }
    });
    const addBtn = document.querySelector('.addBtn');
    addBtn.addEventListener('click', event => {
      event.preventDefault();
      const input = document.querySelector('.js-todo-input');
      
      const text = input.value.trim();
      if (text === '') {
        alert('You must write something!');
      }
      else if (text !== '') {
        addTodo(text);
        input.value = '';
        input.focus();
        localStorage.setItem("TODO", JSON.stringify(todoItems));
    }}
    );


    
    const list = document.querySelector('.js-todo-list');
    list.addEventListener('click', event => {
      if (event.target.classList.contains('js-tick')) {
        const itemKey = event.target.parentElement.dataset.key;
        toggleDone(itemKey);
      }

      if (event.target.classList.contains('js-delete-todo')) {
        const itemKey = event.target.parentElement.dataset.key;
        deleteTodo(itemKey);
      }

    });
    list.addEventListener('dblclick', event => {
      if (event.target.classList.contains('li')) {
        event.target.parentNode.classList.toggle('done');
      }
    })

    list.addEventListener('click', event => {
      if (event.target.classList.contains('li')) {
        event.target.classList.toggle('selected');
      }
    })

    function removeAll(){
      const lst = document.getElementsByTagName('ol');
      lst[0].innerHTML = '';
    }

    const clearList = document.querySelector('#clear-list')
    clearList.addEventListener('click', removeAll)

    function removeChecked() {
      // todoItems.filter(a => a.checked === true);

      // todoItems.forEach(a => a.checked === true ? document.querySelector(`[data-key='${a.id}']`).remove() : null)

      // for(let i = 0; i < todoItems.length; i++) {
      //   if (todoItems[i].checked === true) {
      //     document.querySelector(`[data-key='${todoItems[i].id}']`).remove()
      //   }
      // }
      document.querySelectorAll('.done').forEach(a => a.remove());
    }

  const clearDone = document.querySelector('#clear-done');
  clearDone.addEventListener('click', removeChecked);

  
}
