// https://edabit.com/challenge/GLbuMfTtDWwDv2F73
// Create a function which returns the number of true values there are in an array.

function countTrue(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === true) {
            count++;
        }
    }

    console.log(count);
    return count;
}

// Expected: 2
countTrue([true, false, false, true, false]);

// Expected: 0
countTrue([]);

// Expected: 0
countTrue([false, false, false, false]);
