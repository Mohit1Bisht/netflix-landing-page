import React, { useState } from 'react';
import { X, Sparkles, Send, Loader2 } from 'lucide-react';
import { searchMoviesWithAI } from '../services/geminiService';
import { Movie, SearchResult, FetchState } from '../types';
import { TMDB_IMAGE_BASE_URL } from '../constants';

interface AISearchModalProps {
  onClose: () => void;
  onMovieClick: (movie: Movie) => void;
}

export const AISearchModal: React.FC<AISearchModalProps> = ({ onClose, onMovieClick }) => {
  const [query, setQuery] = useState("");
  const [state, setState] = useState<FetchState>(FetchState.IDLE);
  const [result, setResult] = useState<SearchResult | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setState(FetchState.LOADING);
    const data = await searchMoviesWithAI(query);
    setResult(data);
    setState(FetchState.SUCCESS);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-neutral-900 w-full max-w-4xl rounded-xl border border-neutral-800 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-neutral-800 flex items-center justify-between bg-gradient-to-r from-red-900/20 to-neutral-900">
           <div className="flex items-center gap-3">
             <div className="bg-red-600 p-2 rounded-lg">
                <Sparkles className="text-white w-5 h-5" />
             </div>
             <div>
                <h2 className="text-xl font-bold text-white">AI Assistant</h2>
                <p className="text-xs text-gray-400">Powered by Gemini 2.5</p>
             </div>
           </div>
           <button onClick={onClose} className="text-gray-400 hover:text-white transition">
             <X className="w-6 h-6" />
           </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 min-h-[300px]">
          {state === FetchState.IDLE && (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4 opacity-50">
               <Sparkles className="w-16 h-16 text-gray-600" />
               <p className="text-xl font-medium text-gray-300">"Find me 90s sci-fi movies that are scary"</p>
            </div>
          )}

          {state === FetchState.LOADING && (
             <div className="flex flex-col items-center justify-center h-full space-y-4">
                <Loader2 className="w-12 h-12 text-red-600 animate-spin" />
                <p className="text-gray-400 animate-pulse">Consulting the neural network...</p>
             </div>
          )}

          {state === FetchState.SUCCESS && result && (
            <div className="space-y-6">
              <div className="bg-neutral-800/50 p-4 rounded-lg border border-neutral-700">
                <h3 className="text-green-400 font-semibold mb-1 text-sm">AI Insight</h3>
                <p className="text-gray-300 italic">"{result.explanation}"</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {result.movies.map((movie) => (
                   <div 
                    key={movie.id} 
                    onClick={() => onMovieClick(movie)}
                    className="group relative cursor-pointer bg-neutral-800 rounded-lg overflow-hidden transition hover:scale-105"
                   >
                     <img 
                      src={`${TMDB_IMAGE_BASE_URL}${movie.poster_path}`} 
                      alt={movie.title}
                      className="w-full aspect-[2/3] object-cover opacity-80 group-hover:opacity-100 transition"
                     />
                     <div className="p-2">
                       <h4 className="font-bold text-sm text-white truncate">{movie.title}</h4>
                       <div className="flex justify-between items-center mt-1">
                          <span className="text-xs text-gray-400">{movie.release_date}</span>
                          <span className="text-xs text-green-500 font-bold">{movie.matchScore}% Match</span>
                       </div>
                     </div>
                   </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-neutral-800 bg-neutral-900">
           <form onSubmit={handleSearch} className="relative">
             <input
               type="text"
               value={query}
               onChange={(e) => setQuery(e.target.value)}
               placeholder="Ask for a recommendation (e.g., 'Movies like Inception but with more humor')"
               className="w-full bg-neutral-800 text-white pl-4 pr-12 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-red-600 placeholder-gray-500"
               autoFocus
             />
             <button 
              type="submit"
              disabled={!query.trim() || state === FetchState.LOADING}
              className="absolute right-2 top-2 bottom-2 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition disabled:opacity-50 disabled:cursor-not-allowed"
             >
               <Send className="w-5 h-5" />
             </button>
           </form>
        </div>
      </div>
    </div>
  );
};
