//formatting a string example:

const formatString = (string, ...params) => {
    let modified = string;
    for(let i = 0; i < params.length; i++)
    {
        if(modified.indexOf('{' + i + '}') !== -1)
            modified = modified.replace('{' + i + '}', params[i]);
    }

    return modified;
}

console.log(formatString('this {0} text will be {1} however the {2} sees fit.', 'sample', 'modified', 'user'));


//implement a string formatting function which can handle named parameters;
//for example "a {substantive} is {adjective}" can be formatted as "a cat is fat".

const formatString2 = (string, ...params) => {
    let modified = string;
    const paramNames = [...string.matchAll(/\{(\w+)\}/g)].map(match => match[1])

    for(let i = 0; i < params.length; i++)
    {
        if(paramNames[i] && modified.indexOf('{' + paramNames[i] + '}') !== -1)
            modified = modified.replace('{' + paramNames[i] + '}', params[i])
    }

    return modified;
}

console.log(formatString2('a {substantive} is {adjective}', 'cat', 'fat'));