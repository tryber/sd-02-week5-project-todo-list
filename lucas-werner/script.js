let newTask= document.getElementById('newTask')

let addTask = document.getElementById('addTask')
    addTask.addEventListener('click', function(){
    if (newTask.value == '') {
        alert("Sem tarefas por hoje?");
        } else {
    let newItem = document.createElement('li');
    newItem.innerText = newTask.value;
    newItem.className = 'item';
    document.getElementById('list').appendChild(newItem);
    document.getElementById('newTask').value ='';
    newTask.value = null;
    newItem.addEventListener('click', function() {
    event.target.style.backgroundColor = 'red';
    event.target.style.color = 'blue'; 
    }
    )       


    }})

    let clear = document.getElementById('clear')
    clear.addEventListener('click', function(){
        let lista = document.getElementById('list')
        while (lista.firstChild){
        lista.removeChild(lista.firstChild)
        }
    })

    // let done = getElementById('done')
    // done.

