import { getYear, parse } from 'date-fns';
import { CommonInfoContent, CommonInfoField } from './MovieInfo.styled';
import defaultImg from '../../images/default-image.jpg';

export const MovieInfo = ({ data }) => {
  const {
    poster_path,
    backdrop_path,
    title,
    vote_average,
    overview,
    genres,
    release_date,
  } = data;

  const score = Math.round(vote_average * 10);
  const releaseDate = parse(release_date, 'yyyy-MM-dd', new Date());
  const releaseYear = getYear(releaseDate);

  const backdropSrc = `https://image.tmdb.org/t/p/w500/${backdrop_path}`;

  return (
    <CommonInfoField $backdropSrc={backdropSrc}>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : defaultImg
        }
        style={{ objectFit: 'cover', width: '300px' }}
        alt="poster"
      />
      <CommonInfoContent>
        <h2>
          {title} ({releaseYear})
        </h2>
        <p>User Score: {score}% </p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres?.map(item => item.name).join(' ')}</p>
      </CommonInfoContent>
    </CommonInfoField>
  );
};
