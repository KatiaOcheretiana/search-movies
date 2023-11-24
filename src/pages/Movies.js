import { searchMovies } from 'api';
import { Loader } from 'components/Loader';
import { Searchbar } from 'components/SearchBar/SearchBar';
import { MoviesList } from 'components/TrendingMovies/MoviesList';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
      <Searchbar onSubmit={handleSearch} />
      {isLoading ? <Loader /> : <MoviesList data={movies} />}
      {error && <h2>Try to reload this page </h2>}
    </>
  );
}
