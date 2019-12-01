let textoFormulario = document.querySelector('#textoFormulario')
const listaAtual = document.querySelectorAll('.listaTarefas')[0]
const botaoEnviar = document.querySelector('#botaoEnviar')
const elementoAtual = document.querySelectorAll('ol')
let conteudoElemento;




function itemListaPreenchido(event){
    event.preventDefault()
    novoElemento = document.createElement('li')
    novoElemento.innerText = textoFormulario.value
    elementoAtual[0].appendChild(novoElemento)
    textoFormulario.value = "";
}


botaoEnviar.addEventListener ( 'click', itemListaPreenchido )


