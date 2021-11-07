// Write a function that calculates the circle area by a given radius as an
// argument. Print the area as it is calculated and then print it rounded to two
// decimal places.

const calclateCircleArea = radius => Math.PI * radius ** 2

let givenRadius = 2
let circleArea = calclateCircleArea(givenRadius)
console.log('given radius: ',givenRadius,' circle area : ', circleArea)
console.log('area rounded to 2 decimal points: ', circleArea.toFixed(2))
