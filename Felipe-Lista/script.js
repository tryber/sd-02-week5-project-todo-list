const textoFormulario = document.querySelector('#textoFormulario').value
const listaAtual = document.querySelectorAll('.listaTarefas')[0]
const botaoEnviar = document.querySelector('#botaoEnviar')
const elementoAtual = document.querySelectorAll('ol')


function itemListaPreenchido(){
    novoElemento = document.createElement('li')
    conteudoElemento = document.createTextNode(textoFormulario)
    novoElemento.appendChild(conteudoElemento)
    elementoAtual[0].appendChild(novoElemento)
}


botaoEnviar.addEventListener ( 'click', itemListaPreenchido )


