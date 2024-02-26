var agora = new Date()
var diaSem = agora.getDay()
diaSem = 9
//shift + alt + f
switch (diaSem) { //evitar muitos "else if´s"
    case 0:
        console.log("Domingo")
        break
    case 1:
        console.log("Segunda-Feira")
        break
    case 2:
        console.log("Terça-Feira")
        break
    case 3:
        console.log("Quarta-Feira")
        break
    case 4:
        console.log("Quinta-Feira")
        break
    case 5:
        console.log("Sexta-Feira")
        break
    case 6:
        console.log("Sábado")
        break
    default:
        console.log("[ERRO] Dia Inválido") //esse seria o "else" disso tudo
        // se não colocar o "break", ele vai escrever tudo "um em cima do outro"



}