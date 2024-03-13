/*Objetos são similares a arrays, exceto que, ao invés de usar índices para acessar e modificar seus dados, você acessa os dados em objetos através do que se chama propriedades.

Objetos são úteis para armazenar dados de forma estruturada e podem representar objetos do mundo real, como um gato.*/




const myDog = {name: "Kessie",
legs: 4,
tails: 1,
friends: ["Everton", "Cebolinha"]
}

console.log(`O nome dos amigos do meu cachorro são ${myDog.friends[0]} e ${myDog.friends[1]}`)