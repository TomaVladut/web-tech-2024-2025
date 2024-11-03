//write a function that squares all of the elements of a given array of numbers then sums all of them up
const arrayNo = [2,5,7,8,1,4];

//reduce works through an array element by element, adding the current array value to the result from the previous step
const sumOfSquares = (arrayNo) => arrayNo.map((val) => val*val).reduce((prev, current) => prev + current, 0);  
console.log(sumOfSquares(arrayNo));


//implement a function which receives an array of numbers and a number as parameters and returns the sum of all array elements 
//divisible by the second parameter

const arrayNo2 = [2, 14, 27, 34, 15, 72, 89, 10, 24, 33, 101, 28];

const divisorSum = (arrayNo2, divisor) => arrayNo2.filter((val) => val % divisor === 0).reduce((prev, current) => prev + current, 0);
console.log(divisorSum(arrayNo2, process.argv[2]));
