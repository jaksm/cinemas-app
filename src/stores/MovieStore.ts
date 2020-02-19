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

export type Genre = {
  id: number;
  name: string;
};

export type ProductionCompany = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

export type ProductionCountry = {
  iso_3166_1: string;
  name: string;
};

export type SpokenLanguage = {
  iso_639_1: string;
  name: string;
};

export type VideoResult = {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  site: string;
  size: number;
  type: string;
};

export interface MovieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: Date; // map this
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  videos: {
    results: VideoResult[];
  };
}

class MovieStore {
  @observable currentlyPlayingMovies: Movie[] = [];
  @observable upcomingMovies: Movie[] = [];
  @observable mostPopularMovies: Movie[] = [];

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
    return {
      ...result,
      release_date: new Date(result.release_date),
    } as MovieDetails;
  };
}

export const movieStore = new MovieStore();
export const movieContext = createContext<MovieStore>(movieStore);
export const useMovieStore = () => useContext<MovieStore>(movieContext);
export default MovieStore;
