/*Realizar una pagina web que consuma una API (Cualquiera)

La pagina debe tener:

-vista de todos los datos
-vista de un solo dato
-debe tener una barra de busqueda
-Debe verse bien
-Debe ser responsive
-Debe tener un manejo correcto de los errores
-tener una modal que pida al usuario su nombre su apellido y su nombre de usuario y lo guarde en localStorage para ser mostrado en la vista de todos los datos para simular un login (opcional)*/

const API_KEY = '01f6f6821e067e63e269856b93f6f6fe'; // Api Key
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&'+ API_KEY;

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWY2ZjY4MjFlMDY3ZTYzZTI2OTg1NmI5M2Y2ZjZmZSIsIm5iZiI6MTcyMTE2NzAwMy4wNDIyLCJzdWIiOiI2Njk2YmRkMGJhNzBjZTJkNjlmM2I4OTYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.pvEwvVAxY_oYGY7legoez55tu7GS9zP_QsXLrsq4hKk'
  }
};

fetch('https://api.themoviedb.org/3/movie/latest', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

  
/*async function cargarDatos(API_URL) {
  try {
    const response = await fetch(API_URL)
    const data = await response.json();
    console.log(data);
  } catch (error){
    console.log('No cargo la pagina')
  }
  
}

cargarDatos('https://api.themoviedb.org/3/movie/latest');*/

async function searchMovies() {
    const searchQuery = document.getElementById('searchInput').value;

    try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`);
        const data = await response.json();

        const resultsContainer = document.getElementById('resultsContainer');
        resultsContainer.innerHTML = ''; 

        data.results.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.className = 'bg-white p-4 rounded-md shadow-md';
            movieCard.textContent = movie.title; 
            resultsContainer.appendChild(movieCard);
        });
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
}
