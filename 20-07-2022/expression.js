function checkNumber(num) {
	switch (num) {
		case (num < 0): {
			console.log("it is negative")
			break;
		}
		case (num > 0): {
			console.log("it is positive")
			break;

		}
		case (num == 0): {
			console.log("not positive not negative")
		}
		default: {
			console.log("it is invalid")
		}

	}
}
checkNumber(-12);
checkNumber(1);
checkNumber(0);
checkNumber("abc");
