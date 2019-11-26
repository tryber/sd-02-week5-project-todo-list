let escreveMeme = document.getElementById('escreve-meme');
let recebeMeme = document.getElementById('recebe-meme');

 escreveMeme.addEventListener('keyup', function(){
    recebeMeme.innerText = escreveMeme.value
    recebeMeme.style.fontSize = '3em'
    recebeMeme.style.fontFamily = "Odibee Sans"
    recebeMeme.style.color = "#fff"
}); 

let memeImagem = document.getElementById('meme-imagem');
let escolherImagem = document.getElementById('escolher-imagem');

escolherImagem.addEventListener('input', function(){
    memeImagem.src = this.value
});

console.log(escolherImagem.inputMode)