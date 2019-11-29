let newTask= document.getElementById('newTask')
let clear = document.getElementById('clear')
let addTask = document.getElementById('addTask')
let highlight = document.getElementsByClassName('highlight')
let lista = document.getElementById('list')


addTask.addEventListener('click', function(){
    if (newTask.value == '') {
        alert("Sem tarefas por hoje?");
        } else {
        fAddTask()
    }
})

clear.addEventListener('click', function(){
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
    console.log(event);
    // console.log(target)
    newItem.addEventListener('click', function() {
        const searchElement=document.querySelector('.highlight');
        
    if (searchElement===null) {
        event.target.className = 'highlight';    
    } else {
    searchElement.className = '';    
    event.target.className = 'highlight'; 
    }})


    newItem.addEventListener('dblclick', function(){
    event.target.className = 'doneItem';
}
)
}
let done = document.getElementById('done')
    done.addEventListener('click', function(){
    var elements = document.getElementsByClassName ('doneItem');
            while (elements.length > 0){
                elements[0].parentNode.removeChild(elements[0]);
            }
    }
)
