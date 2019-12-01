const criarTarefa = document.querySelector('.criar-tarefa');
const textoTarefa = document.querySelector('#texto-tarefa');
listaOrdenada = document.querySelector('ol');

/* Escrever texto do input na li */

function textonaLista() {
  let itemLista = document.createElement('li');
  itemLista.innerText = textoTarefa.value;
  itemLista.className = 'tarefa tarefa-ativa';
  textoTarefa.value = '';
  listaOrdenada.appendChild(itemLista);
  listaOrdenada.querySelectorAll('li').forEach(singleClickTarefa);
  listaOrdenada.querySelectorAll('li').forEach(doubleClickTarefa);
}

criarTarefa.addEventListener('click', textonaLista);

/* Selecionar tarefa - single-click */

function selecionaTarefa(event) {
  tamLista = listaOrdenada.querySelectorAll('li').length;
  for (let i = 0; i < tamLista; i++) {
    listaOrdenada.querySelectorAll('li')[i].classList.remove('tarefa-selecionada');
  }
  event.target.classList += ' tarefa-selecionada';
}

function singleClickTarefa(item) {
  item.addEventListener('click', selecionaTarefa);
}

listaOrdenada.querySelectorAll('li').forEach(singleClickTarefa);

/* Riscar tarefa double-click */

function riscaTarefa(event) {
  listaTodasClasses = event.target.className;
  buscaRisco = listaTodasClasses.indexOf('tarefa-riscada')
  if (buscaRisco != -1) {
    event.target.classList.remove('tarefa-riscada');
    event.target.classList += ' tarefa-ativa';
  } else {
    event.target.classList.remove('tarefa-ativa');
    event.target.classList += ' tarefa-riscada';
  }
}

function doubleClickTarefa(item) {
  item.addEventListener('dblclick', riscaTarefa);
}

listaOrdenada.querySelectorAll('li').forEach(doubleClickTarefa);
