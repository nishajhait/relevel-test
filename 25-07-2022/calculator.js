function mainFunction(num1, num2, symbol) {
    switch (symbol){
        case "+": {
            addNumber(num1, num2)
            break;
        }
        case "-": {
            subtractNumber(num1, num2)
            break;
        }
        case"*": {
            multiplyNumber(num1, num2)
            break;
        }
        case"/": {
            divisionNumber(num1, num2)
            break;
        }
        default:{
            console.log("Not a valid arithmetic operator")
        }
}
function addNumber(num1, num2) {
    console.log(num1 + num2);
}
function subtractNumber(num1, num2) {
    console.log(num1 - num2);

}
function multiplyNumber(num1,num2) {
    console.log(num1 * num2);

}
function divisionNumber(num1,num2) {
    console.log(num1 / num2)

}



}
mainFunction(12, 12, "+")
mainFunction(12, 12, "-")
mainFunction(12, 12, "*")
mainFunction(12, 12, "/")
