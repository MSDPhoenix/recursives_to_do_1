// Recursive Sigma

// Write a recursive function that given a number returns the sum of integers from 1 to that number. Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.

function recursive_sum(start) {
    if ( start == 0 ) {
        return start
    }
    console.log(start);
    return start + recursive_sum(start-1)
}

console.log("sum: ",recursive_sum(0))
console.log("sum: ",recursive_sum(1))
console.log("sum: ",recursive_sum(2))
console.log("sum: ",recursive_sum(3))
console.log("sum: ",recursive_sum(4))
console.log("sum: ",recursive_sum(5))

// Recursive Factorial

// Given num, return the product of ints from 1 up to num. If less than zero, treat as zero. If not an integer, truncate. Experts tell us 0! is 1. rFact(3) = 6 (1*2*3). Also, rFact(6.5) = 720 (1*2*3*4*5*6).

function recursive_factorial(num) {
    if (num == 0){
        return 1
    }
    else if (num < 0) {
        return 0
    }
    console.log(num);
    return num*recursive_factorial(num-1)
}

console.log("factorial of -1:",recursive_factorial(-1))
console.log("factorial of 0:",recursive_factorial(0))
console.log("factorial of 1:",recursive_factorial(1))
console.log("factorial of 2:",recursive_factorial(2))
console.log("factorial of 3:",recursive_factorial(3))
console.log("factorial of 4:",recursive_factorial(4))
console.log("factorial of 5:",recursive_factorial(5))
console.log("factorial of 6:",recursive_factorial(6))
console.log("factorial of 7:",recursive_factorial(7))
console.log("factorial of 8:",recursive_factorial(8))
console.log("factorial of 9:",recursive_factorial(9))
