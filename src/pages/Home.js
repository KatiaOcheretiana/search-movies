import { getTrendingMovies } from 'api';
import { Loader } from 'components/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { FcFilmReel } from 'react-icons/fc';

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
          <h1 style={{ marginLeft: 30, marginTop: 20 }}>
            Trending today <FcFilmReel />
          </h1>
          <MoviesList data={movies} />
        </div>
      )}
      {error && <h2>Try to reload this page </h2>}
    </>
  );
}
