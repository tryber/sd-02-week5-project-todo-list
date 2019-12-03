let lista = document.getElementById("lista");
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
        this.className = "itemSelecionado";
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