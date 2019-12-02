let botaoAdicionar = document.getElementById("adicionar");
let texto = document.getElementById("texto");
texto.value = null;

botaoAdicionar.addEventListener('click', cliqueAdicionar)

function cliqueAdicionar() {
  if (texto.value == "");
  else {
    let itemLista = document.createElement("li");
    itemLista.innerHTML = texto.value;
    itemLista.classList.add("item");
    document.getElementById("lista").appendChild(itemLista);
    texto.value = null;
    itemLista.addEventListener('click', selecionarItem);
    itemLista.addEventListener('dblclick', riscarItem);
  }
}

texto.addEventListener('keypress', function (e) {
  if(e.keyCode == 13) {
    cliqueAdicionar();
  }
})

let itemSelecionado = document.getElementsByClassName("item");
function selecionarItem() {
  if(this.style.backgroundColor == "rgb(189, 189, 189)") {
    for(let element of itemSelecionado) {
    element.style.backgroundColor = "transparent";
    }
  }
  else {
    for(let element2 of itemSelecionado) {
      element2.style.backgroundColor = "transparent";
      }
  this.style.backgroundColor = "rgb(189, 189, 189)";
  }
}

function riscarItem() {
  if(this.style.textDecoration == "line-through") {
    event.target.style.textDecoration = "";
  }
  else {
    this.style.textDecoration = "line-through";
  }
}

let botaoEliminarRiscados = document.getElementById("limparCumpridas");
botaoEliminarRiscados.addEventListener('click', eliminarItensRiscados);
function eliminarItensRiscados() {
  let itemRiscado = document.getElementsByClassName("item");
  for(let element4 of itemRiscado) {  
    if(element4.style.textDecoration == "line-through") {
      console.log(element4)
      element4.remove();
      
    } else {}
  }
}

let botaoEliminarTudo = document.getElementById("eliminarTudo");
botaoEliminarTudo.addEventListener('click', eliminarTudo);
function eliminarTudo() {
  let item = document.getElementsByClassName("item");
  for(let element5 of item) {  
      element5.remove();
  }
}