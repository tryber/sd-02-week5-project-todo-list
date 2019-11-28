const ok = document.getElementById ('envia');
let entrada = document.getElementById ('entrada');
const pegaOl= document.querySelector('ol');

ok.addEventListener ( 'click', function () {
  adicionaLinha (entrada.value);
})

function adicionaLinha (argumento) {
  const criaLi = document.createElement ('li');
  pegaOl.appendChild (criaLi);
  criaLi.innerText = argumento;
  criaLi.classList = ('class', 'item');
}

const itens = document.querySelectorAll('item');
itens.addEventListener('click')
