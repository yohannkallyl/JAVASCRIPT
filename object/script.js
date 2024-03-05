let amigo = {nome: "José",
sexo: "M",
peso: 85.4,
engordar(p=0){
    console.log("Engordou")
    this.peso += p //esse "this" é para referenciar o objeto
}}

 amigo.engordar(5)
 console.log(`${amigo.nome} pesa ${amigo.peso} Kgs`)