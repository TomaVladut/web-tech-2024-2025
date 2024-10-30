//check if a number is prime using cli inputs
let checkPrime = (n) => {
    if (n <= 1) return false;
    for(let i = 2; i <= Math.sqrt(n); i++)
        if(n % i === 0)
            return false;
    return true;
}

console.log(checkPrime(parseInt(process.argv[2])));

//implement a function which calculates the Fibonacci series element of some order, with this order being received 
//as a command line parameter.

let fibonacci = (n) => {
    let fib=0;
    let val2=1;

    if(n === 0) return fib;
    else if(n === 1) return val2;
    
    n = n-1;
    while(n !== 0)
        {
            let prev = fib;
            fib = fib + val2;
            val2 = prev;
            n--;
        }
    return fib;
}

console.log(fibonacci(parseInt(process.argv[3])));