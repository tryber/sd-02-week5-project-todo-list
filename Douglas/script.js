const ok = document.getElementById('envia');
const entrada = document.getElementById('entrada');
const pegaOl = document.querySelector('ol');
const botoes = document.querySelectorAll('button');
const apagaTudo = document.getElementById('apagarTudo');
const apagaRealizado = document.getElementById('apagarCompletos');
let apaga = document.querySelectorAll('.risca');

function removeTudo() {
  apagaTudo.addEventListener('click', function () {
    const pegandoOl = document.querySelector('ol');
    pegandoOl.innerHTML = '';
  });
}

function risca(criaLi) {
  criaLi.addEventListener('dblclick', function() {
    criaLi.classList.toggle('risca');
    apaga = document.querySelectorAll('.risca');
  });
}

function marca(criaLi) {
  criaLi.addEventListener('click', function() {
    criaLi.classList.toggle('destaca');
  });
}

function adicionaLinha(argumento) {
  const criaLi = document.createElement('li');
  pegaOl.appendChild(criaLi);
  criaLi.innerText = argumento;
  criaLi.classList = ('class', 'item');
  entrada.value = '';
  risca(criaLi);
  marca(criaLi);
}

function click() {
  ok.addEventListener('click', function() {
    adicionaLinha(entrada.value);
  });
}

function trocaMouse() {
  for (let i = 0; i < botoes.length; i += 1) {
    botoes[i].addEventListener('mouseover', function() {
      botoes[i].style.cursor = 'pointer';
      botoes[i].style.backgroundColor = 'cornsilk';
      });
    botoes[i].addEventListener('mouseout', function() {
      botoes[i].style.backgroundColor = 'ButtonFace';
    });
  }
}

function apagaRiscado() {
  apagaRealizado.addEventListener('click', function() {
    for (let i = 0; i < apaga.length; i += 1) {
      pegaOl.removeChild(apaga[i]);
    }
  });
}

window.onload = function inicia() {
  click();
  trocaMouse();
  removeTudo();
  apagaRiscado();
};
