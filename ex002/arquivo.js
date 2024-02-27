function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById("txtano") 
    let res = document.getElementById("res")
    if(fano.value.length == 0 || fano.value > ano){
        alert("[ERRO] Verifique os dados e tente novamente!")
    } else{
        let fsex = document.getElementsByName("radsex")
        let idade = ano - fano.value
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if(fsex[0].checked){
            var genero = "Homem"
            if(idade >= 0 && idade < 10){
                img.setAttribute("src", "young-boy-web.png") 
                //estou colocando a "url" da imagem no source do img que eu criei antes
                document.body.style.background = "#4b2721"
            }else if(idade < 21){
                img.setAttribute("src", "teen-boy-web.png")
                document.body.style.background = "#573d3a"
            }else if(idade < 50){
                img.setAttribute("src", "adult-boy-web.png")
                document.body.style.background = "#7b7256"
                
            }else{
                img.setAttribute("src", "elderly-boy-web.png")
                document.body.style.background = "#292927"
            }

        }else if(fsex[1].checked){
            var genero = "Mulher"
            if(idade >= 0 && idade < 10){
                //CRIANÇA
            }else if(idade < 21){
                //JOVEM
            }else if(idade < 50){
                //ADULTO
            }else{
                //IDOSO
            }
        }
        res.innerHTML = `Detectamos ${genero} de ${idade} anos`
        res.appendChild(img) //adicionar um elemento
    }

}