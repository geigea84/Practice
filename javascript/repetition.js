//Create a recursive function that takes two parameters and 
//repeats the string n number of times. The first parameter 
//txt is the string to be repeated and the second parameter 
//is the number of times the string is to be repeated.

let str = "";

function repetition(txt, n) {
    if (n > 0) {
        n = n - 1;
        str = str.concat(txt);
        repetition (txt, n);
    }
    else {
        console.log(str);
    }
}

repetition("ab", 3);
//repetition("kiwi", 1);
//repetition("cherry", 2);