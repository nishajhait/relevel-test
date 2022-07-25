function amongLargestNumber(a, b, c, d, e) {
	if (a > b && a > c && a > d && a > e) {
		console.log(a + " is gretest among five number")

	}
	else if (b > a && b > c && b > d && b > e) {
		console.log(b + " is gretest among five number")

	}
	else if (c > a && c > b && c > d && c > e) {
		console.log(c + " is gretest among five number")
	}
	else if (d > a && d > b && d > c && d > e) {
		console.log(d + " is gretest value among five number")
	}
	else if (e > a && e > b && e > c && e > d) {
		console.log(e + " is gretest among five number")
	} else {
		console.log("not number")
	}
}
amongLargestNumber(12, 45, 56, 78, 67)
amongLargestNumber(13, 67, 78, 90, 45)
amongLargestNumber(12, 78, 77, 56, 99)
amongLargestNumber(12, 78, 44, 33, 22)
amongLargestNumber(11, 67, 56, 44, 22)