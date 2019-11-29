let newTask= document.getElementById('newTask')
    newTask.addEventListener('change', function(){
    newTask = this.value;}
    );
    
let addTask = document.getElementById('addTask')
    addTask.addEventListener('click', function(){
    if (newTask.value == '' || newTask == '') {
        alert("Sem tarefas por hoje?");
        } else {
    let newItem = document.createElement('li');
    newItem.innerText = newTask;
    newItem.className = 'item';
    document.getElementById('list').appendChild(newItem);
    document.getElementById('newTask').value ='';
    newTask = '';
    newItem = '';

    }})

    // let highlight = document.getElementsByClassName('item')
    // highlight.addEventListener('click', function () {
    
    // }
    // )

    //limpar

    let clear = document.getElementById('clear')
    clear.addEventListener('click', function(){
        let lista = document.getElementById('list')
        while (lista.firstChild){
        lista.removeChild(lista.firstChild)
        }
    })

    // let done = getElementById('done')
    // done.

