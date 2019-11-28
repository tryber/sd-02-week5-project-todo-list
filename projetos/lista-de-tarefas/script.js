let adicionar = document.getElementById('adiciona-item');
let inputItem = document.getElementById('escreve-item');
let listaOrdenada = document.getElementById('lista');
let item;

adicionar.addEventListener('click', function(){
    if(inputItem.value == ""){
        alert('Espaço em branco. Digite algo e clique em Adicionar');
    }else{
        item = document.createElement('li');
        listaOrdenada.appendChild(item);
        item.innerText = inputItem.value;
        inputItem.value = null;
    }
})

listaOrdenada.addEventListener('click', function(event){
    event.target.style.backgroundColor = '#4169E1';
})

listaOrdenada.addEventListener('dblclick', function(event){
    if(event.target.style.textDecoration == 'line-through'){
        event.target.style.textDecoration = 'none'
    }else{
        event.target.style.textDecoration = 'line-through'
    }
})

let botaoLimparCompletos = document.getElementById('limpar-completos');

let tarefas = listaOrdenada.children;

botaoLimparCompletos.addEventListener('click', function(){
    for(let i = 0; i < tarefas.length; i++){
        if(tarefas[i].style.textDecoration == 'line-through'){
            listaOrdenada.removeChild(tarefas[i])
        } 
    } 
})

let botaoLimparLista = document.getElementById('limpar-lista');

botaoLimparLista.addEventListener('click', function(){
    for(let i = 0; i < tarefas.length; i++){
        listaOrdenada.removeChild(tarefas[i]);
    }
})