import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Movie } from '../types';
import { TMDB_IMAGE_BASE_URL } from '../constants';

interface RowProps {
  title: string;
  movies: Movie[];
  isLargeRow?: boolean;
  onMovieClick: (movie: Movie) => void;
}

export const Row: React.FC<RowProps> = ({ title, movies, isLargeRow, onMovieClick }) => {
  const rowRef = useRef<HTMLDivElement>(null);

  const slide = (offset: number) => {
    if (rowRef.current) {
      rowRef.current.scrollLeft += offset;
    }
  };

  return (
    <div className="space-y-2 md:space-y-4 my-8 pl-4 md:pl-12 group relative">
      <h2 className="text-white text-lg md:text-xl font-semibold transition hover:text-white cursor-pointer inline-flex items-center gap-2">
        {title}
        <span className="text-xs text-cyan-400 font-normal hidden group-hover:inline opacity-0 group-hover:opacity-100 transition-opacity">Explore All &gt;</span>
      </h2>

      <div className="relative group">
        <ChevronLeft 
          className="absolute top-0 bottom-0 left-0 z-40 m-auto h-full w-12 cursor-pointer bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 hover:bg-black/70 text-white p-2"
          onClick={() => slide(-500)}
        />
        
        <div 
          ref={rowRef}
          className="flex items-center gap-2 md:gap-4 overflow-x-scroll no-scrollbar scroll-smooth py-4"
        >
          {movies.map((movie) => (
            <div 
              key={movie.id}
              onClick={() => onMovieClick(movie)}
              className={`relative flex-none cursor-pointer transition duration-300 hover:scale-105 hover:z-50 ${isLargeRow ? 'w-[160px] md:w-[220px]' : 'w-[200px] md:w-[280px]'}`}
            >
              <img 
                src={`${TMDB_IMAGE_BASE_URL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                alt={movie.title}
                className={`w-full rounded-md object-cover shadow-lg ${isLargeRow ? 'aspect-video-poster' : 'aspect-video'}`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition"></div>
              
              {/* Hover Details (simplified for demo, usually appears on hover delay) */}
              <div className="opacity-0 hover:opacity-100 absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black via-black/80 to-transparent rounded-b-md transition-opacity duration-300 flex flex-col justify-end min-h-[50%]">
                 <h3 className="text-white text-sm font-bold truncate">{movie.title}</h3>
                 <p className="text-green-400 text-xs font-bold">{movie.matchScore}% Match</p>
                 <div className="flex gap-2 text-[10px] text-white mt-1">
                    {movie.genre_ids?.slice(0, 3).map(id => <span key={id} className="border border-gray-600 px-1 rounded bg-black/40">Genre</span>)}
                 </div>
              </div>
            </div>
          ))}
        </div>

        <ChevronRight 
          className="absolute top-0 bottom-0 right-0 z-40 m-auto h-full w-12 cursor-pointer bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 hover:bg-black/70 text-white p-2"
          onClick={() => slide(500)}
        />
      </div>
    </div>
  );
};
