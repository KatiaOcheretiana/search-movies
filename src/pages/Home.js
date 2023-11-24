import { getTrendingMovies } from 'api';
import { Loader } from 'components/Loader';
import { MoviesList } from 'components/TrendingMovies/MoviesList';
import { useEffect, useState } from 'react';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const data = await getTrendingMovies();
        setMovies(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <h1>Trending today</h1> <MoviesList data={movies} />
        </div>
      )}
      {error && <h2>Try to reload this page </h2>}
    </>
  );
}
