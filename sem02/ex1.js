//EXAMPLE:
//let sayHello = (name) => {return `hello, ${name}!`;};
//let sayHello = (name) => `hello ${name}!`;

//console.log(sayHello(process.argv[2]));

//implement an arrow function that receives as a parameter an array of strings and returns a single string obtained by concatenating 
//the strings in the array received as a parameter.

let cars = ['BMW', 'Mercedes','Audi'];
let concat = (cars) => {
    let result = "";
    for(let i=0; i<cars.length; i++)
        result+=cars[i];
    return result;
}
console.log(concat(cars));