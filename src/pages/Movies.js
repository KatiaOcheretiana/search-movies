import { searchMovies } from 'api';
import { Loader } from 'components/Loader';
import { Searchbar } from 'components/SearchBar/SearchBar';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [wasSurched, setWasSurched] = useState(false);

  const [params, setParams] = useSearchParams();
  const queryToSearch = params.get('search') ?? '';

  useEffect(() => {
    const fetchMoviesList = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const movies = await searchMovies(queryToSearch);
        setMovies(movies);
        if (wasSurched) {
          if (movies.length > 0) {
            toast.success('Successfully found!');
          } else {
            toast.error('Nothing found.');
          }
        }
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMoviesList();
  }, [queryToSearch, wasSurched]);

  const handleSearch = async query => {
    setParams({ search: query ?? '' });
    setWasSurched(true);
  };

  return (
    <>
      <Searchbar onSubmit={handleSearch} />
      {isLoading ? <Loader /> : <MoviesList data={movies} />}
      {error && <h2>Try to reload this page </h2>}
    </>
  );
}
