let caixaVermelha = document.getElementById('red');
caixaVermelha.style.backgroundColor = caixaVermelha.id;
let color;

caixaVermelha.addEventListener('click', function(){
    color = caixaVermelha.id
})



console.log(color)