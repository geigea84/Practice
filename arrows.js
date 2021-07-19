//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
//created this page to practice arrow functions, 
//namely researching which types are returned by arrow functions
//more to be found on the site

const materials = [
    "hydrogen",
    "helium",
    "lithium",
    "beryllium"
];

console.log(materials.map(material => material.length));
//expected output: [8, 6, 7, 9]

//traditional function
function alpha(a) {
    return a + 100;
}

//arrow function breakdown
//1. Remove the word "function" and place arrow between the argument and opening body bracket
//2. Remove the body braces and word "return" -- the return is implied.
//3. Remove the argument parentheses

a => a + 100;

//if you have multiple arguments or no arguments, 
//you'll need to re-introduce parentheses around the arguments

//traditional
function bravo(a, b) {
    return a + b + 100;
}

//arrow
(a, b) => a + b + 100;

//traditional no arguments
let a = 4;
let b = 2;
function charlie() {
    return a + b + 100;
}

//arrow no arguments
let a = 4;
let b = 2;
() => a + b + 100;