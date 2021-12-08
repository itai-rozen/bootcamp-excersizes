const getButton = document.querySelector('.get-movie-btn');
const movieInput = document.getElementById('movie-input');
const typeSelectInput = document.querySelector('.type-select')
const cardContainerElement = document.querySelector('.card-container');
const bodyElement = document.querySelector('body');
const msgElement = document.querySelector('.msg');
const moviesContainerElement = document.querySelector('.movies-container')
const API_KEY = 96948772;


typeSelectInput.addEventListener('change', () => {
    switch (typeSelectInput.value){
        case 'movie':
            getButton.innerHTML = 'Get Movies';
            break;
        case 'series':
            getButton.innerHTML = 'Get Series';
            break;
        default:
            return;
    }
})

const renderMovies = dataObj => {
    moviesContainerElement.innerHTML = '';
    dataObj.Search.forEach(movieObj => {
    const { Poster, Title, Year, imdbId } = movieObj;
    const strHtml = `
    <div class="movie-card">
    <img src="${(Poster === 'N/A')? './placeholder.jpg' : Poster }" alt="" class="poster">
    <h3 class="movie-title">${Title}</h3>
    <h4 class="year-released">${Year}</h4>
    <p>find out more <a href="https://www.imdb.com/title/${imdbId}">Here</a>
    </div>
    `;
    moviesContainerElement.innerHTML += strHtml;
})
}



const getMovie = async () => {

    const movieInputValue = movieInput.value;
    console.log(movieInputValue);
    const typeSelect = (typeSelectInput.value)? `&type=${typeSelectInput.value}` : '';

    const url = `http://www.omdbapi.com//?s=${movieInputValue}${typeSelect}&apikey=${API_KEY}`;
    movieInput.value = ''
    movieInput.focus()
    msgElement.innerHTML = '';
    try {
        const data = await (await fetch(url)).json();
        if (!data.Search) throw new Error('No results');
        renderMovies(data);
    }
    catch (err) {
        msgElement.innerHTML = err;
    }
};

movieInput.focus()
getButton.addEventListener('click' , getMovie);
movieInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') getMovie()
});
