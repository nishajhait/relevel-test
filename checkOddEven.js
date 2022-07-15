// Function to check Odd/Even using If/Else
function checkOddEven(value) {
	if (value % 2 == 0) {
		console.log("The given number is even")
	}
	else {
		console.log("The given number is odd")
	}
}
checkOddEven(20)


// Function to check Odd/Even using Ternary Operator
function checkOddEvenTernary(value) {
	var newValue = value % 2 == 0 ? "The given number is even" : "The given number is odd"
	console.log(newValue);
}

checkOddEvenTernary(51)



/* Optimized Way */

// Function to check Odd/Even using If/Else
function checkOddEvenOpt(value) {
	if (value % 2) {
		console.log("The given number is odd")
	}
	else {
		console.log("The given number is even")
	}
}
checkOddEvenOpt(20)



// Function to check Odd/Even using Ternary Operator
function checkOddEvenTernaryOpt(value) {
	var newValue = value % 2 ? "The given number is odd" : "The given number is even"
	console.log(newValue);
}

checkOddEvenTernaryOpt(51)
