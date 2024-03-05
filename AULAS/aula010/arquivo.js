var area = document.getElementById("area")

area.addEventListener("click", clicar)
area.addEventListener("mouseenter", entrar)
area.addEventListener("mouseout", sair)
//Isso substitui a razão de criar eventos no próprio HTML

function clicar(){

    area.innerHTML = "<b>Clicou</b>"
    area.style.color = "black"
    area.style.background = "red"

}

function entrar(){
    area.innerHTML = "<b>Entrou!</b>"
}

function sair(){
    area.innerHTML = "<b>Saiu!</b>"
    area.style.background = "green"
}