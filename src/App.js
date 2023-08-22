import {useEffect, useState} from "react";
import './App.css';
import MovieCard from "./Movie";
import SearchIcon from './search.svg';

// API key 7acc35ea

const API_URL = 'http://www.omdbapi.com?apikey=7acc35ea';

const movie1 = {
    
        "Title": "Spiderman the Verse",
        "Year": "2019",
        "imdbID": "tt12122034",
        "Type": "series",
        "Poster": "N/A"
    
}

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Spiderman');
    },[]);

    return(
        <div className="app">
            <h1>Movie Land</h1>
            <div className="search">
                <input
                placeholder="Search for Movies"
                value={searchTerm}
                onChange={ (e) => setSearchTerm(e.target.value)} 
                 />
                 <img
                 src={SearchIcon}
                 alt="search"
                 onClick={()=> searchMovies(searchTerm)}
                 />
            </div>

            {
                movies?. length >0
                ? (
                    <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie = {movie}/>
                    ))}
                </div>
                ) : (
                    <div className="empty">
                        <h3>No movies found</h3>
                    </div>
                )
            }
        </div>
    );
}

export default App;