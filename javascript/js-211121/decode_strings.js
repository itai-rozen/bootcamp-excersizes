// Example 1:
// Input: s = "3[a]2[bc]"
// Output: "aaabcbc"
// Example 2:
// Input: s = "3[a2[c]]"
// Output: "accaccacc"
// Example 3:
// Input: s = "2[abc]3[cd]ef"
// Output: "abcabccdcdcdef"
// Example 4:
// Input: s = "abc3[cd]xyz"
// Output: "abccdcdcdxyz"


const decodeString = str => {
    console.log('string: ',str)
    let numRegex = /[1-9]+/g
    let openingBIdx = str.indexOf('[')
    let closingBIdx = str.indexOf(']')
    let nextNumIdx = str.slice(1).search(numRegex)
    let matches = [...str.matchAll(numRegex)]
    if (matches.length === 0 ) return str
    if (str.charAt(0).match(numRegex)){        
        if (nextNumIdx < str.slice(1).search(']') && nextNumIdx !== -1){
            return decodeString(str.slice(0,nextNumIdx) + 
            str.slice(openingBIdx+1, nextNumIdx+1) + 
            decodeString(str.slice(nextNumIdx+1, closingBIdx+1)) + ']')
        }
        return str.slice(openingBIdx+1, closingBIdx).repeat(+str.charAt(0)) + 
        decodeString(str.slice(closingBIdx+1))
    }
    return str.slice(0,nextNumIdx+1) + decodeString(str.slice(nextNumIdx+1))
}




let s1 = "3[a]2[bc]"
let t = "3[a2[c]]"
s = "2[abc]3[cd]ef"
let q = "abc3[cd]xyz"
console.log(decodeString(q))