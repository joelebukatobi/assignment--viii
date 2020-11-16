document.addEventListener('DOMContentLoaded', () => {
  let movieTitle = document.getElementById('movieTitle');
  let moviesContainer = document.getElementById('movies');
  const searchMovie = document.getElementById('submitSearch');
  const apiKey = '8b7ce05e';
  let url = 'https://www.omdbapi.com/?apikey=' + apiKey;
  // let movie = '';

  searchMovie.addEventListener('submit', (e) => {
    e.preventDefault();
    movieTitle = movieTitle.value;
    url = url + '&s=' + movieTitle;
    console.log(url);
    fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        let moviesArray = data.Search;
        let movies = '';
        console.log(moviesArray);
        moviesArray.forEach((movie, index) => {
          movies += `
         <div class="movie">
          <div class="movie-image">
           <img src="${movie.Poster}">
          </div>
          <h4 class="heading-4">Title: ${movie.Title}</h4>
          <h4 class="heading-4">Year: ${movie.Year}</h4>
          <button class="button">Learn More</button>
         </div>
        `;
        });
        moviesContainer.innerHTML = movies;
      })
      .catch((err) => {
        console.log(err);
      });
  });
});
