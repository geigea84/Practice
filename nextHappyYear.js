// https://edabit.com/challenge/ruW8bbjeMdb9jNsW7

// A Happy Year is a year with only distinct digits. 
// Create a function that takes an integer year and returns the next happy year.

function happyYear(year) {
    let nextYear = year + 1;
    const yearArr = [nextYear];

    for (const year of yearArr) {
        const yearString = year.toString();
        const yearCharSet = new Set();
        
        for (let i = 0; i < yearString.length; i++) {
            yearCharSet.add(yearString.charAt(i));
        }

        if (yearCharSet.size === yearString.length) {
            console.log(year);
            return year;
        } else {
            yearArr.push(year + 1);
        }
    }
}

happyYear(2017) // 2018

happyYear(1990) // 2013

happyYear(2021) // 2031

happyYear(9999) // 10234
