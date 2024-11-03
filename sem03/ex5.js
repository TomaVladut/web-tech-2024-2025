//write a function that check if a sentence is an acrostic
const sampleDictionary = ['the', 'quick', 'brown', 'fox', 'jumps', 'over', 'lazy', 'dog'];
const sampletext = `
    best
    read
    on
    windy
    nights
`;

//filter(e => e) will evaluate an empty string to false
const checkAcrostic = (text, dictionary) => {
    const result = text.split(/[\n ,]+/).filter(e => e).map(e => e.trim()).map(e => e[0]).join('');

    return (sampleDictionary.indexOf(result) !== -1)
}

console.log(checkAcrostic(sampletext, sampleDictionary));


//implement censoring some text through a function. The function receives a string of characters and a dictionary represented 
//through an array. For example, the string "javascript is  wonderful" and the dictionary ["wonderful"]. 
//the function will return  "javascript is w*******l". 

const sampleDictionary2 = ['wonderful', 'bad', 'innovative'];
const sampletext2 = 'javascript is wonderful and innovative';

const censorText = (text, dictionary) => {
    return text.split(/[\n ,]+/).map(word => {
        if(dictionary.indexOf(word) !== -1)
            return word[0] + '*'.repeat(word.length -2) + word[word.length - 1];
        return word;
    }).join(' ');
}

console.log(censorText(sampletext2, sampleDictionary2));