let tarefa;

let moveCima = document.querySelector('#move-cima');

let moveBaixo = document.querySelector('#move-baixo');

let criaTarefa = document.querySelector("#botao-tarefa");

let removeTarefa = document.querySelector("#remove-tarefa");

let removeCumprido = document.querySelector("#remove-cumpridos");

let digitaTexto = document.querySelector('#digita-texto');

let lista = document.querySelector('#tarefas');

let tarefaAberta = document.querySelector('.tarefa-aberta');

moveCima.onload = desabilitaSetas(true);
moveBaixo.onload = desabilitaSetas(true);

//adiciona a tarefa
criaTarefa.addEventListener("click", adicionaTarefa)
digitaTexto.addEventListener('keyup',function(event){
  if (event.keyCode === 13) {
    adicionaTarefa();
  }
});

function adicionaTarefa() {
  if (digitaTexto.value == 0){
    alert ('Por favor, digite uma tarefa.');
  }else{
    let tarefa = document.createElement('div');
    tarefa.setAttribute ('class', 'tarefa-aberta');
    tarefa.innerHTML = digitaTexto.value;
    tarefas.appendChild(tarefa);
    if(document.querySelectorAll('.tarefa-aberta').length >= 2) { 
      desabilitaSetas(false)
    }else{
      desabilitaSetas(true)
    }
    digitaTexto.value=null;
  }};

// //riscar item com duplo clique
lista.addEventListener('dblclick', function(event){
    event.target.classList.toggle('cumprido');
    event.target.classList.remove('clicada')
})

//destaca a tarefa quando clicada, e remove o destaque das demais
lista.addEventListener('click', function(event){
  //para retirar os anteriores
  tarefa = document.querySelectorAll('.tarefa-aberta');
  tamanhoLista = document.querySelectorAll('.tarefa-aberta').length
  for (i=0; i < tamanhoLista;i++){
    tarefa[i].classList.remove('clicada');
  }
  //para destacar
  event.target.classList.add("clicada");
  })

//move tarefas pra cima
moveCima.addEventListener('click', function(clicada){
  let primeiraTarefa = document.querySelector('.tarefa-aberta').firstChild;
  clicada = document.querySelector('.clicada');
  if(clicada.previousElementSibling){
    clicada.parentNode.insertBefore(clicada, clicada.previousElementSibling);
  }
})

//desabilita setas
function desabilitaSetas(x){
  moveCima.disabled = x;
  moveBaixo.disabled = x;
}

//move tarefas pra baixo
moveBaixo.addEventListener('click', function(clicada){
  clicada = document.querySelector('.clicada');
  if(clicada.nextElementSibling){
    clicada.parentNode.insertBefore(clicada.nextElementSibling, clicada);
  }
})

//apaga todas as tarefas
removeTarefa.addEventListener("click", function() {
  if (document.querySelectorAll('.tarefa-aberta').length == 0){
    alert ('A sua lista está vazia.');
  }else{
    let listaDeTarefas = document.querySelector('#tarefas');
    while (listaDeTarefas.firstChild) {
      listaDeTarefas.removeChild(listaDeTarefas.firstChild)
    }
      desabilitaSetas(true);
  }})

//apaga só as cumpridas
removeCumprido.addEventListener("click", function() {
  if (tamanhoLista = document.querySelectorAll('.cumprido').length == 0){
    alert ('Não há tarefas cumpridas');
  }else{
    tarefa = document.querySelectorAll('.cumprido');
    tamanhoLista = document.querySelectorAll('.cumprido').length
    for (i=0; i < tamanhoLista;i++){
      tarefa[i].remove()
  }
    if(document.querySelectorAll('.tarefa-aberta').length >= 2) { 
      desabilitaSetas(false)
    }else{
      desabilitaSetas(true)
    }}
});
