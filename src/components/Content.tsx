import { useContext } from "react";
import { MoviesContext } from "../hooks/useMovies";
import { MovieCard } from "./MovieCard";

export function Content() {
  const { movies, selectedGenre } = useContext(MoviesContext)
  return(
    <div className="container">
    <header>
      <span className="category">Category:<span> {selectedGenre.title}</span></span>
    </header>

    <main>
      <div className="movies-list">
        {movies.map(movie => (
          <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
        ))}
      </div>
    </main>
  </div>
  )
}