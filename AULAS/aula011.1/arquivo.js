function calcular(){
    var txtv = document.getElementById("txtvel")
    var vel = Number(txtv.value)
    var res = document.getElementById("res")
    res.innerHTML = `<p>Sua velocidade atual é de <b>${vel} Km/h</b></p>`
    if(vel > 60){
        res.innerHTML += "<p>Você está <b>MULTADO</b> por excesso de velocidade</p>"

    }
    
    res.innerHTML += "<p>Dirija sempre com o cinto de segurança.</p>" //? isso serve como uma concatenação por ser string. Com essa ferramenta, eu mantenho as duas mensagens, sem apagar a anterior.
    

}