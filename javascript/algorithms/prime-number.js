// Function to determine if a number is a prime number

// Function declaration
function isPrime(n) {

    // Prime numbers must be greater than 1
    if (n < 2) {
        return false;
    }

    // Loop from i to n, and return false if n % i is equal to 0
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    // Any number that does not meet the requirements above is a prime number
    return true;
}

console.log(isPrime(51));
console.log(isPrime(2));
console.log(isPrime(5));
console.log(isPrime(6));

// Big O notation - O(n) - Linear time complexity

function isPrimus(n) {
    if (n < 2) {
        return false;
    };

    // Determine the Square root of n
    let checkSqrt = Math.sqrt(n)
    
    // Integers larger than the square root of n do not need to be checked
    for (i = 2; i <= checkSqrt; i++) {
        if (n % i === 0 ) {
            return false;
        };
    }

    return true;
}

// Big O notation = O(sqrt(n))

console.log(isPrimus(51));
console.log(isPrimus(2));
console.log(isPrimus(5));
console.log(isPrimus(6));