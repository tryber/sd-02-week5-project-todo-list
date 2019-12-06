let lista = document.getElementById("lista");
let itens = document.getElementsByTagName("li");
let input = document.getElementsByTagName('input')[0];
let botaoAdicionar = document.getElementById("adicionar");
let itemASerAdicionado;
let novoItem;
console.log(lista);
console.log(itemASerAdicionado);
console.log(botaoAdicionar);

botaoAdicionar.addEventListener('click', function() {
    
    itemASerAdicionado = input.value;
    novoItem = document.createElement('li');
    novoItem.innerHTML = itemASerAdicionado;
    document.getElementById("lista").appendChild(novoItem);
    input.value = "";
    novoItem.addEventListener('click', function() {
        this.classList.add("itemSelecionado");
    })
    novoItem.addEventListener('dblclick', function() {
        if (this.classList.contains("itemCompleto")) {
            this.className = "";
        } else {
            this.className = "itemCompleto";
        }
    })
 

//let textoItem = document.createTextNode("aaaaaaa");
//document.body.appendChild(novoItem);

})

//let itens = document.getElementsByTagName('li');
//for (let item of itens) {
//    item.addEventListener('click', function() {
//        console.log('deu certo');
//        this.style.background = '#87cefa';
//    })
//}

let botoes = document.getElementsByTagName('button');
for (let botao of botoes) {
    botao.addEventListener('mouseover', function() {
        this.style.cursor = "pointer";
    })
}

let botaoLimparLista = document.getElementById("limparLista");
let botaoLimparCompletos = document.getElementById("limparCompletos");

botaoLimparLista.addEventListener('click', function() {
    lista.innerHTML = "";
})

botaoLimparCompletos.addEventListener('click', function() {
    for (let i = itens.length - 1; i >= 0; i--) {
        if (itens[i].classList.contains("itemCompleto")) {
            itens[i].parentNode.removeChild(itens[i]);
            console.log(i);
        }
    }
    //if () {
      //  item.parentNode.removeChild(item);
    //}
})