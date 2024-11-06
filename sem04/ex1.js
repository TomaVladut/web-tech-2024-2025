class Stream
{
    #value;
    #nextValue;
    static #counter = 0;

    constructor(value, nextVal)
    {
        this.#value = value;
        this.#nextValue = nextVal;
        Stream.#counter++;
    }

    get value()
    {
        return this.#value;
    }

    get next()  //getter that computes values
    {
        this.#value = this.#nextValue(this.#value);
        return this.#value;
    }

    static get count()
    {
        return Stream.#counter;
    }
}

class ConstantStream extends Stream
{
    constructor(value)
    {
        super(value, value => value);
    }
}

class IncreasingStream extends Stream
{
    constructor()
    {
        super(0, val => val + 5);
    }
}

const constStream = new ConstantStream(2);
const incStream = new IncreasingStream();
for(let i = 0; i < 5; i++)
{
    console.log(`constStream[${i}] = ${constStream.next}`);
    console.log(`incStream[${i}] = ${incStream.next}`);
}

console.log('number of streams created: ', Stream.count);


//implement an object type which represents a series of numbers increasing in size composed of even numbers starting with a given value. 
//The constructor of the object receives the initial value of the sequence. The only method is 'next', which produces the next value 
//in the sequence.

class EvenSequence
{
    #value;
    #next;

    constructor(value)
    {
        this.#value = value % 2 === 0 ? value : value + 1;
    }

    next()
    {
        const nextVal = this.#value;
        this.#value += 2;
        return nextVal;
    }
}

const seq = new EvenSequence(7);
for(let i = 0; i < 5; i++)
    console.log(seq.next());