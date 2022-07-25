var x ="mumbai";
var y =12;
var output=x[5]+x[4]+x[3]+x[2]+x[1]+x[0]

function reverseString(str){
    var output="";
    for(let i= str.lenth-1; i>=0; i--){
        output=output+str[i];
    }
        console.log(output);
    

}
reverseString("mumbai");