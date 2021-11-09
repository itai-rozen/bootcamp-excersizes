// 1. Create a function that takes one parameter, a language.
// 2. Use a switch statement to log the following string for the
// given 'language':
// mandarin: 'MOST number of native speakers!'
// spanish: '2nd place in number of native speakers'
// english: '3rd place'
// hindi: 'Number 4'
// arabic: '5th most spoken language'
// for all other simply log 'Not in the top 5'

const mostSpokenLanguages = language => {
    switch (language){
        case 'mandarin': return  'MOST number of native speakers!'
        case 'spanish': return '2nd place in number of native speakers'
        case 'english' : return `3rd place`
        case 'hindi' : return 'Number 4'
        case 'arabic' : return '5th most spoken language'
        default: return 'Not in the top 5'
    }
}

console.log(mostSpokenLanguages('hebrew'))
console.log(mostSpokenLanguages('english'))
console.log(mostSpokenLanguages('mandarin'))