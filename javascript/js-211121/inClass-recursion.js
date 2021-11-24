// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.
const shanireverse = (str) => {
    if (str === "") {
      return "";
    } else {
      shanireverse(str.substr(1)) +str.charAt(0)
    }
  };
  

const reverseString = (strArr,i) => {
if (i === strArr.length-1) return 
let newLetter = strArr.pop()
strArr.splice(i,0,newLetter)
reverseString(strArr,i+1)
return strArr.join('')
}

let string = 'string'
let newString = ''
for (let i = string.length-1; i >= 0; i--){
    newString += string.charAt(i)
}
console.log('with recursion: ',reverseString([...string],0))
console.log('with js function: ',string.split('').reverse().join(''))
console.log('with for loop: ',newString)
console.log('with Shani solution: ', shanireverse([...string]))
// ['s','t','r','i','n','g'] =>  ['g','n','i','r','t','s'] 

