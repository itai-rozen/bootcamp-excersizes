// With the use of two for loops, console log all the countries
// one by one and in your terminal. You should see something
// like this in your terminal:

const listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
    ];

for (arr of listOfNeighbours){
    for (country of arr){
        console.log('Neighbour: ', country)
    }
}