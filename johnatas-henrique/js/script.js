const criarTarefa = document.querySelector('.criar-tarefa');
const textoTarefa = document.querySelector('#texto-tarefa');
listaOrdenada = document.querySelector('ol');
botaoApagarRiscadas = document.querySelector('.apagar-riscadas');
botaoApagarSelecionada = document.querySelector('.apagar-selecionada');
botaoApagarTudo = document.querySelector('.apagar-tudo');

/* Escrever texto do input na li */

function textonaLista() {
  let itemLista = document.createElement('li');
  itemLista.innerText = textoTarefa.value;
  itemLista.className = 'tarefa tarefa-ativa';
  textoTarefa.value = '';
  listaOrdenada.appendChild(itemLista);
  textoTarefa.focus();
  listaOrdenada.querySelectorAll('li').forEach(singleClickTarefa);
  listaOrdenada.querySelectorAll('li').forEach(doubleClickTarefa);
}

criarTarefa.addEventListener('click', textonaLista);

/* Selecionar tarefa - single-click */

function selecionaTarefa(event) {
  let tamLista = listaOrdenada.querySelectorAll('li').length;
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
  let listaTodasClasses = event.target.className;
  let buscaRisco = listaTodasClasses.indexOf('tarefa-riscada')
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

/* Botão apagar riscados */

function apagarRiscadas(){
    let itemListaOrdenada = listaOrdenada.querySelectorAll('li');
    for (let i= 0 ; i< itemListaOrdenada.length; i++ ){
       let listaTodasClasses = itemListaOrdenada[i].className;
       let buscaRisco = listaTodasClasses.indexOf('tarefa-riscada');
       if (buscaRisco !=-1) {
           itemListaOrdenada[i].parentNode.removeChild(itemListaOrdenada[i]);
       }
    }
}

botaoApagarRiscadas.addEventListener('click',apagarRiscadas);

/* Botão apagar tudo */

function apagarTudo(){
    listaOrdenada.innerHTML = '';
}

botaoApagarTudo.addEventListener('click',apagarTudo);

/* Botão apagar selecionado */

function apagarSelecionada(){
    let itemListaOrdenada = listaOrdenada.querySelectorAll('li');
    for (let i= 0 ; i< itemListaOrdenada.length; i++ ){
       let listaTodasClasses = itemListaOrdenada[i].className;
       let buscaRisco = listaTodasClasses.indexOf('tarefa-selecionada');
       if (buscaRisco !=-1) {
           itemListaOrdenada[i].parentNode.removeChild(itemListaOrdenada[i]);
       }
    }
}

botaoApagarSelecionada.addEventListener('click',apagarSelecionada);
