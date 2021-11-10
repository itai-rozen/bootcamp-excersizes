// Create a function that receives 1 argument, an object and returns a new
// object with the properties and values swapped.

const obj1 = {
    a: '1',
    b: '2',
    c: '3',
    d: '4'
}

const objectSwapper = o => {
    const newO = {}
    for (p in o){
        newO[o[p]] = p
    }
    return newO
}

let obj2 = objectSwapper(obj1)
console.log('original object: ',obj1)
console.log('object after swapping: ',obj2)