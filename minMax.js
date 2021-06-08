//Create a function that takes an array of numbers and 
//return both the minimum and maximum numbers, in that order.
//https://edabit.com/challenge/Q3n42rEWanZSTmsJm

let min;
let max;

function minMax(numArr) {
    min = numArr[0];
    max = numArr[0];
    let minMaxArr = [min, max];

    for (i = 0; i < numArr.length; i++) {
        if (min > numArr[i]) {
            min = numArr[i];
        }
        else if (numArr[i] > max) {
            max = numArr[i];
        }
    }
    console.log(minMaxArr);
}

minMax([1, 2, 3, 4, 5]);
//minMax([2334454, 5]);
//minMax([1]);