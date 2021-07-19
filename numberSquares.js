//https://edabit.com/challenge/RGQXN4TG2CQoBAReQ
//Create a function that calculates the number of different squares
//in an n * n square grid.

function numberSquares(n) {
    let total = n * (n + 1) * (2 * n + 1) / 6;
    console.log(total);
}

numberSquares(2);
numberSquares(4);
numberSquares(5);