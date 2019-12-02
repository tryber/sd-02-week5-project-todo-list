// Adiciona Item na Lista

let textoFormulario = document.querySelector('#textoFormulario');
let botaoEnviar = document.querySelector('#botaoEnviar');
const elementoAtual = document.querySelector('ol');
let itemSelecionado=document.querySelectorAll('li');
let conteudoElemento;
let lista;
var numero=0
let listaAtual = document.querySelectorAll('.listaTarefas')
let listaIndividual;
function itemListaPreenchido(){
    let novoElemento = document.createElement('li');
    novoElemento.className = "itemLista";
    novoElemento.onclick = function() { novoElemento.style };
    novoElemento.innerText = textoFormulario.value;
    elementoAtual.appendChild(novoElemento);
    textoFormulario.value = '';
    textoFormulario.focus();
    numero+=1
    console.log(numero)

    itemSelecionado=document.querySelectorAll('li')
    //itemSelecionado = document.querySelectorAll('li')
}

botaoEnviar.addEventListener ( 'click', itemListaPreenchido );

// itemSelecionado.addEventListener('click',function(e){
//  console.log(e)
// });
