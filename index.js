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
