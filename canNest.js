// https://edabit.com/challenge/Gpy2qSFnfhGJnWMMj
// Create a function that returns true if the first array can be nested inside the second.

// arr1 can be nested inside arr2 if:

// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.

let minOne;
let minTwo;
let maxOne;
let maxTwo;
let newArrOne;
let newArrTwo;

function minMaxOne(arrOne) {
    minOne = arrOne[0];
    maxOne = arrOne[0];

    for (let i = 0; i < arrOne.length; i++) {
        if (minOne > arrOne[i]) {
            minOne = arrOne[i];
        }
        if (arrOne[i] > maxOne) {
            maxOne = arrOne[i];
        }
    }

    newArrOne = [minOne, maxOne];
    return  newArrOne;
}

function minMaxTwo(arrTwo) {
    minTwo = arrTwo[0];
    maxTwo = arrTwo[0];

    for (let i = 0; i < arrTwo.length; i++) {
        if (minTwo > arrTwo[i]) {
            minTwo = arrTwo[i];
        }
        if (arrTwo[i] > maxTwo) {
            maxTwo = arrTwo[i];
        }
    }

    newArrTwo = [minTwo, maxTwo];
    return newArrTwo;
}

function canNest(arrOne, arrTwo) {
    minMaxOne(arrOne);
    minMaxTwo(arrTwo);

    if (
        newArrOne[0] > newArrTwo[0] &&
        newArrOne[1] < newArrTwo[1]
    ) {
        console.log("true");
        return true;
    }
    else {
        console.log("false");
        return false;
    }
}

//canNest([1, 2, 3, 4], [0, 6]);
canNest([1, 2, 3, 4], [2, 3]);