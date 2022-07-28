
function innerdigit(num) {
    var numStr = num.toString()
    if (numStr.length < 3) {
        return -1;
    }
    let sum = 0;
    for (let i = 1; i <= numStr.length - 2; i++) {
        sum += Number(numStr[i]);

    }
    return sum;
}

console.log(innerdigit(59044))