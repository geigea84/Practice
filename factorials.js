//Write a function that calculates the factorial of a number recursively

let numArr = [];

function factorials(n) {
    if (n > 0) {
        numArr.push(n);
        console.log(numArr);
        n = n - 1;
        factorials(n);
    }
    else {
        let product = numArr.reduce(function (a, b) {
            return a * b;
        }, 0);
        console.log(product);
    }
}

factorials(5);