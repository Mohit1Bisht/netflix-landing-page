import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Row } from './components/Row';
import { AISearchModal } from './components/AISearchModal';
import { MovieDetailsModal } from './components/MovieDetailsModal';
import { STATIC_MOVIES, HERO_MOVIE } from './constants';
import { Movie } from './types';

function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  // Group movies by pseudo-categories for the demo
  const trendingMovies = STATIC_MOVIES.slice(0, 6);
  const topRatedMovies = STATIC_MOVIES.slice(6, 12);
  const actionMovies = [STATIC_MOVIES[3], STATIC_MOVIES[5], STATIC_MOVIES[7], STATIC_MOVIES[8], STATIC_MOVIES[10], STATIC_MOVIES[0]];
  const sciFiMovies = [STATIC_MOVIES[0], STATIC_MOVIES[3], STATIC_MOVIES[6], STATIC_MOVIES[9], STATIC_MOVIES[11], STATIC_MOVIES[1]];

  return (
    <div className="min-h-screen bg-[#141414] text-white overflow-hidden">
      <Navbar onSearchClick={() => setIsSearchOpen(true)} />
      
      <Hero 
        movie={HERO_MOVIE} 
        onMoreInfo={(movie) => setSelectedMovie(movie)} 
      />

      <div className="relative z-10 -mt-24 md:-mt-48 pb-20">
        <Row 
          title="Trending Now" 
          movies={trendingMovies} 
          onMovieClick={setSelectedMovie} 
        />
        <Row 
          title="Top Rated" 
          movies={topRatedMovies} 
          isLargeRow 
          onMovieClick={setSelectedMovie} 
        />
        <Row 
          title="Action Thrillers" 
          movies={actionMovies} 
          onMovieClick={setSelectedMovie} 
        />
        <Row 
          title="Sci-Fi Blockbusters" 
          movies={sciFiMovies} 
          onMovieClick={setSelectedMovie} 
        />
      </div>

      {isSearchOpen && (
        <AISearchModal 
          onClose={() => setIsSearchOpen(false)} 
          onMovieClick={(movie) => {
            setSelectedMovie(movie);
            setIsSearchOpen(false);
          }}
        />
      )}

      {selectedMovie && (
        <MovieDetailsModal 
          movie={selectedMovie} 
          onClose={() => setSelectedMovie(null)} 
        />
      )}
      
      <footer className="px-12 py-8 text-gray-500 text-sm bg-black/90 mt-12">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
           <div className="space-y-2">
             <p className="hover:underline cursor-pointer">Audio Description</p>
             <p className="hover:underline cursor-pointer">Investor Relations</p>
             <p className="hover:underline cursor-pointer">Legal Notices</p>
           </div>
           <div className="space-y-2">
             <p className="hover:underline cursor-pointer">Help Center</p>
             <p className="hover:underline cursor-pointer">Jobs</p>
             <p className="hover:underline cursor-pointer">Cookie Preferences</p>
           </div>
           <div className="space-y-2">
             <p className="hover:underline cursor-pointer">Gift Cards</p>
             <p className="hover:underline cursor-pointer">Terms of Use</p>
             <p className="hover:underline cursor-pointer">Corporate Information</p>
           </div>
           <div className="space-y-2">
             <p className="hover:underline cursor-pointer">Media Center</p>
             <p className="hover:underline cursor-pointer">Privacy</p>
             <p className="hover:underline cursor-pointer">Contact Us</p>
           </div>
        </div>
        <div className="max-w-4xl mx-auto mt-8 text-center text-xs">
          © 2024 Netflux AI Clone. Educational Demo.
        </div>
      </footer>
    </div>
  );
}

export default App;
