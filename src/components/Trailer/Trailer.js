import { getTrailer } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TrailerWrap } from './Trailer.styled';
import { Loader } from 'components/Loader';

export default function Trailer() {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const searchTrailer = async movieId => {
      try {
        const trailer = await getTrailer(movieId);
        !trailer ? setTrailerUrl(null) : setTrailerUrl(trailer.key);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    searchTrailer(movieId);
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <h2>Try to reload this page </h2>}

      {!trailerUrl && <p>We didn't find trailer</p>}

      {trailerUrl && (
        <TrailerWrap>
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${trailerUrl}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; "
            allowFullScreen
          ></iframe>
        </TrailerWrap>
      )}
    </>
  );
}
