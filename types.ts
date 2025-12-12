export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date?: string;
  vote_average?: number;
  genre_ids?: number[];
  matchScore?: number; // Simulated match score
}

export interface Genre {
  id: number;
  name: string;
}

export enum FetchState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface SearchResult {
  movies: Movie[];
  explanation: string;
}
