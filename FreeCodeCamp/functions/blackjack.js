/*
MUDANÇA NA CONTAGEM:           CARTAS
        +1                      2,3,4,5,6
        0                       7,8,9
        -1                      10,"J","Q","K","A"

*/
let count = 0


function cc(card){
    switch(card){
        case 2:
        case 3:
        case 3:
        case 4:
        case 5:
        case 6:
            count++
            break
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--
            break
    }
    if(count > 0){
        console.log(count + "Bet") 
    }else{
        console.log(count + "Hold") 
    }
}
cc(2);
cc(3);
cc(7);
cc('K');
cc('A');
