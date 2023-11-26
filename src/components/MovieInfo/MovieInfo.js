import { getYear, parse } from 'date-fns';
import { CommonInfoContent, CommonInfoField } from './MovieInfo.styled';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

export const MovieInfo = ({ data }) => {
  const { poster_path, title, vote_average, overview, genres, release_date } =
    data;

  const score = Math.round(vote_average * 10);
  const releaseDate = parse(release_date, 'yyyy-MM-dd', new Date());
  const releaseYear = getYear(releaseDate);
  return (
    <div>
      <CommonInfoField>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : defaultImg
          }
          width={240}
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
    </div>
  );
};
