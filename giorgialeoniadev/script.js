function iniciar() {
    const botao = document.querySelector(".botaoAdicionar");
    botao.addEventListener('click', function () {
        criaTarefa();
    })
}

function criaTarefa() {
    const input = document.querySelector("#input");
    const entrada = input.value;
    if (entrada.trim() === ""){
        alert("Por favor, digite um texto para sua tarefa.");
    } else {
        const novaTarefa = document.createElement("li");
        novaTarefa.append(entrada);
        novaTarefa.onclick = selecionaItem;
        document.getElementsByTagName("ol")[0].append(novaTarefa);
        input.value = "";
    }
}

function selecionaItem(event) {
    if (event.target.className === ""){
        event.target.className = "itemSelecionado"
    } else if (event.target.className === "itemSelecionado") {
        event.target.className = ""
    }
}

iniciar();
