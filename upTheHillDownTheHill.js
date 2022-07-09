// https://edabit.com/challenge/vEY5A5Kq8xsPTQG8S

// If a person traveled up a hill for 18mins at 20mph and then traveled 
// back down the same path at 60mph then their average speed traveled was 30mph.

// Write a function that returns the average speed traveled given an uphill time, 
// uphill rate and a downhill rate. Uphill time is given in minutes. Return the 
// rate as an integer (mph). No rounding is necessary.

function aveSpd(upMins, upRate, downRate) {
    let downMins = upMins * (upRate / downRate);
    let totalMins = upMins + downMins;
    let upDistance = (upMins / 60) * upRate;
    let downDistance = (downMins / 60) * downRate;
    let totalDistance = upDistance + downDistance;

    let aveRate = totalDistance / totalMins * 60;

    console.log(aveRate);
}

aveSpd(18, 20, 60) // 30

aveSpd(30, 10, 30) // 15

aveSpd(30, 8, 24) // 12