// https://edabit.com/challenge/NHfYRHg2tDtcZyykB

function possibleBonus(a, b) {
    let difference = b - a;

    if (difference < 7 && difference > 0) {
        console.log(true);
    } else {
        console.log(false);;
    }
}

possibleBonus(3, 7) // true

possibleBonus(1, 9) // false

possibleBonus(5, 3) // false
