import { searchMovies } from 'api';
import { Loader } from 'components/Loader';
import { Searchbar } from 'components/SearchBar/SearchBar';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [params, setParams] = useSearchParams();
  const queryToSearch = params.get('search') ?? '';
  console.log(queryToSearch);

  const updateSearchItem = newQuery => {
    params.set('search', newQuery);
    setParams(params);
  };

  const handleSearch = async query => {
    try {
      setMovies([]);
      setIsLoading(true);
      setError(false);
      const movies = await searchMovies(query);

      if (movies.length > 0) {
        setMovies(movies);
        toast.success('Successfully found!');
      } else {
        toast.error('Nothing found.');
      }
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Searchbar
        onSubmit={handleSearch}
        onChange={updateSearchItem}
        search={queryToSearch}
      />
      {isLoading ? <Loader /> : <MoviesList data={movies} />}
      {error && <h2>Try to reload this page </h2>}
    </>
  );
}
