fruit = "pineapple"

switch(fruit){
    case "apple":
        console.log("The fruit is an apple 🍎")
        break
    case "pineapple":
        console.log("The fruit is a pineapple 🍍")
        break
    default: //"else" do switch
        console.log("Change me")
}


// ! Se a instrução break for omitida de uma instrução case de um switch, as instruções case seguintes serão executadas até que seja encontrado um break.
