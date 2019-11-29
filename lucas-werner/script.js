let newTask= document.getElementById('newTask')
let clear = document.getElementById('clear')
let addTask = document.getElementById('addTask')

addTask.addEventListener('click', function(){
    if (newTask.value == '') {
        alert("Sem tarefas por hoje?");
        } else {
        fAddTask()
    }
})

clear.addEventListener('click', function(){
    let lista = document.getElementById('list')
    while (lista.firstChild){
    lista.removeChild(lista.firstChild)
    }
})

newTask.addEventListener('keypress', function(e) {
    if(e.keyCode == 13 && newTask.value == '') {
        alert ("Sem tarefas por hoje?")
    } else if (e.keyCode == 13) {
    fAddTask() }
})

function fAddTask () {
    let newItem = document.createElement('li');
    newItem.innerText = newTask.value;
    newItem.className = 'item';
    document.getElementById('list').appendChild(newItem);
    document.getElementById('newTask').value ='';
    newTask.value = null;
    newItem.addEventListener('click', function() {
    event.target.style.color = 'yellow'; 
    }
    )       
 }
    
   

    // let done = getElementById('done')
    // done.