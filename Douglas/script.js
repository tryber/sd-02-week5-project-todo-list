const ok = document.getElementById ('envia');
let entrada = document.getElementById ('entrada');
let pegaOl = document.querySelector ('ol');
const botoes = document.querySelectorAll ('button' );
const apagaTudo = document.getElementById ('apagarTudo')
const apagaRealizado = document.getElementById ('apagarCompletos');
const item= document.querySelectorAll ('item');
let apaga = document.querySelectorAll ('.risca');

window.onload = function () {
  this.click ();
  this.trocaMouse ();
  this.removeTudo ();
  this.apagaRiscado ();
};

function removeTudo () {
  apagaTudo.addEventListener ('click', function () {
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
  risca (criaLi);
  marca (criaLi);
};

function risca (criaLi) {
  let j =0;
  criaLi.addEventListener ('dblclick', function () {
    criaLi.classList.toggle ("risca");
    apaga = document.querySelectorAll ('.risca');
})
};

function marca (criaLi) {
  criaLi.addEventListener ('click', function () {
    let unico= document.querySelectorAll('destaca');
    for(let i = 0; i < unico.lenght; i++ ){
      unico[i].classList.remove('destaca');
    }
    criaLi.classList.add ("destaca");
  });
};

function trocaMouse () {
  for( let i = 0 ; i < botoes.length; i++ ){
    botoes[i].addEventListener ('mouseover', function () {
    botoes[i].style.cursor = "pointer";
    botoes[i].style.backgroundColor = 'cornsilk';
    });
    botoes[i].addEventListener ('mouseout', function () {
      botoes[i].style.backgroundColor = 'ButtonFace';
    });
  };
};

function apagaRiscado (){
  apagaRealizado.addEventListener('click', function (){
    for( let i=0; i< apaga.length ; i++){
      pegaOl.removeChild(apaga[i]);
    }
  });
}
