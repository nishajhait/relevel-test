function isReverse(value) {
    if (!value) return false;
    var newVal = value.toString();
    console.log('Arun Jha isReverse', value)
    var updatedVal = '';
    for (var l = newVal.length - 1; l >= 0; l--) {
        
        updatedVal += l;
    }
    return updatedVal;
}
function checkPalingdrom(num) {
    for (i = 1; i <= num; i++) {
        if (i < 10) {
            
            return console.log(i);
        }
        isReverse(i)
    }


}

checkPalingdrom(50)