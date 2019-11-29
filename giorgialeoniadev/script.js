
//Funcão que insere a tarefa
function addTarefa() {
    let tarefa = document.getElementById("input");
    let novaTarefa = do
        let novaTarefa = document.createElement("li");
document.getElementsByTagName("ol")[0].appendChild(novaTarefa);
}

//Ação de clicar no botão
let button = document.getElementsByClassName("botaoAdicionar")[0];
button.addEventListener("click", function () {
    addTarefa()
})