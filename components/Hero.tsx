import React from 'react';
import { Play, Info } from 'lucide-react';
import { Movie } from '../types';
import { TMDB_IMAGE_BASE_URL } from '../constants';

interface HeroProps {
  movie: Movie;
  onMoreInfo: (movie: Movie) => void;
}

export const Hero: React.FC<HeroProps> = ({ movie, onMoreInfo }) => {
  return (
    <div className="relative h-[85vh] w-full text-white">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full">
        <img 
          src={`${TMDB_IMAGE_BASE_URL}${movie.backdrop_path}`} 
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="absolute top-[30%] md:top-[35%] left-4 md:left-12 max-w-2xl z-10 space-y-4">
        <h1 className="text-4xl md:text-6xl font-black drop-shadow-lg tracking-tight">
          {movie.title}
        </h1>
        
        <div className="flex items-center gap-3 text-sm md:text-base font-semibold text-green-400">
           <span>{movie.matchScore}% Match</span>
           <span className="text-gray-300">2021</span>
           <span className="border border-gray-500 px-1 text-xs text-gray-300 rounded">5.1</span>
           <span className="text-gray-300">2h 35m</span>
        </div>

        <p className="text-base md:text-lg text-gray-200 drop-shadow-md line-clamp-3 w-[90%] md:w-full">
          {movie.overview}
        </p>

        <div className="flex items-center gap-3 pt-4">
          <button className="flex items-center gap-2 bg-white text-black px-6 md:px-8 py-2 md:py-3 rounded font-bold hover:bg-opacity-80 transition">
            <Play className="w-5 h-5 fill-black" />
            Play
          </button>
          <button 
            onClick={() => onMoreInfo(movie)}
            className="flex items-center gap-2 bg-gray-500/70 text-white px-6 md:px-8 py-2 md:py-3 rounded font-bold hover:bg-gray-500/50 transition backdrop-blur-sm"
          >
            <Info className="w-5 h-5" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};
