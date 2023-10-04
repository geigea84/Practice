// https://edabit.com/challenge/ENWFBL4jbTgLbSqwS

// Create a function that takes a "base number" as an argument. 
// This function should return another function which takes a new argument, 
// and returns the sum of the "base number" and the new argument.

const plusFive = makePlusFunction(5)
const plusTen = makePlusFunction(10)

function makePlusFunction(x) {
    return function (y) {
        console.log(x + y);
        return x + y;
    }
}

plusTen(0) // 10

plusTen(188) // 198

plusFive(plusTen(0)) // 15
