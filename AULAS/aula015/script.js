let num = [9,5,3]
num.push(8)
console.log(`O vetor compõem os seguinte números: ${num}`)
console.log(`O vetor possui ${num.length} posições`)
console.log(`Em ordem crescente: ${num.sort()}`)
console.log(`O terceiro valor do vetor é ${num[3]}`)
pos = num.indexOf(1)
if(pos == -1){
    console.log("Número não existe")
}else{
    console.log(`O valor 8 está na posição: ${num.indexOf(1)}`)

}
