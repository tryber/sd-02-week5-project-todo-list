/* global window . */
/* global document . */

function adicionar() {
  const text = document.getElementById('input_tarefas').value;
  const addTarefas = document.createElement('li');
  addTarefas.classList.add('lista_tarefas');
  const textNode = document.createTextNode(text);
  addTarefas.appendChild(textNode);
  document.getElementById('ol_lista_tarefas').appendChild(addTarefas);
  document.getElementById('input_tarefas').value = '';
}

function tarefaCompleta(event) {
  const listaTexto = event.target;
  document.querySelectorAll('.lista_tarefas').forEach(element => {
    if (listaTexto === element) {
      if (listaTexto.style.textDecoration === 'line-through') {
        listaTexto.style.textDecoration = 'none';
      } else {
        listaTexto.style.textDecoration = 'line-through';
      }
    }
  });
}

function removerTarefasCompletas() {
  const listaTarefas = document.getElementById('ol_lista_tarefas');
  const tamanhoLista = document.querySelectorAll('#ol_lista_tarefas li').length;
  for (let i = tamanhoLista - 1; i >= 0; i -= 1) {
    const listaTexto = listaTarefas.childNodes[i].style.textDecoration;
    if (listaTexto === 'line-through') {
      listaTarefas.removeChild(listaTarefas.childNodes[i]);
    }
  }
}

function apagarLista() {
  const listaTarefas = document.getElementById('ol_lista_tarefas');
  const tamanhoLista = document.querySelectorAll('#ol_lista_tarefas li').length;
  for (let i = 0; i < tamanhoLista; i += 1) {
    listaTarefas.removeChild(listaTarefas.childNodes[0]);
  }
}

function selecionarTarefa() {
  const listaTexto = event.target;  
  document.querySelectorAll('.lista_tarefas').forEach(element => {
   if (listaTexto === element){     
    if (listaTexto.style.backgroundColor === 'red') {      
      listaTexto.style.backgroundColor = 'white';
    } else {
      listaTexto.style.backgroundColor = 'red';
    }
   }
  });
}

window.onload = function start() {
  const buttonAdd = document.getElementById('button_tarefas');
  buttonAdd.addEventListener('click', adicionar);
  const buttonClear = document.getElementById('button_apagar_lista');
  buttonClear.addEventListener('click', apagarLista);
  const tarefasLi = document.getElementById('ol_content');  
  tarefasLi.addEventListener('click', selecionarTarefa);
  tarefasLi.addEventListener('dblclick', tarefaCompleta);
  const buttonTarefasCompletas = document.getElementById('button_remover_completos');
  buttonTarefasCompletas.addEventListener('click', removerTarefasCompletas);
  
};
