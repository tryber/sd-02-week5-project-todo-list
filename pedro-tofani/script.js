
let ponteiroItemLista = document.getElementsByClassName('itemLista');

let ponteiroBotaoAdicionarTarefa = document.getElementById('adicionarTarefa');
let ponteiroConteudoDoInput = document.getElementById('descricaoTarefa');
let ponteiroOL = document.getElementById('listaDeAfazeres');
ponteiroBotaoAdicionarTarefa.addEventListener('click', adicionarTarefa);

function adicionarTarefa() {
    let criarLi = document.createElement('li')
    criarLi.innerHTML = ponteiroConteudoDoInput.value;
    criarLi.className = 'itemLista'
    criarLi.addEventListener('click', selecionarItemLista)
    criarLi.addEventListener('dblclick', riscar)
    ponteiroOL.appendChild(criarLi);
}

function selecionarItemLista() {
    let ponteiroItemLista = document.getElementsByClassName('itemLista');
    if (this.style.color == 'red') {
        for (let i = 0; i < ponteiroItemLista.length; i++) {
            ponteiroItemLista[i].style.color = 'black';
        }
    }
    else {
        for (let i = 0; i < ponteiroItemLista.length; i++) {
            ponteiroItemLista[i].style.color = 'black';
        }
        this.style.color = 'red'
    }
}

    function riscar() {
        if (this.style.textDecoration == 'line-through') this.style.textDecoration = '';
        else this.style.textDecoration = 'line-through'
    }