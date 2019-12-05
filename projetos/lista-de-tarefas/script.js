let adicionar = document.getElementById('adiciona-item');
let inputItem = document.getElementById('escreve-item');
let listaOrdenada = document.getElementById('lista');

/* Código abaixo faz o botão, Adicionar, adicionar o que foi escrito no input */
let item;
adicionar.addEventListener('click', function(){
    if(inputItem.value == ""){
        alert('Espaço em branco. Digite algo e clique em Adicionar');
    }else{
        item = document.createElement('li');
        listaOrdenada.appendChild(item);
        item.innerText = inputItem.value;
        inputItem.value = null;
    }
});
/* --------------------------------------------------------------------- */
/* Código abaixo define um backgroundColor #4169E1 no item selecionado da lista ordenada chamada listaOrdenada */
let selecionados;
listaOrdenada.addEventListener('click', function(event){
    event.target.setAttribute('class', 'selecionado');
    selecionados = document.getElementsByClassName('selecionado');
});
/* --------------------------------------------------------------------- */
/* Código abaixo exclui os itens selecionados que estão identificados com o backgroundColor na cor #4169E1 */
let excluirSelecao = document.getElementById('excluir-selecao');
excluirSelecao.addEventListener('click', function(){
    for(let c = selecionados.length - 1; c >= 0; c-- ){
        selecionados[c].remove();
    }
});
/* --------------------------------------------------------------------- */
/* Código abaixo desfaz a seleção dos intens com o backgroundColor #4169E1 */
let desfazerSelecao = document.getElementById('desfazer-selecao');
desfazerSelecao.addEventListener('click', function(){
    for( let x = selecionados.length  -1; x >= 0; x--){
        selecionados[x].style.backgroundColor = "";
        selecionados[x].removeAttribute('class', 'selecionado');
    }
});
/* Código abaixo define textDecoration = line-through no item selecionado da lista ordenada chamada listaOrdenada, utilizando dois cliques */
let completadas;
listaOrdenada.addEventListener('dblclick', function(event){
    if(event.target.style.textDecoration == 'line-through'){
        event.target.style.textDecoration = 'none';
        event.target.removeAttribute('class', 'completada');
        event.target.removeAttribute('class', 'selecionado')
    }else{
        event.target.style.textDecoration = 'line-through'
        event.target.setAttribute('class', 'completada');
        completadas = document.getElementsByClassName('completada');
    }
});
/* --------------------------------------------------------------------- */
/* Código abaixo exclui os itens selecionados que estão identificados com o a linha traçada no meio das palavras*/
let botaoLimparCompletos = document.getElementById('limpar-completos');
botaoLimparCompletos.addEventListener('click', function(){
    for(let i = completadas.length - 1; i >= 0; i--){
        completadas[i].remove();
    }
});
/* --------------------------------------------------------------------- */
/* Código abaixo limpa toda a lista */
let botaoLimparLista = document.getElementById('limpar-lista');
botaoLimparLista.addEventListener('click', function(){
    listaOrdenada.innerHTML = "";
});
/* --------------------------------------------------------------------- */






