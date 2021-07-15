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
        console.log("f");
    }
    else if (g > f) {
        console.log("g");
    }
    else {
        console.log("neither");
    }
}

function f() {
    return 10;
}

function g() {
    return 5;
}

//whichIsLarger(() => 10, () => 5);
//expected f, returns g FAIL

//whichIsLarger(() => 100, () => 10);
//expected f, returns f

//whichIsLarger(() => 100, () => 50);
//expected f, returns g FAIL

//whichIsLarger(() => 100, () => 5);
//expected f, returns g FAIL

//whichIsLarger(() => 1000, () => 2);
//expected f, returns g FAIL

//whichIsLarger(() => 2, () => 1000);
//expected g, returns f FAIL

//whichIsLarger(() => 2, () => 1);
//expected f, returns f

//whichIsLarger(() => 1, () => 2);
//expected g, returns g

//whichIsLarger(5, 10);
//expected g, returns g

//whichIsLarger(5, 5);
//expected neither, returns neither

//whichIsLarger(f(), g());
//expected f, returns f