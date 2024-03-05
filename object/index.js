let amigo = {nome: "José",
sexo: "M",
peso: 85.4,
engordar(p=0){
    console.log("Engordou") // só vai aparecer se fizer uma referência desse método
    this.peso += p
}}

amigo.engordar(5) //referência
console.log(`O ${amigo.nome} pesa ${amigo.peso}`)