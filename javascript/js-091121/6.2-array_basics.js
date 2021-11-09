// For each of the questions below, answer the question’s with this array:
// 1. Using a loop, iterate through this array and console.log all of the people.
// 2. Write the command to remove "Greg" from the array.
// 3. Write the command to remove "James" from the array.
// 4. Write the command to add "Matt" to the front of the array.
// 5. Write the command to add your name to the end of the array.
// 6. Using a loop, iterate through this array and after console.log-ing "Mary",
// exit from the loop.
// 7. Write the command to make a copy of the array using slice. The copy
// should NOT include "Mary" or "Matt".
// 8. Write the command that gives the indexOf where "Mary" is located.
// 9. Write the command that gives the indexOf where "Foo" is located (this
// should return -1).
// 10. Redefine the people variable with the value you started with. Using the
// splice command, remove "Devon" from the array and add "Elizabeth"
// const people = ["Greg", "Mary", "Devon", "James"];
// and "Artie". Your array should look like this when you are done ["Greg",
// "Mary", "Elizabeth", "Artie", "James"].
// 11. Create a new variable called withBob and set it equal to the people
// array concatenated with the string of "Bob".


const people = ["Greg", "Mary", "Devon", "James"];
console.log('array before chages: ',people)
const slicedArray = people.slice()
console.log('sliced array: ',slicedArray)
// 1.
const printNames = arr => people.forEach(person => console.log(person))

// 2.

slicedArray.shift()
console.log('array without Greg: ',slicedArray)
// 3.
slicedArray.pop()
console.log('array without James: ',slicedArray)
// 4.
slicedArray.unshift('Matt') 
console.log('slicedArray with Matt: ',slicedArray)
// 5. 
slicedArray.push('Itai')
console.log('slicedArray with Me :',slicedArray)
// 6.
for (let i =0 ; i < slicedArray.length; i++){
    console.log(slicedArray[i])
    if (slicedArray[i] === 'Mary') break
}
// 7.
const slicedArrayCopy = slicedArray.slice(2)
console.log('array copy without Matt & Mary: ', slicedArrayCopy)
// 8.
console.log('index of Mary in the array: ', slicedArray.indexOf('Mary'))
// 9.
console.log('index of Foo in the array: ', slicedArray.indexOf('Foo'))
// 10.
people.splice(2,1,'Elizabeth','Artie')
console.log('redefined array: ',people)
// 11.
const withBob = people.concat('Bob')
console.log('array with Bob: ',withBob)