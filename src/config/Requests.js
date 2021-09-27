// https://api.themoviedb.org/3
// 1bba4c4d9ee48ca6b39bd71d42bd88ac

const API_KEY = "27e01e4a6ce05029d214d370746cfd80";
const baseURL = "https://api.themoviedb.org/3";

const requests = {
  fetchTrending: `${baseURL}/trending/all/week?api_key=${API_KEY}`,
  fetchNetflixOriginals: `${baseURL}/trending/all/week?api_key=${API_KEY}`,
  fetchTopRated: `${baseURL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres_ids=28`,
  fetchComedyMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchThrillerMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=80`,
  fetchRomanceMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests

// https://api.themoviedb.org/3/discover/movie?api_key=1bba4c4d9ee48ca6b39bd71d42bd88ac&width_genres=28
// https://api.themoviedb.org/3/discover/movie?api_key=1bba4c4d9ee48ca6b39bd71d42bd88ac&width_genres=35
// https://api.themoviedb.org/3/discover/movie?api_key=1bba4c4d9ee48ca6b39bd71d42bd88ac&width_genres=27
// https://api.themoviedb.org/3/discover/movie?api_key=1bba4c4d9ee48ca6b39bd71d42bd88ac&width_genres=10749
// https://api.themoviedb.org/3/discover/movie?api_key=1bba4c4d9ee48ca6b39bd71d42bd88ac&width_genres=99
