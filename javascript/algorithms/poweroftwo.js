function isPowerOfTwo(n) {
    // If n is not a positive integer, return false
    if (n < 1) {
        return false;
    };

    while (n > 1) {
        // If n is not an even number, return false
        if (n % 2 !== 0) {
            return false;
        };

        // recursive division of n by 2 until it is = 1
        n = n / 2;
    }

    // At the point, n = 1, then it returns true
    return true;   

    // // Bitwise AND Power of 2 technique

    // return (n & (n - 1)) === 0
    // Bitwise Big-O = O(1)
}

console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(17)); 
console.log(isPowerOfTwo(128));

// Big-O = O(logn)