export const BASE_URL = 'https://api.themoviedb.org/3';
export const API_KEY = '970f758ce9339571d84c8ed1be2faa59';

const endpoint = (resource: string, append?: string) =>
  append
    ? `${BASE_URL}${resource}?api_key=${API_KEY}${append}`
    : `${BASE_URL}${resource}?api_key=${API_KEY}`;

export const getFullImagePath = (imagePath: string) =>
  `https://image.tmdb.org/t/p/w500${imagePath}`;

export const getFullVideoPath = (videoKey: string) =>
  `https://www.youtube.com/watch?v=${videoKey}`;

export const api = {
  getUpcoming: async () => {
    const response = await fetch(endpoint('/movie/upcoming'));
    return response.json();
  },
  getCurrentlyPlaying: async () => {
    const response = await fetch(endpoint('/movie/now_playing'));
    return response.json();
  },
  getDetails: async (movieId: number) => {
    const response = await fetch(
      endpoint(`/movie/${movieId}`, '&append_to_response=videos'),
    );
    return response.json();
  },
};
