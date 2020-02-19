import {createContext, useContext} from 'react';
import {action, observable} from 'mobx';
import {api} from './api';

export interface Movie {
  popularity: number;
  vote_count: number;
  video: boolean;
  poster_path: string;
  id: number;
  adult: boolean;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  title: string;
  vote_average: number;
  overview: string;
  release_date: Date;
}
class MovieStore {
  @observable currentlyPlayingMovies: Movie[] = [];
  @observable upcomingMovies: Movie[] = [];
  @observable mostPopularMovies: Movie[] = [];

  @observable movie: Movie | null = null;

  @action getCurrentlyPlaying = async () => {
    const {results} = await api.getCurrentlyPlaying();
    const movies = results.map(
      (r: any): Movie => ({...r, release_date: new Date(r.release_date)}),
    );

    this.currentlyPlayingMovies = movies;
  };

  @action getUpcoming = async () => {
    const {results} = await api.getUpcoming();
    const movies = results.map(
      (r: any): Movie => ({...r, release_date: new Date(r.release_date)}),
    );

    this.upcomingMovies = movies;
  };

  @action getMovieDetails = async (movieId: number) => {
    const result = await api.getDetails(movieId);
    console.log(JSON.stringify(result, null, 2));
  };
}

export const movieStore = new MovieStore();
export const movieContext = createContext<MovieStore>(movieStore);
export const useMovieStore = () => useContext<MovieStore>(movieContext);
export default MovieStore;
