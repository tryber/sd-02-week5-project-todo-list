
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

let ponteiroBotaoRemoverSelecionado = document.getElementById('removerSelecionado');
ponteiroBotaoRemoverSelecionado.addEventListener('click', removerSelecionado);
function removerSelecionado() {
    for (let i = 0; i < ponteiroItemLista.length; i++) {
        if (ponteiroItemLista[i].style.color == 'red') ponteiroOL.removeChild(ponteiroItemLista[i]);
    }
}

let ponteiroBotaoLimparCompletos = document.getElementById('limparCompletos');
ponteiroBotaoLimparCompletos.addEventListener('click', removerCompletos);
function removerCompletos(){
    for (let i = 0; i < ponteiroItemLista.length; i++) {
        if (ponteiroItemLista[i].style.textDecoration == 'line-through') ponteiroOL.removeChild(ponteiroItemLista[i]);
    }
}