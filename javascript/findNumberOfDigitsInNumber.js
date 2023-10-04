// https://edabit.com/challenge/yFJzLfYghz7ZtsyAN

// with string
function numOfDigits(num) {
    console.log(Math.abs(num).toString().length);
}

numOfDigits(1000) // 4

numOfDigits(12) // 2

numOfDigits(1305981031) // 10

numOfDigits(0) // 1

numOfDigits(-1) // 1
