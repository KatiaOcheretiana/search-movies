import { getMoviesDetails } from 'api';
import { Loader } from 'components/Loader';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { useEffect, useRef, useState } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import {
  AdditionalField,
  AdditionalItem,
  BackLink,
  LinkList,
  LinkNav,
  LinkText,
} from './MovieDetails.styled';
import { FcReading, FcPortraitMode, FcUpLeft, FcInfo } from 'react-icons/fc';
import { Container } from 'components/GlobalStyle';

export default function MovieDetails() {
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  const location = useLocation();
  const backLinkRef = useRef(location);

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
    <Container>
      {isLoading && <Loader />}
      {details && (
        <div>
          <BackLink to={backLinkRef.current.state?.from ?? '/'}>
            <FcUpLeft style={{ width: 40, height: 20 }} />
            <LinkText> Go back</LinkText>
          </BackLink>
          <MovieInfo data={details} />
        </div>
      )}
      {error && <h2>Try to reload this page </h2>}

      {!isLoading && (
        <AdditionalField>
          <p>
            <FcInfo />
            Additional information
          </p>
          <LinkList>
            <AdditionalItem>
              <LinkNav to="cast">
                <FcPortraitMode />
                Cast
              </LinkNav>
            </AdditionalItem>
            <AdditionalItem>
              <LinkNav to="reviews">
                <FcReading />
                Reviews
              </LinkNav>
            </AdditionalItem>
            <AdditionalItem>
              <LinkNav to="trailer">
                <FcReading />
                Trailer
              </LinkNav>
            </AdditionalItem>
          </LinkList>
        </AdditionalField>
      )}

      <Outlet />
    </Container>
  );
}
