function printNumber(num, num2) {
    for (i = 1; i <= num2; i++)
        if (i * i === num) {
            console.log(i)
        }
}
printNumber(64, 1000)