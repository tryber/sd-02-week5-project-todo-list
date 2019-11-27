window.onload = function () {
  const buttonAdd = document.getElementById('button_tarefas');
  buttonAdd.addEventListener("click", adicionar);
  const buttonClear = document.getElementById('button_apagar_lista');
  buttonClear.addEventListener("click", apagarLista);
  const tarefasLi = document.getElementById('ol_content');
  tarefasLi.addEventListener("dblclick", tarefaCompleta);
  const buttonTarefasCompletas = document.getElementById('button_remover_completos');
  buttonTarefasCompletas.addEventListener("click", removerTarefasCompletas);
}

function adicionar (event) {
  let text = document.getElementById('input_tarefas').value;
  let addTarefas = document.createElement('li');
  addTarefas.classList.add('lista_tarefas');  
  let textNode = document.createTextNode(text);
  addTarefas.appendChild(textNode);
  document.getElementById('ol_lista_tarefas').appendChild(addTarefas);
  document.getElementById('input_tarefas').value = '';   
}

function tarefaCompleta (event) {
  let listaTexto = event.target;
  if (listaTexto.style.textDecoration === 'line-through') {
    listaTexto.style.textDecoration = 'none';
  } else {
    listaTexto.style.textDecoration = 'line-through';
  }
}

function removerTarefasCompletas (event) {
  const listaTarefas = document.getElementById('ol_lista_tarefas');
  let tamanhoLista = document.querySelectorAll('#ol_lista_tarefas li').length;
  for (i=tamanhoLista-1;i>=0;i--){
    let listaTexto = listaTarefas.childNodes[i].style.textDecoration;
    if(listaTexto === 'line-through')
    listaTarefas.removeChild(listaTarefas.childNodes[i]);
  }
}

function apagarLista (event) {
  const listaTarefas = document.getElementById('ol_lista_tarefas');
  let tamanhoLista = document.querySelectorAll('#ol_lista_tarefas li').length;
  for (i=0;i<tamanhoLista;i++){
    listaTarefas.removeChild(listaTarefas.childNodes[0]);
  }
}
