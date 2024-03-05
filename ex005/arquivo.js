let txtn1 = document.getElementById("txtn1")
let numbers = document.getElementById("numbers")
let res = document.getElementById("res")
let valores = [] //lista

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){ 
        //-1 significa que não existe um número, já que o indexOf retorna o índice do valor solicitado
        return true
    }else{
        return false
    }
}




function adicionar(){
    if(isNumero(txtn1.value) && !inLista(txtn1.value, valores)){ //criei 2 futuras funções
        valores.push(Number(txtn1.value))
        let item = document.createElement("option")
        item.text = `Valor ${Number(txtn1.value)} adicionado`
        numbers.appendChild(item)
        res.innerHTML = "" //quando adicionar um elemento, ele limpa o resultado

        
    }else{
       alert("[ERRO] Valor inválido ou já encontrado na lista.")
    }

    txtn1.value = "" //resetar
    txtn1.focus() //cursor voltar a piscar quando tiver resetado pelo comando de cima
}

    function finalizar(){
        if(valores.length == 0){
            alert("Adicione valores antes de finalizar")
        }else{
            let tot = valores.length
            let maior = valores[0] 
            let menor = valores[0]
            let soma = 0
            let media = 0
            //TODO: o primeiro número inserido sempre vai ser o maior e menor (antes dos outros serem colocados)
            for(pos in valores){ //importante ter essa repetição para ele verificar todos os números
                soma += valores[pos]
                media = soma / tot
                if(valores[pos] > maior){
                    maior = valores[pos]
                }else if(valores[pos] < menor){
                    menor = valores[pos]
                }
            }
            res.innerHTML = ""
            res.innerHTML += `<p>Ao todo temos <b>${tot}</b> números cadastrados</p>`
            res.innerHTML += `<p>O maior valor informado foi <b>${maior}</b></p>`
            res.innerHTML += `<p>O menor valor informado foi <b>${menor}</b></p>`
            res.innerHTML += `<p>A soma dos valores informados é <b>${soma}</b></p>`
            res.innerHTML += `<p>A média dos valores informados é <b>${media.toFixed(2)}</b></p>`
        }
    }
