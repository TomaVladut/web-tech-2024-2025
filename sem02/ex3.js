//count how many times a character appears in a text sample
function occurences(text, char)
{
    let count = 0;
    for(let i = 0; i < text.length; i++)
        if(text.charAt(i) === char)
            count++;
    return count;
}

console.log(occurences('this is the sample', 'h'));

//js way + arrow function
let occurence = (text, char) => text.split(char).length - 1;
console.log(occurence('this is a sample text','t'));


//implement a function that receives as a parameter a string containing a list of numbers 
//and returns an array containing a list of those numbers.

let transform = (stringOfNumbers) => stringOfNumbers.split(',').map(str => Number(str.trim()));
console.log(transform('1,4,5,6,2,7,3,3,4,8,6,1'));
