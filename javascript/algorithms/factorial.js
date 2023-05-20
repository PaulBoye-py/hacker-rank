// Given a number 'n', find n!

// Function declaration
function factotial(n) {

    // Since 0! and 1! are equal to 1, define a variable as 1
    let result = 1;

    // Loop through 2 and n, and keep multiplying the result by the iterand
    for (i = 2; i <= n; i++) {

        result = result * i;
    }

    // Return result
    return result;
};

console.log(factotial(0));
console.log(factotial(1));
console.log(factotial(4))
console.log(factotial(5));

// Big O notation = O(n) - Linear time complexity