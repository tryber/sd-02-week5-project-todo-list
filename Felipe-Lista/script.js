// Adiciona Item na Lista

let textoFormulario = document.querySelector('#textoFormulario')
let botaoEnviar = document.querySelector('#botaoEnviar')
let elementoAtual = document.querySelectorAll('ol')
let conteudoElemento;
let lista

let listaAtual = document.querySelectorAll('.listaTarefas')
let listaIndividual;

function itemListaPreenchido(event){
    event.preventDefault()
    novoElemento = document.createElement('li')
    novoElemento.className = "itemLista"
    novoElemento.innerText = textoFormulario.value
    elementoAtual[0].appendChild(novoElemento)
    textoFormulario.value = "";

}

elementoAtual.forEach(elemento => {
    elemento.onclick = () => {
        let click = elementoAtual[0].getElementsByClassName('itemLista')
        console.log(click)
    } 
  })

function adicionaClasse (event){

}

botaoEnviar.addEventListener ( 'click', itemListaPreenchido )

// Seleciona Item da Lista


