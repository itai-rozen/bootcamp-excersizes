const data = [
    {
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
        },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["ham", "chicken"],
            fish: ["pike"],
        },
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["anchovies", "tuna"],
        },
    },
];
console.log('Data object: ',data)
// Create separate functions for each questions below:
// 1. Create a function that returns all the names from the array.
const getNames = arr => arr.map(obj => obj.name)

console.log(getNames(data))
// 2. Create a function that returns all the objects that are born before 1990.
const getOldies = arr => arr.filter(obj => new Date(obj.birthday).getFullYear() < 1990)
console.log(getOldies(data))
// 3. Create a function that returns an object of all the different foods from all
// the objects as the key and the number of times that food is present in all the
// objects as the value.

const getFoods = arr => {
    let foodsMap = {}
    arr.forEach(obj => { // Inside data array
        let {favoriteFoods} = obj
        for ( foodType in favoriteFoods ){  // inside favoriteFoods object
            favoriteFoods[foodType].forEach(food => { // inside meats/fish array
                (foodsMap[food])?  foodsMap[food]++ :  foodsMap[food] = 1
            })
        }
    })
    return foodsMap
}

console.log('different foods map: ', getFoods(data))