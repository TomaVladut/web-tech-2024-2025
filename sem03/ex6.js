//delete all of the objects from an array that have the same properties as another object
const laptops = [
    { brand: 'hp', processor: 'i5', ram: 8},
    { brand: 'Lenovo', processor: 'i5', ram: 16},
    { brand: 'Dell', processor: 'i5', ram: 8},
    { brand: 'Asus', processor: 'i7', ram: 8}
];

const deleteMatchingElements = (array, object) => {
    return array.filter(element => {
        let result = false;
        Object.keys(object).forEach(key => {
            if(element[key] !== object[key])
                result = true;
        });
        return result;
    });
}

console.log(deleteMatchingElements(laptops, {processor: 'i5', ram:8}));


//write a function that receives as parameters an array of objects and a string and returns the sorted array based on the key sent in the 
//second parameter.
const cars = [
    {brand: 'BMW', price: 30000},
    {brand: 'Mercedes', price: 50000},
    {brand: 'Volvo', price:18000},
    {brand: 'Nissan', price: 23000}
];

const sortObjects = (array, key) => {
    if(!array || array.length === 0)
        throw new Error('no objects passed');

    const keyArray = Object.keys(array[0]);
    if(keyArray.indexOf(key) === -1)
        throw new Error('the key you have selected is not in the dictionary');
    else
    {
        return array.sort((a, b) =>{
            if(typeof a[key] === 'number' && typeof b[key] === 'number')
                return a[key] - b[key];
            else return a[key].localeCompare(b[key]);
        });
    }
}

console.log(sortObjects(cars,'price'));


//Write a function that groups an array of objects by a specified property and returns an object where the keys are 
//the property values and the values are arrays of objects that share that property.

const people = [
    { name: 'John', age: 25, city: 'New York' },
    { name: 'Jane', age: 22, city: 'Chicago' },
    { name: 'Sam', age: 25, city: 'New York' },
    { name: 'Anna', age: 30, city: 'Chicago' },
    { name: 'Mark', age: 22, city: 'Boston'},
    { name: 'John', age: 25, city: 'New York'}
];

const groupBy = (array, property) => {
    return array.reduce((prev, current) => {
        const key = current[property];
        if(key)
        {
            if(!prev[key])
                prev[key] = [];
            prev[key].push(current);
        }
        return prev;
    }, {});
}

console.log(groupBy(people,'city'));