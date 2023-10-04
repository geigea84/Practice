// https://edabit.com/challenge/yXSTvCNen2DQHyrh6

// non recursive flatten deep using a stack
//
// note that depth control is hard/inefficient as we will need 
// to tag EACH value with its own depth
//
// also possible w/o reversing on shift/unshift, but array OPs 
// on the end tends to be faster
function getLength(arr) {
    const stack = [...arr];
    console.log("stack start: ", stack);
    const results = [];
    while (stack.length) {
        // pop value from stack
        const next = stack.pop();
        console.log("popped from stack: ", next);
        if (Array.isArray(next)) {
            // push back array items, won't modify the original input
            stack.push(...next);
            console.log("stack after push: ", stack);
        } else {
            results.push(next);
            console.log("results after push: ", results);
        }
    }
    // reverse to restore input order
    results.reverse();
    console.log("results after reverse: ", results);
    console.log("actual length: ", results.length);
}

getLength([1, [2, 3]]) // 3

getLength([1, [2, [3, 4]]]) // 4

getLength([1, [2, [3, [4, [5, 6]]]]]) // 6

getLength([1, [2], 1, [2], 1]) // 5
