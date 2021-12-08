const tableElement = document.createElement('table')
// const tBody = document.createElement('tbody')

document.body.append(tableElement)
const getCharacters = async () => {

    const url = `https://swapi.dev/api/people/`
    try {
        const data = await (await fetch(url, {
            mode: 'cors'
        })).json();

        const characters = [] 
    
        for (let i = 0 ; i < data.results.length; i++){
            const character = data.results[i]
            let { name, height, hair_color, homeworld } = character;
            const homeWorldData = await (await fetch(homeworld)).json()
            homeworld = homeWorldData.name
            const population = homeWorldData.population
            characters.push({
                name,
                height,
                hair_color,
                homeworld,
                population
            })
            const strHtml = `
            <tr class=${i % 2 === 0? 'even':'odd'}>
            <td>${name}</td>
            <td>${height}</td>
            <td>${hair_color}</td>
            <td>${homeworld}</td>
            <td>${population}</td>
            </tr>`

        tableElement.innerHTML += strHtml 
        }

        console.log(characters)
    }
    catch (err) {
        console.log(err)
    }
};
const addTable = () => {

    tableElement.innerHTML = `
<tr>
<th>name</th>
<th>height</th>
<th>hair color</th>
<th>homeworld</th>
<th>population</th>
</tr>
`
}

addTable()
getCharacters()