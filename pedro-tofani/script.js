
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
    ponteiroConteudoDoInput.value = ''
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
function removerCompletos() {
    for (let i = 0; i < ponteiroItemLista.length; i++) {
        if (ponteiroItemLista[i].style.textDecoration == 'line-through') {
            ponteiroOL.removeChild(ponteiroItemLista[i]);
            i -= 1;
        }
    }
}

let ponteiroBotaolimparTudo = document.getElementById('limparTudo');
ponteiroBotaolimparTudo.addEventListener('click', removerTudo);
function removerTudo() {
    let loops = ponteiroItemLista.length
    for (let i = 0; i < loops; i++) {
        ponteiroOL.removeChild(ponteiroItemLista[0]);
    }
}

let ponteiroBotaoSalvar = document.getElementById('salvar');
ponteiroBotaoSalvar.addEventListener('click', salvar);
function salvar() {
    localStorage.clear();
    for (let i = 0; i < ponteiroItemLista.length; i++) {
        localStorage.setItem(i, ponteiroItemLista[i].innerHTML + ' ' + ponteiroItemLista[i].style.textDecoration)
    }
}

let ponteiroBotaoSubir = document.getElementById('subir');
ponteiroBotaoSubir.addEventListener('click', subir);
let ponteiroBotaoDescer = document.getElementById('descer');
ponteiroBotaoDescer.addEventListener('click', descer);

function subir() {

}

window.onload = function () {
    removerTudo();
    let ponteiroOL = document.getElementById('listaDeAfazeres');
    let i = localStorage.length;
    for (let j = 0; j < i; j++) {
        let criarLi = document.createElement('li')
        let novaString = localStorage.getItem(j)
        let novoArranjo = novaString.split(' ')
        criarLi.innerHTML = novoArranjo[0]
        criarLi.style.textDecoration = novoArranjo[1]
        criarLi.className = 'itemLista'
        criarLi.addEventListener('click', selecionarItemLista)
        criarLi.addEventListener('dblclick', riscar)
        ponteiroOL.appendChild(criarLi);
    }
}
