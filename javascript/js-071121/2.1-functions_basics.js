// 1. Write a function called 'describeCountry' which takes
// three parameters:
// 'country', 'population' and 'capitalCity'. Based on this input,
// the
// function returns a string with this format: 'Finland has 6
// million people and its capital city is Helsinki'
// 2. Call this function 3 times, with input data for 3 different
// countries. Store the returned values in 3 different variables,
// and log them to the console. 

const describeCountry = (country,population,capitalCity) => `${country} has ${population} people and its capital city is ${capitalCity}`

let israel = describeCountry('Israel', '9 million', 'Jerusalem')
let ireland = describeCountry('Ireland', '6 million', 'Dublin')
let india = describeCountry('India','1 billion', 'Delhi')

console.log(israel)
console.log(ireland)
console.log(india)