function carregar(){
    let msg = document.getElementById("msg")
    let img = document.getElementById("imagem")
    let cumprimento = document.getElementById("cumprimento")
    let data = new Date()
    let hora = data.getHours()
    
    
    
    msg.innerHTML = `Agora são <b>${hora} horas</b>`
    if(hora >=0 && hora < 12){
        //BOM DIA !
        cumprimento.innerHTML = "Bom dia!"
        img.src = "modelo/morning-web.png"
        document.body.style.background = "#4a6610"

    } else if(hora < 18){
        //BOA TARDE!
        cumprimento.innerHTML = "Boa tarde!"
        img.src = "modelo/afternoon-web.png"
        document.body.style.background = "#8e5623"
    } else{
        //BOA NOITE
        cumprimento.innerHTML = "Boa noite!"
        img.src = "modelo/night-web.png"
        document.body.style.background = "#010000"
    }
}