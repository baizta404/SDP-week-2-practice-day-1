function checkLeapYear(year) {
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

let year = 2012;

checkLeapYear(year)?console.log(`Yes, ${year} is a leap year`):console.log(`Sorry, ${year} is not a leap year`);