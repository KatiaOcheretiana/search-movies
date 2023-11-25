import { getMoviesDetails } from 'api';
import { Loader } from 'components/Loader';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';

export default function MovieDetails() {
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const searchDetails = async id => {
      try {
        setIsLoading(true);
        setError(false);
        const data = await getMoviesDetails(id);
        setDetails(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    searchDetails(movieId);
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {details && <MovieInfo data={details} />}
      {error && <h2>Try to reload this page </h2>}

      <p>Additional information</p>
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
