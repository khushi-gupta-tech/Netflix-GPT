🎬 Netflix GPT

Netflix GPT is a responsive React web app for exploring movies in a Netflix-style interface. It integrates TMDB API for movie data and OpenAI GPT API for AI-powered movie suggestions.

🚀 Features
🔐 Authentication

📝 Firebase login and sign-up

👤 Create and sign in users

🖼 Update user profile (display name & profile picture)

🔄 Redirect based on login status

🎥 Browse Page

🏠 Header with navigation

🎬 Main movie container

🎞 Background trailer (autoplay & muted)

🏷 Movie title & description

📂 Secondary container with multiple movie lists

🖼 Movie cards with TMDB images

📱 Fully responsive using TailwindCSS

🤖 Netflix GPT

🔎 AI-powered search bar

🎯 Movie suggestions fetched from TMDB

🌐 Multi-language support

⚡ Reusable and memoized components for performance

🛠 Tech Stack

🖥 Frontend: React, TailwindCSS

⚙️ State Management: Redux (userSlice, movieSlice, gptSlice)

🔒 Backend & Auth: Firebase Authentication

🌐 APIs: TMDB, OpenAI GPT

🚀 Deployment: Production-ready React app

⚡ Key Implementations

🗺 Routing with React Router

🛠 Custom hooks for fetching movies:

useNowPlayingMovies

usePopularMovies

🔔 Firebase auth with onAuthStateChanged handling

🗃 Redux store for user, movies, and GPT data

🎨 TailwindCSS for responsive UI

🔑 Environment variables for API keys (.env)

🐞 Bug Fixes & Optimizations

✅ Fixed display name & profile picture update after sign up

🔄 Proper redirects for logged-in/logged-out users

🧹 Unsubscribed onAuthStateChanged to prevent memory leaks

⚡ Memoized components for better performance

⚙️ Setup Instructions

📥 Clone the repository

git clone https://github.com/yourusername/netflix-gpt.git
cd netflix-gpt


📦 Install dependencies

npm install


🔑 Add Environment Variables

Create .env in root directory

Add API keys:

REACT_APP_TMDB_API_KEY=your_tmdb_api_key
REACT_APP_OPENAI_API_KEY=your_openai_api_key


▶️ Run the app

npm start


📦 Build for production

npm run build


🤝 Contributing

🍴 Fork the repository

📤 Submit pull requests

💡 Contributions are welcome!
