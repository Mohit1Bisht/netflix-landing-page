import { GoogleGenAI, Type } from "@google/genai";
import { Movie, SearchResult } from "../types";
import { STATIC_MOVIES } from "../constants";

// Helper to find a matching static movie to get real image paths if possible
const enhanceWithImages = (generatedMovies: any[]): Movie[] => {
  return generatedMovies.map(genMovie => {
    // Try to fuzzy match with our static database to get high quality images
    // If not found, we keep the generated data but we might lack a good image
    // In a real app, we would search TMDB API here.
    // For this clone, we will assign a random image from our static list if no match found
    // so the UI looks good, but we keep the title/overview from AI.
    
    const match = STATIC_MOVIES.find(m => 
      m.title.toLowerCase() === genMovie.title.toLowerCase()
    );

    if (match) {
      return { ...match, ...genMovie, matchScore: genMovie.matchScore || 85 };
    }

    // Fallback: Pick a random image from static list to maintain aesthetic
    const randomFallback = STATIC_MOVIES[Math.floor(Math.random() * STATIC_MOVIES.length)];
    return {
      id: Math.floor(Math.random() * 10000),
      title: genMovie.title,
      overview: genMovie.overview,
      release_date: genMovie.year,
      matchScore: genMovie.matchScore || 75,
      poster_path: randomFallback.poster_path, 
      backdrop_path: randomFallback.backdrop_path,
      genre_ids: []
    };
  });
};

export const searchMoviesWithAI = async (query: string): Promise<SearchResult> => {
  if (!process.env.API_KEY) {
    console.warn("No API Key provided");
    // Return mock data if no key
    return {
      movies: STATIC_MOVIES.slice(0, 5),
      explanation: "API Key missing. Showing trending movies instead."
    };
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `You are a movie recommendation engine for a streaming service.
  Recommend 6 movies or TV series based on this user query: "${query}".
  
  Return the response in JSON format.
  Each movie should have: title, overview (short), year (string), matchScore (number 60-99).
  Also provide a short "explanation" string for why you chose these.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            recommendations: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  overview: { type: Type.STRING },
                  year: { type: Type.STRING },
                  matchScore: { type: Type.NUMBER }
                }
              }
            },
            explanation: { type: Type.STRING }
          }
        }
      }
    });

    const json = JSON.parse(response.text || "{}");
    const enhancedMovies = enhanceWithImages(json.recommendations || []);

    return {
      movies: enhancedMovies,
      explanation: json.explanation || "Here are some picks for you."
    };

  } catch (error) {
    console.error("Gemini Search Error:", error);
    return {
      movies: STATIC_MOVIES.slice(0, 4),
      explanation: "I'm having trouble connecting to the AI. Here are some classics."
    };
  }
};
