import { Movie } from './types';

export const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';

export const GENRES = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "History" },
  { id: 27, name: "Horror" },
  { id: 10402, name: "Music" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Science Fiction" },
  { id: 10770, name: "TV Movie" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "War" },
  { id: 37, name: "Western" },
];

// Curated list of high-quality movie data for the demo
export const STATIC_MOVIES: Movie[] = [
  {
    id: 1,
    title: "Stranger Things",
    overview: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
    poster_path: "/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
    backdrop_path: "/56v2KjBlU4XaOv9rVYkJu64HIIV.jpg",
    matchScore: 98,
    genre_ids: [18, 9648, 10765]
  },
  {
    id: 2,
    title: "Wednesday",
    overview: "Smart, sarcastic and a little dead inside, Wednesday Addams investigates a murder spree while making new friends — and foes — at Nevermore Academy.",
    poster_path: "/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
    backdrop_path: "/iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg",
    matchScore: 99,
    genre_ids: [10765, 9648, 35]
  },
  {
    id: 3,
    title: "The Witcher",
    overview: "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.",
    poster_path: "/cRLz8AmjR2D6X5U056aX3Wz2dJg.jpg",
    backdrop_path: "/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
    matchScore: 95,
    genre_ids: [10765, 18, 10759]
  },
  {
    id: 4,
    title: "Inception",
    overview: "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life.",
    poster_path: "/9gk7admal4zlL12bFPFLC9NM5th.jpg",
    backdrop_path: "/s3TBrRGB1jav7y4argnzPkNPZiZ.jpg",
    matchScore: 97,
    genre_ids: [28, 878, 12]
  },
  {
    id: 5,
    title: "Breaking Bad",
    overview: "When Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of two years left to live. He becomes filled with a sense of fearlessness and an unrelenting desire to secure his family's financial future at any cost.",
    poster_path: "/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
    backdrop_path: "/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg",
    matchScore: 99,
    genre_ids: [18]
  },
  {
    id: 6,
    title: "The Dark Knight",
    overview: "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
    poster_path: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    backdrop_path: "/nMKdUUepR0i5zn0y1T4CsSB5chy.jpg",
    matchScore: 98,
    genre_ids: [18, 28, 80, 53]
  },
  {
    id: 7,
    title: "Interstellar",
    overview: "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
    poster_path: "/gEU2QniL6E8ahEoXy9zLZn7YE1.jpg",
    backdrop_path: "/xJHokMBLzbDYDLUbDXnFqdiiTGY.jpg",
    matchScore: 94,
    genre_ids: [12, 18, 878]
  },
  {
    id: 8,
    title: "Avengers: Endgame",
    overview: "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    poster_path: "/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    backdrop_path: "/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
    matchScore: 96,
    genre_ids: [12, 878, 28]
  },
  {
    id: 9,
    title: "Spider-Man: Into the Spider-Verse",
    overview: "Miles Morales is juggling his life between being a high school student and being a spider-man. When Wilson \"Kingpin\" Fisk uses a super collider, others from across the Spider-Verse are transported to this dimension.",
    poster_path: "/xnopI5Xtky18MPhK40cZAGAOdvV.jpg",
    backdrop_path: "/w2PMyoyLU22YvrGK3smVM9fW1jj.jpg",
    matchScore: 97,
    genre_ids: [28, 12, 16, 878, 35]
  },
  {
    id: 10,
    title: "Dune",
    overview: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people.",
    poster_path: "/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    backdrop_path: "/x2IqsMlpbOhS8z4FGMqt6kMXOcd.jpg",
    matchScore: 93,
    genre_ids: [878, 12]
  },
  {
    id: 11,
    title: "Squid Game",
    overview: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits with deadly high stakes. A survival game that has a whooping 45.6 billion-won prize at stake.",
    poster_path: "/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
    backdrop_path: "/2meX1nMdScFOoV4370rqHWKmXhY.jpg",
    matchScore: 96,
    genre_ids: [10759, 9648, 18]
  },
  {
    id: 12,
    title: "The Queen's Gambit",
    overview: "In a 1950s orphanage, a young girl reveals an astonishing talent for chess and begins an unlikely journey to stardom while grappling with addiction.",
    poster_path: "/zU0htwkhnGbqCV2nAB8ik4fP4oF.jpg",
    backdrop_path: "/34OGjFEbHj0E3lE2w0iTUVq00y.jpg",
    matchScore: 98,
    genre_ids: [18]
  }
];

export const HERO_MOVIE = STATIC_MOVIES[9]; // Dune
