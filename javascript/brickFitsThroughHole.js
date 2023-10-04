// https://edabit.com/challenge/ixdXLyopP7c4aPXqx

// Write the function that takes three dimensions of a brick: 
// height(a), width(b) and depth(c) and returns true if this 
// brick can fit into a hole with the width(w) and height(h).

function doesBrickFit(a, b, c, w, h) {
    let brickArr = [a, b, c];
    let holeArr = [w, h];

    brickArr.sort();
    holeArr.sort();

    let brickWidth = brickArr[0];
    let brickHeight = brickArr[1];
    let holeWidth = holeArr[0];
    let holeHeight = holeArr[1];

    if (brickWidth <= holeWidth && brickHeight <= holeHeight) {
        console.log(true);
    } else {
        console.log(false);
    }
}

doesBrickFit(1, 1, 1, 1, 1) // true

doesBrickFit(1, 2, 1, 1, 1) // true

doesBrickFit(1, 2, 2, 1, 1) // false

doesBrickFit(3, 9, 8, 6, 4) // false
