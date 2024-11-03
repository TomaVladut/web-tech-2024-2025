//write a function that filters a list of strings based on a given word and checks a minimum length

const animals = ['crocodile', 'lion', 'panda', 'penguin', 'dog', 'cheetah', 'cat', 'penguin'];
const excludedWord = 'penguin';
const minLength = 4;

const filterList = (list, excludedWord, minLength) => list.filter((word) => (word !== excludedWord && word.length >= minLength));
console.log(filterList(animals, excludedWord, minLength));


//use the map and filter methods to process an array of numbers representing birth years to obtain all ages over 18.

const birthYears = [2009, 2000, 2004, 2003, 2007, 2014, 1994, 2008, 2011, 2005, 2012, 2002, 2010];

const adults = (birthYears) => {
    const currentYear = new Date().getFullYear();
    return birthYears.filter((year) => currentYear - year >= 18).map((year) => currentYear - year);
}
console.log(adults(birthYears));