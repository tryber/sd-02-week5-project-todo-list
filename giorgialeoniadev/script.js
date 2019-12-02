function iniciar() {
    const adicionarBtn = document.querySelector("#adicionarBtn");
    adicionarBtn.addEventListener('click', function () {
        criaTarefa();
    });

    const apagarListaBtn = document.querySelector("#apagarListaBtn");
    apagarListaBtn.addEventListener('click', function () {
        apagaTodasTarefas();
    });

    const apagarConcluidosBtn = document.querySelector("#apagarConcluidosBtn");
    apagarConcluidosBtn.addEventListener('click', function () {
        apagarConcluidos();
    });
}

function pegaListaDoHtml() {
    return document.getElementsByTagName("ol")[0];
}

function criaTarefa() {
    const input = document.querySelector("#input");
    const entrada = input.value;
    if (entrada.trim() === "") {
        alert("Por favor, digite um texto para sua tarefa.");
    } else {
        const novaTarefa = document.createElement("li");
        novaTarefa.append(entrada);
        novaTarefa.onclick = selecionaItem;
        novaTarefa.ondblclick = itemFeito;
        const listaCompleta = pegaListaDoHtml();
        listaCompleta.append(novaTarefa);
        input.value = "";
    }
}

function apagaTodasTarefas() {
    const listaCompleta = pegaListaDoHtml();
    listaCompleta.innerHTML = "";
}

function apagarConcluidos() {
    const items = document.getElementsByTagName("li");
    for (const item of items){
        if(item.className === "itemFeito"){
            item.remove();
        } 
    }
}

function selecionaItem(event) {
    if (event.target.className === "") {
        event.target.className = "itemSelecionado"
    } else if (event.target.className === "itemSelecionado") {
        event.target.className = ""
    }
}

function itemFeito(event) {
    if (event.target.className !== "itemFeito") {
        event.target.className = "itemFeito"
    } else if (event.target.className === "itemFeito") {
        event.target.className = ""
    }
}

iniciar();
