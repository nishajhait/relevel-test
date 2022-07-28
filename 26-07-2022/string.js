// var s "ironmen"
function reverseOrder(num){
    let newNum = num;
    if (typeof num === "number") newNum = num.toString()
    let n=newNum.length;
    var res ="";
    for(let i = n-1; i>=0;  i--){
        res += newNum[i]
    }
    return res;
}

console.log(reverseOrder(987))