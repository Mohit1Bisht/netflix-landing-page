import React from 'react';
import { X, Play, Plus, ThumbsUp } from 'lucide-react';
import { Movie } from '../types';
import { TMDB_IMAGE_BASE_URL } from '../constants';

interface MovieDetailsModalProps {
  movie: Movie;
  onClose: () => void;
}

export const MovieDetailsModal: React.FC<MovieDetailsModalProps> = ({ movie, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
       <div className="relative bg-[#181818] w-full max-w-4xl rounded-lg shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto no-scrollbar">
         
         {/* Close Button */}
         <button 
           onClick={onClose}
           className="absolute top-4 right-4 z-20 bg-[#181818] p-2 rounded-full hover:bg-neutral-700 transition"
         >
           <X className="w-6 h-6 text-white" />
         </button>

         {/* Hero Image / Video Placeholder */}
         <div className="relative aspect-video w-full">
           <img 
            src={`${TMDB_IMAGE_BASE_URL}${movie.backdrop_path}`}
            alt={movie.title}
            className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent"></div>
           
           <div className="absolute bottom-8 left-8 space-y-4">
              <h1 className="text-4xl font-bold text-white drop-shadow-lg">{movie.title}</h1>
              <div className="flex gap-4">
                 <button className="flex items-center gap-2 bg-white text-black px-8 py-2 rounded font-bold hover:bg-opacity-80 transition">
                    <Play className="w-5 h-5 fill-black" /> Play
                 </button>
                 <button className="border-2 border-gray-400 p-2 rounded-full hover:border-white transition group">
                    <Plus className="w-5 h-5 text-gray-400 group-hover:text-white" />
                 </button>
                 <button className="border-2 border-gray-400 p-2 rounded-full hover:border-white transition group">
                    <ThumbsUp className="w-5 h-5 text-gray-400 group-hover:text-white" />
                 </button>
              </div>
           </div>
         </div>

         {/* Info Grid */}
         <div className="p-8 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 text-white">
            <div className="space-y-4">
               <div className="flex items-center gap-4 text-sm font-semibold">
                  <span className="text-green-400">{movie.matchScore}% Match</span>
                  <span>{movie.release_date || '2022'}</span>
                  <span className="border border-gray-500 px-1 text-xs">HD</span>
               </div>
               <p className="text-lg leading-relaxed text-gray-300">
                 {movie.overview}
               </p>
            </div>
            
            <div className="text-sm space-y-4">
               <div>
                 <span className="text-gray-500">Cast: </span>
                 <span className="text-gray-300 hover:underline cursor-pointer">Sample Actor, Another Actor, Famous Star</span>
               </div>
               <div>
                 <span className="text-gray-500">Genres: </span>
                 <span className="text-gray-300">Exciting, Sci-Fi, Drama</span>
               </div>
               <div>
                 <span className="text-gray-500">This show is: </span>
                 <span className="text-gray-300">Mind-bending, Dark</span>
               </div>
            </div>
         </div>
         
         <div className="p-8 pt-0">
            <h3 className="text-xl font-bold mb-4">More Like This</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {/* Fake Recommendations */}
               {[1,2,3,4,5,6].map((i) => (
                 <div key={i} className="bg-neutral-800 rounded p-2 h-32 md:h-48 flex items-center justify-center text-gray-500 text-xs">
                    Related Title {i}
                 </div>
               ))}
            </div>
         </div>

       </div>
    </div>
  );
};
