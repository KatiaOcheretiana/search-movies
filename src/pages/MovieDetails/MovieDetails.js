import { getMoviesDetails } from 'api';
import { Loader } from 'components/Loader';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { AdditionalField, AdditionalItem } from './MovieDetails.styled';
import { FcInfo } from 'react-icons/fc';
import { FcReading, FcPortraitMode } from 'react-icons/fc';

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
      {!isLoading && (
        <AdditionalField>
          <p>
            <FcInfo />
            Additional information
          </p>
          <ul>
            <AdditionalItem>
              <NavLink to="cast">
                <FcPortraitMode />
                Cast
              </NavLink>
            </AdditionalItem>
            <AdditionalItem>
              <NavLink to="reviews">
                <FcReading />
                Reviews
              </NavLink>
            </AdditionalItem>
          </ul>
        </AdditionalField>
      )}

      <Outlet />
    </div>
  );
}
