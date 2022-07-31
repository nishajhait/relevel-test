function checkNumber(num) {
    for (i = 1; i <= 100; i++) {
        switch (num) {
            case
             (i % 15 == 0): {
                console.log("Midlbuzz")
                break;
            }

            case
             (i % 5 == 0): {
                console.log("Buzz")
                break;
            }
            case
             (i % 3 == 0): {
                console.log("Relevel")
                break;
            }
            default: {
                console.log("not result")
            }
        }
    }


}
checkNumber(100)

