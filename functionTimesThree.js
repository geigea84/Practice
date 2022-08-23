// https://edabit.com/challenge/95YiRnBSnfzSQWAuu

// Create a function that takes three collections of arguments and returns the sum of the product of numbers.

function product(var1, var2) {
    let num1 = var1;
    let num2 = var2;

    return function(var3, var4) {
        num1 = num1 * var3;
        num2 = num2 * var4;

        return function(var5, var6) {
            num1 = num1 * var5;
            num2 = num2 * var6;

            console.log(num1 + num2);
        }
    }
}

product(1,2)(1,1)(2,3) // 8
// 1 * 1 * 2 + 2 * 1 * 3

product(10,2)(5,0)(2,3) // 100
// 10 * 5 * 2 + 2 * 0 * 3

product(1,2)(2,3)(3,4) // 30
// 1 * 2 * 3 + 2 * 3 * 4

product(1,2)(0,3)(3,0) // 0
// 1 * 0 * 3 + 2 * 3 * 0
