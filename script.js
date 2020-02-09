function addItem(){
    var valor= document.getElementById("input").value
    var elemento=document.createElement("li");
    elemento.innerHTML=valor
    elemento.onclick=function(){
        elemento.style.color="red"
    }
    elemento.ondblclick=function(){
        if(elemento.style.textDecoration!="line-through"){
        elemento.style.setProperty("text-decoration", "line-through");
    }
    else{
        elemento.style.setProperty("text-decoration", "none");
    }
}
    document.getElementById("lista").appendChild(elemento)
}

function colorir(){
    document.querySelectorAll("li").forEach(cor)
    document.getElementById("input").value=""
}

function cor(e){
    e.style.color="black"
}

function apagaTudo(){
    document.querySelectorAll("li").forEach(apaga)
}

function apaga(e){
    e.parentNode.removeChild(e)
}

function apagaCompletos(){
    document.querySelectorAll("li").forEach((el)=>{
        if(el.style.textDecoration=="line-through"){
            apaga(el)
        }
    })
}