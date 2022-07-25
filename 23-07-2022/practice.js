function toString(nums) {
    const newString = nums.toString();
    let finalValue = 0;
    if (newString.length < 3) {
        return console.log(newString)
    }
    for(var i = 1; i<=newString.length-2;i++){
        var ns = Number(newString[i])
        finalValue += ns;
    }
    console.log(finalValue)
}
toString(219134)
