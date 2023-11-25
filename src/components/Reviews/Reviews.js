import { getMoviesReviews } from 'api';
import { Loader } from 'components/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const searchReviews = async id => {
      try {
        setIsLoading(true);
        setError(false);
        const data = await getMoviesReviews(id);
        setReviews(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    searchReviews(movieId);
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <h3>Try to reload this page </h3>}
      {reviews && reviews.length === 0 && (
        <p>We didn't find reviews of this movie</p>
      )}
      {reviews && (
        <ul>
          {reviews.map(({ author, id, content }) => (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
