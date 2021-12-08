const tableElement = document.createElement('table')

const getCharacters = async () => {

    const url = `https://swapi.dev/api/people/`
    try {
        const data = await (await fetch(url, {
            mode: 'cors'
        })).json();
        const characterObjs = await Promise.all(data.results.map(async (character) => {
            const { name, height, hair_color, homeworld } = character
            const homeWorldObj = await (await fetch(character.homeworld)).json()
            return {
                name,
                height,
                hair_color,
                homeworld: homeWorldObj.name,
                population: homeWorldObj.population
            }
        }))
        console.log(characterObjs)
        const strHtmls = characterObjs.map((obj, i) => {
            const { name, height, hair_color, homeworld, population } = obj
            return `
            <tr class=${i % 2 === 0 ? 'even' : 'odd'}>
            <td>${name}</td>
            <td>${height}</td>
            <td>${hair_color}</td>
            <td>${homeworld}</td>
            <td>${population}</td>
            </tr>`
        })
        tableElement.innerHTML += strHtmls.join('')
    }
    catch (err) {
        console.log(err)
    }
};
const addTable = () => {
    
    document.body.append(tableElement)
    tableElement.innerHTML = `
        <tr>
        <th>name</th>
        <th>height</th>
        <th>hair color</th>
        <th>homeworld</th>
        <th>population</th>
        </tr>`
}

addTable()
getCharacters()