// https://edabit.com/challenge/r6TSNwkLZ2DgsoKiH

function oddishOrEvenish(num) {
    let numString = num.toString();
    let count = 0;

    for (let i = 0; i < numString.length; i++) {
        count += parseInt(numString.charAt(i));
    }

    if (count % 2 === 0) {
        console.log("Evenish");
    } else {
        console.log("Oddish");
    }
}

oddishOrEvenish(43) // "Oddish"
// 4 + 3 = 7
// 7 % 2 = 1

oddishOrEvenish(373) // "Oddish"
// 3 + 7 + 3 = 13
// 13 % 2 = 1

oddishOrEvenish(4433) // "Evenish"
// 4 + 4 + 3 + 3 = 14
// 14 % 2 = 0
