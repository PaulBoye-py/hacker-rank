// Given the number 'n', find the first 'n' elements of the fibonacci sequence

// Function declaration
function fibonacci(n) {

    // The first 2 elements of all fibonacci sequences are 0 and 1, so we define an array with 0 and 1
    var arr = [0,1]

    // Iterate the array while i is less than n, and define what the value of the arr at i should be
    for (i=2; i<n; i++) {
        arr[i] = arr[i-1] + arr[i-2]
    }

    // Return array
    return arr
}

// Big O notation is 0(n) - Linear because as the value of n increases, the number of times line 10 is executed also increases

console.log(fibonacci(8))
