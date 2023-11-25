import { getMoviesCredits } from 'api';
import { Loader } from 'components/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CastField, CastList, Info } from './Cast.styled';

export const Cast = () => {
  const [cast, setCast] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const searchCast = async id => {
      try {
        setIsLoading(true);
        setError(false);
        const data = await getMoviesCredits(id);
        setCast(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    searchCast(movieId);
  }, [movieId]);

  return (
    <CastField>
      {isLoading && <Loader />}
      {error && <h2>Try to reload this page </h2>}
      <CastList>
        {cast && cast.length === 0 && <p>We didn't find information</p>}
        {cast &&
          cast.map(({ name, character, profile_path, id }) => (
            <Card key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={name}
                width={180}
              />
              <Info>{name}</Info>
              <Info>{character}</Info>
            </Card>
          ))}
      </CastList>
    </CastField>
  );
};
