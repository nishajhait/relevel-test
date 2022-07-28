function checkNumber(num) {

    for (i = 1; i <= num; i++) {

        if (i % 15 == 0) {
            console.log("MindBuzz")
        }

        else if (i % 5 == 0) {
            console.log("Buzz")

        }
        else if (i % 3 == 0) {
            console.log("Relevel")

        } else {
            console.log(i)
        }
    }

}




checkNumber(100)
