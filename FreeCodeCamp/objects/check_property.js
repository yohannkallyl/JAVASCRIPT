// ? Para verificar se uma propriedade em um determinado objeto existe ou não, você pode usar o método .hasOwnProperty(). someObject.hasOwnProperty(someProperty) retorna true ou false, dependendo de a propriedade ser encontrada no objeto ou não.

function checkForProperty(object, property){
    return object.hasOwnProperty(property)
}
console.log(checkForProperty({top: "hat", bottom: "pants"}, "top")) //true
console.log(checkForProperty({top: "hat", bottom: "pants"}, "middle")) //false
