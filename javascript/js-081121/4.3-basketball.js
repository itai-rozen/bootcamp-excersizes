// John and Mike both play basketball in different teams. In the latest 3 games,
// John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94
// and 123 points.

// 1. Calculate the average score for each team
// 2. Decide which teams wins in average (highest average score), and print the
// winner to the console. Also include the average score in the output.
// 3. Then change the scores to show different winners. Don't forget to take into
// account there might be a draw (the same average score)
// 4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105
// points. Like before, log the average winner to the console.
// 5. Like before, change the scores to generate different winners, keeping in
// mind there might be draws.

const calcuiateAvg = (n1,n2,n3) => (n1+n2+n3) / 3

const getHighestAvg = (johnAvg,mikeAvg,maryAvg) => {
    if (johnAvg === mikeAvg && mikeAvg === maryAvg) return'DRAW between all teams!'
    let highestAvg = Math.max(johnAvg,mikeAvg,maryAvg)
    console.log('highest average: ',highestAvg)
    let winningTeam
    if (highestAvg === johnAvg) winningTeam = "John"
    else if (highestAvg === mikeAvg) winningTeam = "Mike"
    else  (winningTeam = "Mary")
    return `the winning team is ${winningTeam}\'s with average of ${highestAvg}`
}
// CASE 1

let johnScore1 = 120
let johnScore2 = 130
let johnScore3 = 90
let mikeScore1 = 70
let mikeScore2 = 50
let mikeScore3 = 60
let maryScore1 = 88
let maryScore2 = 90
let maryScore3 = 45

let johnAverage = calcuiateAvg(johnScore1,johnScore2,johnScore3)
let mikeAverage = calcuiateAvg(mikeScore1,mikeScore2,mikeScore3)
let maryAverage = calcuiateAvg(maryScore1,maryScore2,maryScore3)
console.log('case ONE:  ')
console.log('===========') 
console.log('john average: ', johnAverage)
console.log('mike average: ', mikeAverage)
console.log('mary average: ', maryAverage)

let winner = getHighestAvg(johnAverage,mikeAverage,maryAverage)

console.log(winner)

// CASE 2


 johnScore1 = 12
 johnScore2 = 13
 johnScore3 = 9
 mikeScore1 = 70
 mikeScore2 = 50
 mikeScore3 = 160
 maryScore1 = 88
 maryScore2 = 30
 maryScore3 = 45

 johnAverage = calcuiateAvg(johnScore1,johnScore2,johnScore3)
 mikeAverage = calcuiateAvg(mikeScore1,mikeScore2,mikeScore3)
 maryAverage = calcuiateAvg(maryScore1,maryScore2,maryScore3)
console.log('case TWO:  ')
console.log('===========') 
console.log('john average: ', johnAverage)
console.log('mike average: ', mikeAverage)
console.log('mary average: ', maryAverage)

 winner = getHighestAvg(johnAverage,mikeAverage,maryAverage)

console.log(winner)

// CASE 3

 johnScore1 = 12
 johnScore2 = 13
 johnScore3 = 9
 mikeScore1 = 70
 mikeScore2 = 50
 mikeScore3 = 60
 maryScore1 = 88
 maryScore2 = 920
 maryScore3 = 456

 johnAverage = calcuiateAvg(johnScore1,johnScore2,johnScore3)
 mikeAverage = calcuiateAvg(mikeScore1,mikeScore2,mikeScore3)
 maryAverage = calcuiateAvg(maryScore1,maryScore2,maryScore3)
console.log('case THREE:  ')
console.log('===========') 
console.log('john average: ', johnAverage)
console.log('mike average: ', mikeAverage)
console.log('mary average: ', maryAverage)

 winner = getHighestAvg(johnAverage,mikeAverage,maryAverage)

console.log(winner)

// CASE 4 - DRAW


 johnScore1 = 1
 johnScore2 = 1
 johnScore3 = 9
 mikeScore1 = 1
 mikeScore2 = 9
 mikeScore3 = 1
 maryScore1 = 9
 maryScore2 = 1
 maryScore3 = 1

 johnAverage = calcuiateAvg(johnScore1,johnScore2,johnScore3)
 mikeAverage = calcuiateAvg(mikeScore1,mikeScore2,mikeScore3)
 maryAverage = calcuiateAvg(maryScore1,maryScore2,maryScore3)
console.log('case FOUR - DRAW:  ')
console.log('===========') 
console.log('john average: ', johnAverage)
console.log('mike average: ', mikeAverage)
console.log('mary average: ', maryAverage)

 winner = getHighestAvg(johnAverage,mikeAverage,maryAverage)

console.log(winner)

