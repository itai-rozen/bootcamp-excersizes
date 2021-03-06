/* Let us self-learn something. You come to your new work place
and you are an expert in the technologies your company is
working with. But all of the sudden your boss says. We want to
implement a feature with dates. This will happen all the time in
your career. So lets roll up our sleeves and start googling.
How to …. “date js”.
And as always the MDN docs are a great source
Find how to get the following:
1. Name of the current day e.g. Sunday
2. Current day of the month e.g. 31
3. Current month e.g January
5. Current Year e.g 2021
Create a function that will return a string in the following
format:
`Today is Sunday the 31 of January, 2021’ */

const getCurrentDate = () => {
    let d = new Date()
    let currDay =  d.toLocaleDateString('en-US', { weekday: 'long' });  
    let monthDay = d.getUTCDate()
    let monthName = d.toLocaleString('en-us', { month: 'long' })
    let currYear = d.getFullYear()
    return `Today is ${currDay} the ${monthDay} of ${monthName}, ${currYear}`
}
// `Today is ${new Date().getDay()}`
console.log(getCurrentDate())