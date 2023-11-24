import { getMoviesDetails } from 'api';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function MovieDetails() {
  const [details, setDetails] = useState([]);
  //   const [error, setError] = useState(false);
  //   const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const searchDetails = async id => {
      try {
        setIsLoading(true);
        setError(false);
        const data = await getMoviesDetails(id);
        console.log(data);
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
      <MovieInfo data={details} />
    </div>
  );
}
