import React from "react";
import { useEffect,useState } from "react";
import "./App.css";
import searchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const API_URL = " http://www.omdbapi.com/?apikey=63a5ac4c";

const App = () => {
    const [movies, setMovies] = useState([]);
	const [searchTerm, setSearchTerm] = useState('')

    const SearchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
		console.log(data.Search)
        setMovies(data.Search);
  };

  useEffect(() => {
    SearchMovies("spiderman");
  }, []);


  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={searchIcon} alt="Search" onClick={() => SearchMovies(searchTerm)} />
      </div>
	  
	  {
		  movies?.length > 0 
		  ?( <div className="container">
			  {movies.map((movie)=>{
				return <MovieCard movie={movie} key={movie.imdbID}/>
			  })}
		 
		</div>)
		:(<div className="empty">
			<h2>No Movies Found!</h2>
			</div>)
	  }
      
    </div>
  );
};

export default App;
