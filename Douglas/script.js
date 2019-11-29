const ok = document.getElementById ('envia');
let entrada = document.getElementById ('entrada');
let pegaOl = document.querySelector ('ol');
const botoes = document.querySelectorAll ('button' );
let contador=3;
const apagaTudo = document.getElementById ('apagarTudo')
const apagaRealizado = document.getElementById ('apagarCompletos');
const item= document.querySelectorAll ('item');
window.onload = function () {
this.click ();
this.trocaMouse ();
this.removeTudo ();
};

function removeRealizado(){
  apagaRealizado.addEventListener('click', function(){

  })
}

function removeTudo(){
  apagaTudo.addEventListener('click', function () {
  pegaOl.innerHTML='';
});
}

function click () {
  ok.addEventListener ( 'click', function () {
  adicionaLinha (entrada.value);
});
};

function adicionaLinha (argumento) {
  const criaLi = document.createElement ('li');
  pegaOl.appendChild (criaLi);
  criaLi.innerText = argumento;
  criaLi.classList = ('class', 'item');
  entrada.value = '';
  risca(criaLi);
  marca(criaLi);
};

function risca (criaLi) {
  let j =0;
  criaLi.addEventListener ('dblclick', function () {
    criaLi.classList.toggle("mystyle");
})
};

function marca (criaLi) {
  let i=0;
  criaLi.addEventListener ('click', function () {
    if ( i == 0 ){
      criaLi.style.backgroundColor='blue';
      i = 1;
    }
    else {
      criaLi.style.backgroundColor='white';
      i=0;
    }
  });
};

function trocaMouse () {
  for( let i = 0 ; i < botoes.length; i++ ){
    botoes[i].addEventListener ('mouseover', function () {
    botoes[i].style.cursor = "pointer";
    });
  };
};
