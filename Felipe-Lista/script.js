// Adiciona Item na Lista

let textoFormulario = document.querySelector('#textoFormulario');
const botaoEnviar = document.querySelector('#botaoEnviar');
let elementoAtual = document.querySelector('ol');

function itemListaPreenchido() {
  let novoElemento = document.createElement('li');
  novoElemento.className = "itemLista";
  novoElemento.innerText = textoFormulario.value;
  elementoAtual.appendChild(novoElemento);
  textoFormulario.value = '';
  textoFormulario.focus();

}

botaoEnviar.addEventListener('click', itemListaPreenchido);


//Apaga item selecionado

let apagarTudo = document.querySelector('#apagarTudo')

apagarTudo.onclick = () => {
  limpaTudo = document.getElementsByClassName('itemLista')
  limpaTudo.length
  if (limpaTudo.length >= 1) {
    for (i = 0; i = limpaTudo.length; i++) {
      limpaTudo[length].remove(i)
    }
  } else {
    alert("Não há itens para excluir")
  }
  limpaTudo.length
}


//Apaga Selecionado

let apagarSelecionado = document.querySelector('#apagarSelecionado')

apagarSelecionado.onclick = () => {
  limpaSelecionado = document.getElementsByClassName('riscado')
  limpaSelecionado.length
  if (limpaSelecionado.length >= 1) {
    for (i = 0; i = limpaSelecionado.length; i++) {
      limpaSelecionado[length].remove(i)
    }
  } else {
    alert("Não há itens selecionados para apagar")
  }
}


//Double Click Risca Item

elementoAtual.addEventListener('dblclick', function () {
  resultado = event.target
  resultado.classList.toggle("riscado")

})

//Seleciona item

elementoAtual.addEventListener('click', function () {
  resultado = event.target
  resultado.classList.toggle("selecionado")
})
