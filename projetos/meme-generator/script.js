let escreveMeme = document.getElementById('escreve-meme');
let recebeMeme = document.getElementById('recebe-meme');

let selecionarCores = document.getElementById('cores');

/*A função abaixo vai mudar a cor da fonte do texto na foto de acordo com a escolha do usuário*/

selecionarCores.addEventListener('change', function(){
    let options = this.options;
    let itemAtual = this.selectedIndex;
    recebeMeme.style.color = options[itemAtual].value;
})

/*A função abaixo vai espelhar a mensagem escrita no <input id = escreve-meme> na imagem*/

 escreveMeme.addEventListener('keyup', function(){
    recebeMeme.innerText = escreveMeme.value
    recebeMeme.style.fontSize = '3em'
    recebeMeme.style.fontFamily = "Odibee Sans"
    recebeMeme.style.textTransform = 'uppercase'
}); 

let memeImagem = document.getElementById('meme-imagem');
let escolherImagem = document.getElementById('escolher-imagem');

/*A função abaixo vai colocar a imagem escolhida pelo usuário na <img id = meme-imagem>*/

escolherImagem.addEventListener('change', function(event){
    memeImagem.src = URL.createObjectURL(event.target.files[0])
});

let posicaoFrase = document.getElementById('posicao');

/*A função abaixo vai colocar a frase da tag <p id = recebe-meme> na posição escolhida pelo usuário*/

posicaoFrase.addEventListener('change', function(){
    let options = this.options;
    let itemAtual = this.selectedIndex;
    recebeMeme.style.top = options[itemAtual].value;
})

