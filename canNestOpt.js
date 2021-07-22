// Optimizing canNest.js

// https://edabit.com/challenge/Gpy2qSFnfhGJnWMMj
// Create a function that returns true if the first array can be nested inside the second.

// arr1 can be nested inside arr2 if:

// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.

let min;
let max;
let newArr = [];

function minMax(inputArr) {
    min = inputArr[0];
    max = inputArr[0];

    for (let i = 0; i < inputArr.length; i++) {
        if (min > inputArr[i]) {
            min = inputArr[i];
        }
        if (inputArr[i] > max) {
            max = inputArr[i];
        }
    }

    newArr.push(min, max);
    
    return newArr;
}

function canNest(arrOne, arrTwo) {
    minMax(arrOne);
    minMax(arrTwo);

    if (
        newArr[0] > newArr[2] &&
        newArr[1] < newArr[3]
    ) {
        console.log("true");
        newArr = [];
        return true;
    }
    else {
        console.log("false");
        newArr = [];
        return false;
    }
}

canNest([1, 2, 3, 4], [0, 6]);
//expected true, returned true

canNest([1, 2, 3, 4], [2, 3]);
//expected false, returned false

canNest([9, 9, 8], [8, 9]);
//expected false, returned false

canNest([3, 1], [4, 0])
//expected true, returned true