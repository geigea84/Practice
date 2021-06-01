//Create a function that takes a number as an argument. 
//Add up all the numbers from 1 to the number you passed to the function. 
//For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

let numArr = [];

function addUp(n) {
    if (n > 0) {
        numArr.push(n);
        //console.log(numArr);
        n = n - 1;
        addUp(n);
    }
    else {
        let sum = numArr.reduce(function (a, b) {
            return a + b;
        }, 0);
        console.log(sum);
    }
}

//addUp(4);
//addUp(13);
addUp(600);