function calcular(){
  let txtinicio = document.getElementById("txtinicio")
  let txtfim = document.getElementById("txtfim")
  let txtpasso = document.getElementById("txtpasso")
  let res = document.getElementById("res")
  res.innerHTML = "" //Resetar para inicial

  if(txtinicio.value.length == 0 || txtfim.value.length == 0 || txtpasso.value.length == 0){
    res.innerHTML = "Impossível contar"
  } else{
    res.innerHTML = "Contando: <br>"
    let i = Number(txtinicio.value)
    let f = Number(txtfim.value)
    let p = Number(txtpasso.value)
    
    if(p <= 0){
      alert("Passo inválido! Considerando o PASSO 1")
      p = 1
    }
    
    
    if(i < f){
      //*CONTAGEM CRESCENTE
      for(let c = i ;c <= f; c += p ){
      res.innerHTML += `👉${c}  ` //era só um espaço para resolver o problema KKKKKKKKKK

    } 
    
    
    }else{
      //*CONTAGEM DECRESCENTE
      for(let c = i ; c >= f ; c -= p ){
        res.innerHTML += `👉${c}  `
        
      }
      
    }
    res.innerHTML += "🏁"
    
  }
}