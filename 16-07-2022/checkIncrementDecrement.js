// function checkNumber(a, b, c) {
//     if (a < b && b < c) {
//         console.log(a + " increment number")
//     }
//     else if (a > b && b > c) {
//         console.log("decrement number")

//     } else {
//         console.log("no order")
//     }

// }
// checkNumber(12, 45, 56);
// checkNumber(10, 9, 8);
// checkNumber(12, 56, 34)         
function cheackIncrementDecrement(a, b, c, d, e) {
    if (a < b && b < c && c < d && d < e) {
        console.log("number is increment")
    }
    else{
        console.log("number is decrement")
    }
}



cheackIncrementDecrement(10, 12, 23, 225,345);
cheackIncrementDecrement(12,11,10,9,8);

