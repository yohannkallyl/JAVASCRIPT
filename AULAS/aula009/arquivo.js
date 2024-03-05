var d = document.querySelector("div#d")
var corpo = document.body
var p1 = document.getElementsByTagName("p") [0]
// plural -> Ou seja, devo especificar qual parágrafo é em questão

document.write("Está escrito assim: " + p1.innerTextHTML)
//innnerTextHTML -> Usar tudo, até os atributos utilizados no elemento

p1.style.color = "red"

p1.style.background = "black"

corpo.style.background = "orange"

//d.style.background = "grey"
//d.style.color = "black"
//d.innerText = "Estou mudando..."

d.style.background = "pink"