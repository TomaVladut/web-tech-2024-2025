//variadic function samples
let sum = (...args) => args.reduce((nr1, nr2) => nr1 +nr2);

console.log(sum(2,4,5,1));
console.log(sum(4400,120,500));

function avg(...args)
{
    count = args.length;
    sum = args.reduce((nr1, nr2) => nr1 + nr2);
    return sum/count;
}

console.log(avg(9,1));
console.log(avg(2,4,8,16,32));


//implement a function that receives as parameters two arrays of the same length and returns an array which containes 
//the interspersed elements of the two sources.
function intersperseArrays(arr1, arr2)
{
    if(arr1.length !== arr2.length)
        throw new Error('Arrays must have the same length');
        //return -1;

    arr3 = [];
    for(let i = 0; i < arr1.length; i++)
        {
            arr3.push(arr1[i]);
            arr3.push(arr2[i]);
        }
    return arr3;
}

console.log(intersperseArrays([1,4,2], [2,8,1]));
