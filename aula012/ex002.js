var agora = new Date() // puxa a informação
var hora = agora.getHours() //aplica
console.log(`Agora são exatamente ${hora} horas.`)
if(hora < 12){
    console.log("Bom dia!")

} else if(hora <= 17){
    console.log("Boa tarde!")

} else{
    console.log("Boa noite!")
}