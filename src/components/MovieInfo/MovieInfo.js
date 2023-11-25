import { getYear, parse } from 'date-fns';
import { CommonInfoContent, CommonInfoField } from './MovieInfo.styled';

export const MovieInfo = ({ data }) => {
  const { poster_path, title, vote_average, overview, genres, release_date } =
    data;
  const imageUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : null;
  const score = Math.round(vote_average * 10);
  const releaseDate = parse(release_date, 'yyyy-MM-dd', new Date());
  const releaseYear = getYear(releaseDate);
  return (
    <CommonInfoField>
      <img src={imageUrl} alt={title} width={240} />
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
