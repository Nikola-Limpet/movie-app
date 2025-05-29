
export const TMDB_CONFIG = {
  BASE_URL: 'https://api.themoviedb.org/3',
  API_KEY: process.env.EXPO_PUBLIC_MOVIE,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE}`,
  }
}


export const fetchMovies = async ({ query }: { query: string }) => {

  const endpoint = query ?
    `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}&language=en-US` :
    `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc&language=en-US`;


  const res = await fetch(endpoint, {
    method: 'GET',
    headers: TMDB_CONFIG.headers,
  });

  if (!res.ok) {
    throw new Error(`Error fetching movies: ${res.statusText}`);
  }
  const data = await res.json();

  return data.results;
}


