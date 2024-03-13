// todo: Como vimos em exemplos anteriores, objetos podem conter tanto objetos aninhados quanto arrays aninhados. Semelhante ao acesso de objetos aninhados, a notação de colchetes pode ser encadeada para se acessar arrays aninhados.


const myPlants = [
    {
        type: "flowes",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]

   },
   {
    type: "trees",
    list: [
        "fir",
        "pine",
        "birch"
    ]
   }
]


console.log(myPlants[0].list[2])