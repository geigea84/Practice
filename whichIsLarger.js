// https://edabit.com/challenge/o7TwicAHWuMkjbDqQ
// Your function will be passed two functions, f and g, that don't take any parameters. 
// Your function has to call them, and return a string which indicates which function 
// returned the larger number.

// If f returns the larger number, return the string f.
// If g returns the larger number, return the string g.
// If the functions return the same number, return the string neither.

// Examples
// whichIsLarger(() => 5, () => 10) ➞ "g"

// whichIsLarger(() => 25,  () => 25) ➞ "neither"

// whichIsLarger(() => 505050, () => 5050) ➞ "f"

function whichIsLarger(f, g) {
    if (f > g) {
        // console.log("f");
        return "f";
    }
    else if (g > f) {
        // console.log("g");
        return "g";
    }
    else {
        // console.log("neither");
        return "neither";
    }
}

function f() {
    return 10;
}

function g() {
    return 5;
}

//what type is a function returning? (string or int?)

const funArr = [
    whichIsLarger(() => 10, () => 5),
    whichIsLarger(() => 100, () => 10),
    whichIsLarger(() => 100, () => 50),
    whichIsLarger(() => 100, () => 5),
    whichIsLarger(() => 1000, () => 2),
    whichIsLarger(() => 2, () => 1000),
    whichIsLarger(() => 2, () => 1),
    whichIsLarger(() => 1, () => 2),
    whichIsLarger(5, 10),
    whichIsLarger(5, 5),
    whichIsLarger(f(), g())
]

const expectedArr = [
    "f", "f", "f", "f", "f", "g", "f", "g", "g", "neither", "f"
]

function testFunArr() {
    for (let i = 0; i < funArr.length; i++) {
        console.log(
            "Test " + [i + 1] + "\n" + 
            "Expected " + expectedArr[i] + ", " +
            "returned " + funArr[i]
        );

        if (expectedArr[i] == funArr[i]) {
            console.log("SUCCESS" + "\n");
        }
        else {
            console.log("FAIL" + "\n");
        }
    }
}

// function testAll() {
//     console.log(
//         "test 1" + "\n" +
//         "expected f, returns "
//     );
//     whichIsLarger(() => 10, () => 5);
//     //expected f, returns g FAIL

//     console.log(
//         "test 2" + "\n" +
//         "expected f, returns "
//     );
//     whichIsLarger(() => 100, () => 10);
//     //expected f, returns f

//     console.log(
//         "test 3" + "\n" +
//         "expected f, returns "
//     );
//     whichIsLarger(() => 100, () => 50);
//     //expected f, returns g FAIL

//     console.log(
//         "test 4" + "\n" +
//         "expected f, returns "
//     );
//     whichIsLarger(() => 100, () => 5);
//     //expected f, returns g FAIL

//     console.log(
//         "test 5" + "\n" +
//         "expected f, returns "
//     );
//     whichIsLarger(() => 1000, () => 2);
//     //expected f, returns g FAIL

//     console.log(
//         "test 6" + "\n" +
//         "expected g, returns "
//     );
//     whichIsLarger(() => 2, () => 1000);
//     //expected g, returns f FAIL

//     console.log(
//         "test 7" + "\n" +
//         "expected f, returns "
//     );
//     whichIsLarger(() => 2, () => 1);
//     //expected f, returns f

//     console.log(
//         "test 8" + "\n" +
//         "expected g, returns "
//     );
//     whichIsLarger(() => 1, () => 2);
//     //expected g, returns g

//     console.log(
//         "test 9" + "\n" +
//         "expected g, returns "
//     );
//     whichIsLarger(5, 10);
//     //expected g, returns g

//     console.log(
//         "test 10" + "\n" +
//         "expected neither, returns "
//     );
//     whichIsLarger(5, 5);
//     //expected neither, returns neither

//     console.log(
//         "test 11" + "\n" +
//         "expected f, returns "
//     );
//     whichIsLarger(f(), g());
//     //expected f, returns f
// }

//testAll();
testFunArr();