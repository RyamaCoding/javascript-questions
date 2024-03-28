// Return the sum of two numbers.

function sum(a, b) {
    return a + b;
}

console.log(sum(3,5))

// Convert hours into seconds

function hoursToSeconds(hours) {
    return hours * 3600;
}

console.log(hoursToSeconds(2))

// Calculate the perimeter of a rectangle

function calcPerimeter(l, w) {
    return 2 * (l + w);
}

console.log(calcPerimeter(4,6))

// Calculate the area of a triangle

function calcTriangleArea(b, h) {
    return 0.5 * (b * h);
}

console.log(calcTriangleArea(2, 4))

// Extend a String 

function extendString(string) {
    return string += ' Frontend Simplified';
}

console.log(extendString('Use'))

// Greater than 100 

function greaterThan100(num1, num2) {
    let sum = num1 + num2

    return sum > 100;
}

console.log(greaterThan100(40, 40))

// less than or equal to zero 

function lessThanOrEqualToZero(num) {
    return num <= 0;
}

console.log(lessThanOrEqualToZero(-1))

// Opposite Boolean 

function oppositeBoolean(bool) {
    return !bool;
}

console.log(oppositeBoolean(true))

// Return any number that is not Zero

function notZero(num) {
    return num != 0;
}

console.log(notZero(null))

// Calculate the remainder

function calcRemainder(num1, num2) {
    return num1 % num2;
}

console.log(calcRemainder(7, 8))

// Is the number odd?

function isOdd(num) {
    return num % 2 != 0;
}

console.log(isOdd(5))

// If a number is even, return 1, othewrise return -1.

function isEvenReturn1(num) {
    return num % 2 === 0 ? '1' : '-1'
}

console.log(isEvenReturn1(8))

// Check if a user is logged in AND subscribed 

function loggedAndSubscribed(login, subscription) {
    return login === 'LOGGED_IN' && subscription === 'SUBSCRIBED';
}

console.log(loggedAndSubscribed('LOGGED_IN', 'SUBSCRIBED'))


// check if a user is logged or subscribed 

function loggedOrSubscribed(login, subscription) {
    return login === 'LOGGED_OUT' || subscription === 'SUBSCRIBED';
}

console.log(loggedOrSubscribed('LOGGED_IN', 'SUBSCRIBED'))

/* MEDIUM LEVEL CHALLENGES */

//* if given a falsy value as element 1 return the falsy value 

function returnFalsy(elem1, elem2) {
    return !elem1 ? elem1 : elem2; 
}

console.log(returnFalsy(0, 500))

//* return the length of any given array

function lengthArray(arr) {
    return arr.length;
}

console.log(lengthArray([5, 10, 15, 20]))

//* return the last number of any given array

function lastArrayNumber(arr) {
    return arr[arr.length - 1];
}

console.log(lastArrayNumber([1, 2, 7]))

//* find the sum of all elements in the array

function sumArray(arr) {
    let sum = 0;

    for (i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]))

//* add up the numbers from a single number

function progressiveSum(num) {
    let sum = 0 

    for (i = 1; i <= num; i++) {
        sum = sum + i;
    }

    return sum;
}

console.log(progressiveSum(3))

//* convert seconds into a minute and seconds timer

function secondsToTimer(seconds) {
    let timerSeconds = seconds % 60;
    let timerMinutes = Math.floor(seconds / 60);

    if (timerMinutes.toString().length === 1) {
        timerMinutes = '0' + timerMinutes;
    }

    if (timerSeconds.toString().length === 1) {
        timerSeconds = '0' + timerSeconds
    }

    return timerMinutes + ':' + timerSeconds;
}

console.log(secondsToTimer(245))

//* find the biggest number of an element

function findBigNum(arr) {
    let num = 0;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            num = arr[i];
        }
    }

    return num;
}

console.log(findBigNum([0, 10, 100, 75]))

//* reverse the string abc to cba and so on

function reverseString(string) {
    return string.split("").reverse().join("");
} 

console.log(reverseString('abc'))

//* turn every element of an array into 0 use map

function everythingZero(arr) {
    return arr.map(element => {
        return 0;
    })
}

console.log(everythingZero([10, 20, 30, 40]))

//* Remove apples from the list

function removeApples(arr) {
    let noApples = []

    for (i = 0; i < arr.length; i++) {
        if(arr[i] !== 'Apples') {
            noApples.push(arr[i]); 
        }
    }

    return noApples;
}

console.log(removeApples(['Apples', 'Bananas', 'Oranges']))