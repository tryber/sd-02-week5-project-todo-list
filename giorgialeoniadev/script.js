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
        document.getElementsByTagName("ol")[0].append(novaTarefa);
        input.value = "";
    }
}

iniciar();
