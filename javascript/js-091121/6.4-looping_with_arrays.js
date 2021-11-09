// 1. Create an array containing 4 population values of 4 countries of
// your choice.
// Store this array into a variable called 'populations'
// 2. Create a function called ‘populationPercentages’ that takes the
// population array as an argument.
// 3. Inside the function, create an empty array called ‘percentages’.
// 4. Use a for loop to iterate over the population array you received
// as an argument..
// 5. On each iteration use the function we created earlier (module 3,
// ex.3.3-declarations vs expressions) for each element of the array.
// 6. Push the result to the ‘percentages’ array.
// 7. Return from the function the ‘percentages’ array.

const populationPercentages = arr => {
    let sum = 0
    for (let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    let percentages = []
    for (let i = 0; i < arr.length; i++){
        let percentage = percentageOfWorld(arr[i],sum)
        percentages.push(percentage.toFixed(2) + '%')
    }
    console.log('word population : ',sum)
    return percentages
}

function percentageOfWorld(population,worldPopulation){
    return (population / worldPopulation *100)
}

const populations = [50,60,460,70]
const percentages = populationPercentages(populations)
console.log('populations: ',populations)
console.log('population\'s percentages:',percentages )
