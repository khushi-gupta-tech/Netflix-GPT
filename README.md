# 🎬 Netflix GPT

Netflix GPT is a responsive React web app for exploring movies in a Netflix-style interface. It integrates TMDB API for movie data and OpenAI GPT API for AI-powered movie suggestions.

---

## 🚀 Features
- ✅ Authentication – Login, Sign-up, and profile update with Firebase  
- 🎬 Browse Page – Movie trailers, titles, descriptions, and movie lists  
- 🔍 GPT Search – AI-powered movie suggestions  
- 📱 Responsive Design – Works across devices using TailwindCSS  
- ⚡ State Management – Redux slices for user, movies, and GPT suggestions  

---

## 🛠️ Tech Stack
- **Frontend:** React.js, Tailwind CSS  
- **State Management:** Redux (`userSlice`, `movieSlice`, `gptSlice`)  
- **Backend & Auth:** Firebase Authentication  
- **APIs:** TMDB, OpenAI GPT  
- **Deployment:** Production-ready React app  

---

## ⚙️ Installation & Setup

1. **Clone the repository**  

git clone https://github.com/yourusername/netflix-gpt.git
cd netflix-gpt

2. Install dependencies

npm install


3. Start the development server

 npm start


4. Build for production

npm run build

🔑 API Setup

1. TMDB API

   . Register on TMDB  and create an app
   . Get your API Key

2. OpenAI GPT API

  . Get your API key from OpenAI

3. Add environment variables

  . Create a .env file in the root folder and add:

   REACT_APP_TMDB_API_KEY=your_tmdb_api_key

   REACT_APP_OPENAI_API_KEY=your_openai_api_key

🤝 Contributing

Contributions are welcome! Feel free to fork this repo and submit pull requests.
