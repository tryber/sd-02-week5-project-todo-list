
let ponteiroItemLista = document.getElementsByClassName('itemLista');

for (let i = 0; i < ponteiroItemLista.length; i++){
    ponteiroItemLista[i].addEventListener('click', selecionarItemLista)
}

function selecionarItemLista (){
    if (this.style.color == 'red') {this.style.color = 'black'}
    else {this.style.color = 'red'};
}