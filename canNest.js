// https://edabit.com/challenge/Gpy2qSFnfhGJnWMMj
// Create a function that returns true if the first array can be nested inside the second.

// arr1 can be nested inside arr2 if:

// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.

let minOne;
let minTwo;
let maxOne;
let maxTwo;

function canNest(arrOne, arrTwo) {
    minOne = arrOne[0];
    minTwo = arrTwo[0];
    maxOne = arrOne[0];
    maxTwo = arrTwo[0];

    for (let i = 0; i < arrOne.length; i++) {
        if (minOne > arrOne[i]) {
            minOne = arrOne[i];
        }
        if (arrOne[i] > maxOne) {
            maxOne = arrOne[i];
        }
    }
}