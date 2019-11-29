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

let completadas;

listaOrdenada.addEventListener('dblclick', function(event){
    if(event.target.style.textDecoration == 'line-through'){
        event.target.style.textDecoration = 'none';
        event.target.setAttribute('class', '');
    }else{
        event.target.style.textDecoration = 'line-through'
        event.target.setAttribute('class', 'completada');
        completadas = document.getElementsByClassName('completada');
    }
    console.log(completadas.length);
})

let botaoLimparCompletos = document.getElementById('limpar-completos');

let tarefas = listaOrdenada.children;

botaoLimparCompletos.addEventListener('click', function(){
    
     for(let i = 0; i < completadas.length; i++){
        completadas[i].remove();
    }
})

let botaoLimparLista = document.getElementById('limpar-lista');

botaoLimparLista.addEventListener('click', function(){
    listaOrdenada.innerHTML = "";
    /* for(let i = 0; i < tarefas.length; i++){
        console.log(tarefas[i].innerText)
         listaOrdenada.removeChild(tarefas[i]); 
    } */
})


