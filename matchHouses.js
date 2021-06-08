//Create a function that takes a number (step) as an argument and returns 
//the number of matchsticks in that step. See step 1, 2 and 3 in the image above.
//https://edabit.com/challenge/tYHkTdFrEmWfxpPKF

function matchHouses(step) {
    if (step == 0) {
        console.log(0);
    }
    else {
        let sticks = step * 4 + (step + 1);
        console.log(sticks);
    }
}

matchHouses(1);
matchHouses(4);
matchHouses(87);