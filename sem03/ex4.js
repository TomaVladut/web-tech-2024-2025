//implement a global map function
const sampleArray = [25, 3, 7, 3, 5];

const map = (array, instructions) => {
    const result = [];
    for(let element of array)
        result.push(instructions(element))
    return result;
}

console.log(map(sampleArray, x => x*x));


//reimplement the reduce(reduce left) method as a global funciton

const reduce = (sampleArray, instructions) =>{
    let prev = 0;
    if(sampleArray.length === 0)
        return 0;
    else if(sampleArray.length === 1)
        return sampleArray[0];
    else
    {
        let current = sampleArray[0];
        prev = instructions(current, sampleArray[1]);
        for(let i = 2; i < sampleArray.length; i++)
        {
            current = sampleArray[i];
            prev = instructions(prev, current);
            
        }
    }

    return prev;
}

console.log(reduce(sampleArray, (x,y) => x - y));
