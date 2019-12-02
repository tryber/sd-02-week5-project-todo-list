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
    // localStorage.setItem(itemLista.innerHTML, texto.value);
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

let botaoDescerItem = document.getElementById("setaBaixo");
botaoDescerItem.addEventListener('click', descerItem);
function descerItem() {
  for(let element3 of itemSelecionado) {
    if(element3.style.backgroundColor == "rgb(189, 189, 189)") {
        let pai = element3.parentNode;
        if (element3 == pai.lastChild) {}
    else {
        pai.insertBefore(element3.nextElementSibling, element3);
      }
    }
  }
}

let botaoSubirItem = document.getElementById("setaCima");
botaoSubirItem.addEventListener('click', subirItem);
function subirItem() {
  for(let element3 of itemSelecionado) {
    if(element3.style.backgroundColor == "rgb(189, 189, 189)") {
      let pai = element3.parentNode;
      if (element3 == pai.firstChild) {}
      else {
      let prev = element3.previousSibling;
      let oldChild = pai.removeChild(element3);
      pai.insertBefore(oldChild, prev);
      }
    }
  }
}

let botaoRemoverItem = document.getElementById("removerItem");
botaoRemoverItem.addEventListener('click', removerItem);
function removerItem() {
  for(let element4 of itemSelecionado) {
    if(element4.style.backgroundColor == "rgb(189, 189, 189)") {
        element4.remove();
    }
  }
}

let botaoEliminarRiscados = document.getElementById("limparCumpridas");
botaoEliminarRiscados.addEventListener('click', eliminarItensRiscados);
function eliminarItensRiscados() {
  let itemRiscado = document.querySelectorAll(".item");
  for(let element5 of itemRiscado) {  
    if(element5.style.textDecoration == "line-through") {
      element5.remove();
    }
  }
}

let botaoEliminarTudo = document.getElementById("eliminarTudo");
botaoEliminarTudo.addEventListener('click', eliminarTudo);
function eliminarTudo() {
  let item = document.querySelectorAll(".item");
  for(let element6 of item) {  
      element6.remove();
  }
}
