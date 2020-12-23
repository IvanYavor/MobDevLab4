import { useCallback, useState } from "react";
import moviesList from "static/MoviesList.json";

const movieData = moviesList.map((movie, idx) => ({
  ...movie,
  id: moviesList.length - idx,
}));

export const applyData = () => {
  const [movies, setMovies] = useState(movieData);

  const addMovie = useCallback(
    (newMovie) =>
      setMovies((prev) => {
        const newId = Math.max(...prev.map((movie) => movie.id)) + 1;

        return [{ id: newId, ...newMovie }, ...prev];
      }),
    []
  );

  const removeMovie = useCallback((movieId) => {
    debugger;

    return setMovies((prev) => prev.filter((movie) => movie.id !== movieId));
  }, []);

  return {
    movies,
    addMovie,
    removeMovie,
  };
};
