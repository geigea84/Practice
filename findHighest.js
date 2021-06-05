//Create a function that finds the highest integer in the array using recursion.

let highest;

//for loop

// function findHighest(numArr) {
//     for (i = 0; i < numArr.length; i++) {
//         if (numArr[i] < numArr[i + 1]) {
//             highest = numArr[i + 1];
//         }
//     }
//     console.log(highest);
// }

//recursion

let index = 0;

function findHighest(numArr) {
    if (numArr[index] < numArr[index + 1]) {
        highest = numArr[index + 1];
    }
    if (index == numArr.length) {
        console.log(highest);
    }

    index = index + 1;

    if (index <= numArr.length) {
        findHighest(numArr);
    }
}

findHighest([-1, 3, 5, 6, 99, 12, 2]);
//findHighest([0, 12, 4, 87]);
//findHighest([6,7,8]);