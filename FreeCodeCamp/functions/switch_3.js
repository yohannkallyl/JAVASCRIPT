// ?Podemos fazer também com que várias entradas possuam a mesma saída

function sequentialSizes(val){
    let answer = ""
    
    switch(val){
        case 1:
        case 2:
        case 3:
            answer = "Low"
            break
        case 4:
        case 5:
        case 6:
            answer = "Mid"
            break
        case 7:
        case 8:
        case 9:
            answer = "High"    
}
    return answer //é importante retornar o valor depois. Coloquei aqui para evitar linhas desnecessárias embaixo de cada "case"
}

console.log(sequentialSizes(7))