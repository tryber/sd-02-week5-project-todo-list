let textInput = document.getElementById('newTask')
    textInput.addEventListener('change', function(){
    let texto = this.value
    let lista = document.getElementById('lista')
    let novoItem = document.createElement('li')


