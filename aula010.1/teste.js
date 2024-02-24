function somar(){
    
    var tn1 = document.getElementById("txtn1")
    var tn2 = document.getElementById("txtn2")

    //Converter o valor para um número
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)

    var res = document.getElementById("res")
    var s = n1+n2
    res.innerHTML = s




}

