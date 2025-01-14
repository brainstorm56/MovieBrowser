# Movie Browser 🎥

A React-based web application that allows users to browse, search, and manage their favorite movies using the TMDB API.

## Features

- **Movie Discovery**: Browse through a vast collection of movies with infinite scroll functionality
- **Search**: Search for specific movies by title
- **Favorites**: Add/remove movies to/from your favorites list with persistent storage
- **Responsive Design**: Fully responsive layout that works on all device sizes
- **Modern UI**: Clean and intuitive user interface with smooth transitions

## Tech Stack

- React.js (v18.3.1)
- React Router DOM (v7.1.1) for navigation
- Tailwind CSS for styling
- Vite for build tooling
- Context API for state management
- TMDB API for movie data
- nanoid for unique key generation

## Prerequisites

Before running the application, make sure you have:
- Node.js (v14 or higher)
- npm or yarn package manager
- TMDB API key

## Project Setup

1. Create a new Vite project:
```bash
npm create vite@latest movie-browser
cd movie-browser
```

2. Install dependencies:
```bash
npm install
npm install react-router-dom nanoid
```

3. Setup Tailwind CSS:
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

4. Clone the repository (alternative to steps 1-3):
```bash
git clone <repository-url>
cd movie-browser
npm install
```

5. Create a `config/index.js` file in the root directory and add your TMDB API configuration:
```javascript
export const API_KEY = 'your_tmdb_api_key';
export const TMDB_REQUEST_URL = 'https://api.themoviedb.org/3';
export const TMDB_IMAGE_URL = 'https://image.tmdb.org/t/p';
```

6. Start the development server:
```bash
npm run dev
```

## Project Structure

```
src/
├── components/
│   ├── Favorites/
│   │   └── Favorites.jsx
│   ├── Home/
│   │   └── Home.jsx
│   ├── MovieCard/
│   │   └── MovieCard.jsx
│   ├── Navbar/
│   │   └── Navbar.jsx
│   └── Search/
│       └── Search.jsx
├── contexts/
│   └── FavoriteContext.jsx
├── Layout.jsx
└── App.jsx
```

## Dependencies

```json
{
  "dependencies": {
    "nanoid": "^5.0.9",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^7.1.1"
  },
  "devDependencies": {
    "@eslint/js": "^9.17.0",
    "@types/react": "^18.3.18",
    "@types/react-dom": "^18.3.5",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.17.0",
    "eslint-plugin-react": "^7.37.2",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.16",
    "globals": "^15.14.0",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.17",
    "vite": "^6.0.5"
  }
}
```

## Key Features Implementation

### Router Setup
- Uses React Router v7 with `createBrowserRouter`
- Implements nested routing with a main layout
- Routes for Home, Search, and Favorites pages

### Favorites Management
- Uses Context API for global state management
- Implements persistent storage using localStorage
- Provides add/remove functionality across components

### Infinite Scrolling
- Implemented using scroll event listeners
- Automatically loads more content when user reaches bottom of page
- Maintains smooth user experience with loading indicators

### Search Functionality
- Real-time search results
- Infinite scroll support in search results
- Clean and responsive search interface

## Design Decisions

1. **Project Structure**
   - Vite as build tool for faster development experience
   - Modular component organization
   - Separation of routing logic in App.jsx
   - Common layout with Navbar using Outlet

2. **State Management**
   - Context API for global favorites state
   - localStorage for persistence
   - Efficient state updates using functional updates

3. **Responsive Design**
   - Grid-based layout using Tailwind CSS
   - Responsive breakpoints for different screen sizes
   - Mobile-first approach

## Possible Improvements

1. **Performance Optimization**
   - Implement debouncing for search functionality
   - Add image lazy loading
   - Optimize re-renders using React.memo or useMemo

2. **Feature Enhancements**
   - Add movie details page
   - Implement filtering by genre
   - Add sorting options
   - Include user ratings and reviews
   - Add movie trailers

3. **Technical Improvements**
   - Add error boundaries
   - Implement proper loading states
   - Add unit tests
   - Implement proper TypeScript support
   - Add proper error handling for API failures

4. **UI/UX Improvements**
   - Add animations for state changes
   - Implement skeleton loading
   - Add tooltips for better user guidance
   - Improve accessibility

## Contributing

Feel free to submit issues, fork the repository, and create pull requests for any improvements.

## License

This project is licensed under the MIT License - see the LICENSE file for details.