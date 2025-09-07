🎬 Netflix GPT

Netflix GPT is a modern, responsive movie web app built with React, TailwindCSS, and Firebase. It leverages TMDB API for movie data and OpenAI GPT API for AI-powered movie suggestions. Perfect for discovering and exploring movies in a Netflix-style interface.

🚀 Features
Authentication

Login / Sign Up

Form validation and Firebase authentication

Create, sign in, and sign out users

Update user profile (display name & profile picture)

Redirect based on login status

Browse Page (After Login)

Header with navigation

Main Movie Container

Background trailer (autoplay & muted)

Movie title & description

Secondary Container

Multiple movie lists

Movie cards with TMDB images

Fully responsive design using TailwindCSS

Netflix GPT

Search bar powered by OpenAI GPT API

Fetch GPT-based movie suggestions from TMDB

Multi-language support

Reusable components and memoization for optimized performance

🛠 Tech Stack

Frontend: React, TailwindCSS

State Management: Redux (userSlice, movieSlice, gptSlice)

Backend & Auth: Firebase (Authentication)

APIs: TMDB API, OpenAI GPT API

Deployment: Production-ready React app

⚡ Key Implementations

Routing with React Router

Custom hooks for fetching movies (useNowPlayingMovies, usePopularMovies)

Firebase authentication with onAuthStateChanged subscription handling

GPT API integration for smart movie suggestions

Redux store for managing user, movie, and GPT state

Responsive UI with TailwindCSS

Environment variables for API keys (.env)

🐞 Bug Fixes & Optimizations

Fixed display name & profile picture update after sign up

Proper redirect for logged-in/logged-out users

Unsubscribed onAuthStateChanged to prevent memory leaks

Memoized components for performance optimization

⚙️ Setup Instructions

Clone the repository

git clone https://github.com/yourusername/netflix-gpt.git
cd netflix-gpt


Install dependencies

npm install


Add Environment Variables

Create a .env file in the root directory

Add your TMDB and OpenAI API keys:

REACT_APP_TMDB_API_KEY=your_tmdb_api_key
REACT_APP_OPENAI_API_KEY=your_openai_api_key


Start the app

npm start


Build for production

npm run build

🤝 Contributing

Contributions are welcome! Fork the repo and submit a pull request.
