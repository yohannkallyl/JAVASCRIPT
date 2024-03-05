function verificar(){
    var nac = document.getElementById("nac").value
    var res = document.getElementById("res")
    
    if(nac == "Brasil"){
        
        res.innerHTML = "Você é <b><span>Brasileiro!</span></b>"
    }
    else{
        res.innerHTML = "Você é <b><span>Estrangeiro!</span></b>"
    }

}