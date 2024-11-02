//implement a function which calculates the relative frequencies of all of the words in a given text sample

const textSample = 'the quick brown fox jumps over the lazy dog';

function wordFreqency(sample)
{
    words = sample.split(' ');
    const result = {}; 
    for(let word of words)
    {
        if(word in result)
        {
            result[word]++;
        }
        else result[word] = 1;
    }

    for(word in result)
    {
        result[word] = result[word]/words.length;
    }   

    return result;
}

console.log(wordFreqency(textSample));


//implement a function which calculates the relative frequencies of letters in a text, excluding the space character.

const letterFrequency = (sample) => {
    const result = {};
    let spaceCharCounter = 0;

    for(let i = 0; i < sample.length; i++)
    {
        if(sample[i] !== ' ')
        {
            if(sample[i] in result)
                result[sample[i]]++;
            else result[sample[i]] = 1;
        }
        else spaceCharCounter++;
    }

    for(char in result)
    {
        result[char] = result[char]/(sample.length - spaceCharCounter);
    }

    return result;
}

console.log(letterFrequency(textSample));
