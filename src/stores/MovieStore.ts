import {createContext, useContext} from 'react';
import {action} from 'mobx';
import {api} from './api';

class MovieStore {
  @action getCurrentlyPlaying = async () => {
    const movies = await api.getCurrentlyPlaying();
    console.log(movies);
  };
}

export const movieStore = new MovieStore();
export const movieContext = createContext<MovieStore>(movieStore);
export const useMovieStore = () => useContext<MovieStore>(movieContext);
export default MovieStore;
