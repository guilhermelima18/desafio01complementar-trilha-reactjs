import { MovieCard } from "./MovieCard";

interface Movies {
  imdbID: string;
  Title: string;
  Poster: string;
  Runtime: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
}

export function Content(props: { movies: Movies[] }) {
  return (
    <main>
      <div className="movies-list">
        {props.movies.map(movie => (
          <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
        ))}
      </div>
    </main>
  )
}