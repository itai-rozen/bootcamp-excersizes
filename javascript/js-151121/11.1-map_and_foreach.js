

const newReleases = [
    {
        id: 70111470,
        title: "Die Hard",
        boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: [4.0],
        bookmark: [],
    },
    {
        id: 654356453,
        title: "Bad Boys",
        boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: [5.0],
        bookmark: [{ id: 432534, time: 65876586 }],
    },
    {
        id: 65432445,
        title: "The Chamber",
        boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: [4.0],
        bookmark: [],
    },
    {
        id: 675465,
        title: "Fracture",
        boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: [5.0],
        bookmark: [{ id: 432534, time: 65876586 }],
    },
];

// 1.Create a function that will loop over the array with the forEach
// method. Return from the function an array of objects. Each object
// will contain the id and name of the specific movie

const getMovies = arr => {
    const arrOfObjs = []
    arr.forEach(release => {
        arrOfObjs.push({
            id: release.id,
            name: release.title
        })
    })
    return arrOfObjs
}

const getMoviesWithMap = arr =>  arr.map(release => ({ id: release.id, name: release.title }))
console.log('original array: ',newReleases)
console.log('using forEach: ')
console.log(getMovies(newReleases))
console.log('using map: ')
console.log(getMoviesWithMap(newReleases))