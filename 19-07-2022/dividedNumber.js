function checkByTwo(value) {
    // console.log(value/2)
    var reminder = value/2;
    if (value % 2 === '0') {
        console.log(value + " dividable by 2")

    } else {
        console.log(value +" not divided by two, reminder " + reminder)


    }
}
checkByTwo(4)
checkByTwo(11);