// Adiciona Item na Lista
let corSelecionado = 'transparent'

let textoFormulario = document.querySelector('#textoFormulario');
let botaoEnviar = document.querySelector('#botaoEnviar');
const elementoAtual = document.querySelector('ol');
let itemSelecionado=document.querySelectorAll('li');

const trocarCor = (elemento, cor) => {
    elemento.style.backgroundColor = cor
  }

const selecionaItem = (event) => {
    selecionado = event.target
    selecionado.className = "selecionado"
}

const itemDaListaClique = (event) => {
    selecionado = event.target
    selecionado.className = "itemLista selecionado"
}


function itemListaPreenchido(){
    let novoElemento = document.createElement('li');
    novoElemento.className = "itemLista";
    novoElemento.onclick = itemDaListaClique
    novoElemento.innerText = textoFormulario.value;
    elementoAtual.appendChild(novoElemento);
    textoFormulario.value = '';
    textoFormulario.focus();

}

botaoEnviar.addEventListener ( 'click', itemListaPreenchido );


itemSelecionado.forEach(element => {
    element.onclick = () => {
        selecionaItem
    }
});

