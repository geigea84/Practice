// https://edabit.com/challenge/5bW3TmPnae2FNvusk

// Create a function that, given a string with at least three characters, returns an array of its:

// Length.
// First character.
// Last character.
// Middle character, if the string has an odd number of characters. Middle TWO characters, if the string has an even number of characters.
// Index of the second occurrence of the second character in the format "@ index #" and "not found" if the second character doesn't occur again.

function allAboutStrings(str) {
    const len = str.length;

    if (len < 3) {
        console.log("Input string must have length of 3 or greater.");
        return;
    }
    
    const stringArr = [];

    stringArr.push(len);
    stringArr.push(str.charAt(0));
    stringArr.push(str.charAt(len - 1));
    stringArr.push(getMiddle(str));
    stringArr.push(getDuplicate(str));

    console.log(stringArr);
}

function getMiddle(str) {
    if (str.length % 2 == 0) {
        return str.charAt(Math.floor(str.length / 2 - 1)).concat(str.charAt(Math.floor(str.length / 2)));
    } else {
        return str.charAt(Math.floor(str.length / 2));
    }
}

function getDuplicate(str) {
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str.charAt(i) == str.charAt(j)) {
                return `@ index ${j}`;
            }
        }
    }

    return "not found";
}

allAboutStrings("LASA") // [4, "L", "A", "AS", "@ index 3"]

allAboutStrings("Computer") // [8, "C", "r", "pu", "not found"]

allAboutStrings("Science") // [7, "S", "e", "e", "@ index 5"]
