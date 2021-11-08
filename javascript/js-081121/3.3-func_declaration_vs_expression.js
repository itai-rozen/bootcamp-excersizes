// 1. The world population is 7900 million people. Create a
// function declaration called 'percentageOfWorld1' which
// receives a 'population' value, and returns the percentage of
// the world population that the given population represents.
// For example, China has 1441 million people, so it's about
// 18.2% of the world population.
// 2. To calculate the percentage, divide the given 'population'
// value by 7900 and then multiply by 100
// 3. Call 'percentageOfWorld1' for 3 populations of countries
// of your choice, store the results into variables, and log
// them to the console
// 4. Create a function expression which does the exact same
// thing, called 'percentageOfWorld2', and also call it with 3
// country populations (can be the same populations)
const worldPopulation = 7900 * 10 ** 6
const percentageOfWorld1 = population => `${population / worldPopulation *100}%`

function percentageOfWorld2(population){
    return `${(population / worldPopulation *100)}%`
}

let israelPopulation = 9 * 10 ** 6
let chinaPpulation = 1400 * 10 ** 6 
let indiaPopulation = 1384 * 10 ** 6

let israelPercetage1 = percentageOfWorld1(israelPopulation) 
let israelPercetage2 = percentageOfWorld2(israelPopulation)
let chinaPercentage1 = percentageOfWorld1(chinaPpulation)
let chinaPercentage2 = percentageOfWorld2(chinaPpulation)
let indiaPercentage1 = percentageOfWorld1(indiaPopulation)
let indiaPercentage2 = percentageOfWorld2(indiaPopulation)

console.log('Israel percentage of the world by percentageOfWorld1:',israelPercetage1)
console.log('Israel percentage of the world by percentageOfWorld2:',israelPercetage2)
console.log('China percentage of the world by percentageOfWorld1:',chinaPercentage1)
console.log('China percentage of the world by percentageOfWorld2:',chinaPercentage2)
console.log('India percentage of the world by percentageOfWorld1:',indiaPercentage1)
console.log('India percentage of the world by percentageOfWorld2:',indiaPercentage2)