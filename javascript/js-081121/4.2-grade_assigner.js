let grade = prompt('enter you grade sucka')
let score

if (grade <= 100 && grade >= 90) score = 'A'
else if (grade < 90 && grade >=  80) score = 'B'
else if (grade < 80 && grade >= 70) score = 'C'
else if (grade < 70 && grade >= 65) score = 'D'
else if (grade < 65 && grade >= 0) score = 'F'
else score = "invalid grade"

console.log(`you score is ${score} son.`)