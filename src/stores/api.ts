export const BASE_URL = 'https://api.themoviedb.org/3';
export const API_KEY = '970f758ce9339571d84c8ed1be2faa59';

const endpoint = (resource: string, append?: string) =>
  append
    ? `${BASE_URL}${resource}?api_key=${API_KEY}${append}`
    : `${BASE_URL}${resource}?api_key=${API_KEY}`;

export const api = {
  getMostPopular: async () => {
    const response = await fetch(
      endpoint('/discover/movie?sort_by=popularity.desc'),
    );
    return response.json();
  },
  getUpcoming: async () => {
    const response = await fetch(endpoint('/movie/upcoming'));
    return response.json();
  },
  getCurrentlyPlaying: async () => {
    const response = await fetch(endpoint('/movie/now_playing'));
    return response.json();
  },
  getDetails: async (movieId: string) => {
    const response = await fetch(
      endpoint(`/movie/${movieId}`, '&append_to_response=videos,images'),
    );
    return response.json();
  },
};
