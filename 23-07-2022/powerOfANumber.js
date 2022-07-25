function power(num, pow) {
    let i = 1;
    let result = 1;
    while (i <= pow) {
        result = result * num;
        i++;
    }
    console.log(result);
}
power(10, 2);
power(2, 5);
power(4, 3);

