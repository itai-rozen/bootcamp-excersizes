// Create a function that receives one argument, a string color.
// Create a switch statement that:
// 1. If the color is yellow, pink or orange return from the function “light color”.
// 2. If the color is blue, purple, brown return from the function “dark color”.
// 3. If the color is none of the above return “Unknown color”.
// Note:
// It shouldn’t be case sensitive

const colorSorter = colorStr => {
    // Turning all letters to lowercase
    colorStr = colorStr.toLowerCase()
    switch(colorStr){
        case ('yellow'):
        case ('pink'):
        case ('orange'): 
            return 'light color';
        case ('blue') : 
        case ('purple') : 
        case ('brown') :
            return 'dark color';
        default: 
            return 'Unknown color' 
    }
}

console.log('what color is pink? ', colorSorter('pink'))
console.log('what color is YELLOW? ', colorSorter('YELLOW'))
console.log('what color is OrAnGe? ', colorSorter('OrAnGe'))
console.log('what color is BLUE? ', colorSorter('BLUE'))
console.log('what color is PURPLE? ', colorSorter('PURPLE'))
console.log('what color is BROWn? ', colorSorter('BROWn'))
console.log('what color is black? ', colorSorter('black'))
console.log('what color is 12345? ', colorSorter('12345'))
