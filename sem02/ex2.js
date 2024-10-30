//implement a functions that returns the number of different characters between two strings of the same length received as parameters. 
//If the two strings are not of the same length, the function will return -1.

function compareChars(string1, string2)
{
    if(string1.length !== string2.length)
        return -1;

    let k=0;
    for(let i=0; i<string1.length; i++)
    {
        if(string1[i] !== string2[i])
            k++;
    }
    return k;
}

console.log(compareChars('bando', 'trash'));
console.log(compareChars('bando','bandit'));
console.log(compareChars('trim','grim'));
