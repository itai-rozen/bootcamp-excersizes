
let mat = [
    [1, 2, 3]
];

// expected :
// [
//     [3, 6, 9],
//     [2, 5, 8],
//     [1, 4, 7]
// ];
function rotate(matrix, direction) {
    let rotatedMatrix = []
    for (let i=0 ; i< matrix.length; i++){
        console.log(i)
        rotatedMatrix[i] = []
        console.log(rotatedMatrix)
        console.log(matrix[i].length)
        for (let j = 0; j < matrix[i].length; j++){
            rotatedMatrix[i][j] = (direction !== 'clockwise') ? 
            matrix[matrix[i].length-1-j][i] :  
            matrix[j][matrix[i].length-1-i]
        }
    }                            
    return rotatedMatrix
}

let newMat = rotate(mat,'clockwise')
console.log(newMat)


