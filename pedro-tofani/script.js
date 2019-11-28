
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
    if (this.style.color == 'red') { this.style.color = 'black' }
    else { this.style.color = 'red' };
}

function riscar() {
    if (this.style.textDecoration == 'line-through') this.style.textDecoration = '';
    else this.style.textDecoration = 'line-through'
}