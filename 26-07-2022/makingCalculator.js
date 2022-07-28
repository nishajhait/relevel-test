class Calculator {


    constructor(num1, num2, symbol) {
        this.num1 = num1;
        this.num2 = num2;
        this.symbol = symbol;
        this.newVal = '';
    }
    addition(val, jhjhj) {
        this.newVal = val;
        if (this.symbol === "+") {
            console.log(this.num1 + this.num2);
        }
    }
    subtraction() {
        if (this.symbol === "-") {
            console.log(this.num1 - this.num2);
        }

    }
    multiplication() {
        if (this.symbol === "*") {
            console.log(this.num1 * this.num2)
        }

    }
    division() {
        console.log(this.newVal)
        if (this.symbol === "%") {
            console.log(this.num1 % this.num2)
        }
    }
}
const nishObj = new Calculator(87, 12, "-") // new instance
calObj.addition(87, 9988);
calObj.subtraction(87);
calObj.multiplication();
calObj.division();
calObj.multiplication()