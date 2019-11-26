window.onload = function (){
    let toDoItems = []

    function addToDo (text) {
        const toDo ={
            text,
            checked: false,
            id: Date.now(),
        };
        toDoItems.push(toDo);
        
        const list = document.querySelector(".js-todo-list");
        
        list.insertAdjacentHTML ("beforeend", `
        <li class="todo-item" data-key="${toDo.id}">
            <input id="${toDo.id}" type="checkbox" />
            <label for="${toDo.id}" class="tick js-tick"></label>
            <span>${toDo.text}</span>
            <button class="delete-todo js-delete-todo">
                <svg><use href="#delete-icon"></use></svg>
            </button>
        </li>
        `);
    }
    const form = document.querySelector('.js-form');
    form.addEventListener('submit', event => {
        event.preventDefault();
        const input = document.querySelector('.js-todo-input');

        const text = input.value.trim();

        if (text !== "") {
            addToDo(text);
            input.value = "";
            input.focus();
        }
    })
}