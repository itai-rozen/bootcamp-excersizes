const candyStore = {
    candies: [
        {
            name: "mint gum",
            id: "as12f",
            price: 2,
            amount: 2
        },
        {
            name: "twix",
            id: "5hd7y",
            price: 5,
            amount: 4
        },
    ],
    cashRegister: 200
}
// Implement the following getCandy function:
// The function should return the candy element with the specified id.

const getCandy = (storeObj, id) => storeObj.candies.find(candy => candy.id === id)
console.log('candy object with id - 5hd7y', getCandy(candyStore, '5hd7y'))

// 2. Implement the following getPrice function:
// The function should return the price (number) of the candy with the specified
// id.

const getPrice = (storeObj, id) => storeObj.candies.find(candy => candy.id === id).price
console.log('price of the candy with the id of "as12f"', getPrice(candyStore, 'as12f'))
console.log('candy object: ', getCandy(candyStore, 'as12f'))

// 3. Implement the following addCandy function:
// The function should add a new candy to the candy list in candyStore with a
// default amount of 1. The function will not return anything.
const addCandy = (name, id, price, amount = 1) => {
    let isIdTaken = getCandy(candyStore, id)
    if (isIdTaken) console.log('id already taken')
    else {
        candyStore.candies.push({
            name,
            id,
            price,
            amount
        })
    }

}
addCandy('Mekupelet', 'ad32s', 13.90)
addCandy('Egozi', 'ad32s', 13.90) // Same id, candy did not add
console.log(candyStore)

// 4. Implement the following buy function: The function should add the candy
// price to the cashRegister, and decrease the amount property of the relevant
// candy.

const buyCandy = (storeObj, id) => {
    let desiredCandy = getCandy(candyStore,id)
    desiredCandy.amount--
    storeObj.cashRegister += desiredCandy.price
}
console.log('before buying the mint gum: ')
console.log('mint gum property: ', candyStore.candies[0])
console.log('cash register: ', candyStore.cashRegister)
console.log('after buying the mint gum: ')
buyCandy(candyStore, 'as12f')
console.log('mint gum property: ', candyStore.candies[0])
console.log('cash register: ', candyStore.cashRegister)
console.log('candy store objects: \n', candyStore)