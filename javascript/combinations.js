// https://edabit.com/challenge/tRx22rECqK4dTJTg8

// Create a function that takes a variable number of arguments, 
// each argument representing the number of items in a group. 
// The function should return the number of permutations (combinations) 
// of choices you would have if you selected one item from each group.

function combinations() {
    let product = arguments[0];
    
    for (let i = 1; i < arguments.length; i++) {
        product = product * arguments[i];
    }

    console.log(product);
}

combinations(2, 3) // 6

combinations(3, 7, 4) // 84

combinations(2, 3, 4, 5) // 120

combinations(2) // 2
