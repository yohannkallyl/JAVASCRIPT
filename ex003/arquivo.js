function calcular(){
  let txtinicio = document.getElementById("txtinicio")
  let txtfim = document.getElementById("txtfim")
  let txtpasso = document.getElementById("txtpasso")
  let res = document.getElementById("res")

  if(txtinicio.value.length == 0 || txtfim.value.length == 0 || txtpasso.value.length == 0){
    alert("[ERRO] Verifique os valores novamente")
  } else{
    let i = Number(txtinicio.value)
    let f = Number(txtfim.value)
    let p = Number(txtpasso.value)
    for(c = i ;c <= f; c+=p ){
      res.innerHTML += `${c}` //resolver isso aqui
    }
  }
}