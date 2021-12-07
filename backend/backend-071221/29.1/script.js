 const getIDs = async function(){
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([532, 543, 753, 1, 5]);
        }, 500);
    });
}

const getRecipe = async (recipeID) => {
    return await new Promise((resolve, reject) => {
        setTimeout(
            (ID) => {
                const recipe = {
                    title: "Fresh tomato pasta",
                    publisher: "Pinchas Hodadad",
                };
                resolve(`${ID}: ${recipe.title}`);
            }, 500, recipeID);
    });
};

async function getData(){
    try {
        const  recipeIds = await  getIDs()
        console.log(recipeIds)
        const recipe = await getRecipe(recipeIds[2])
        console.log(recipe)
    }
    catch(err) {
        console.log(err)
    }
}

getData()

