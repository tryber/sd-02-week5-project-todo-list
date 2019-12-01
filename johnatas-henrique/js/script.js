const criarTarefa = document.querySelector('.criar-tarefa');
const textoTarefa = document.querySelector('#texto-tarefa');
const listaOrdenada = document.querySelector('ol');

/* Escrever texto do input na li */

function textonaLista (){
    let itemLista = document.createElement('li');
    itemLista.innerText = textoTarefa.value;
    itemLista.className = 'tarefa tarefa-ativa';
    textoTarefa.value = '';
    listaOrdenada.appendChild(itemLista);
}

criarTarefa.addEventListener('click', textonaLista);




