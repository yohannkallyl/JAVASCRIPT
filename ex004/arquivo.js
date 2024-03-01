function calcular(){
    let txtn1 = document.getElementById("txtn1")
    let tab = document.getElementById("tab")
    tab.innerHTML = ""

    if(txtn1.value.length === 0){
        alert("[ERRO] Digite um número")
    } else{
        let n1 = Number(txtn1.value)
        for(c = 1;c <= 10 ;c++ ){
            let item = document.createElement("option")
            item.text = `${n1} x ${c} = ${n1*c}`
            tab.appendChild(item)
            item.value = `tab${c}` //isso serve mais para linguagens como PHP. Aqui, estou declarando valores a cada item
        }
    }
}