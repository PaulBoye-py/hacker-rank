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
}

console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(5)); 
console.log(isPowerOfTwo(128));

// Big-O = O(logn)