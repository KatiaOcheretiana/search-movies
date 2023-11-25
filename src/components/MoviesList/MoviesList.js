import { Link } from 'react-router-dom';
import { ListItem } from './MoviesList.styled';
import { PiFilmSlateLight } from 'react-icons/pi';

export const MoviesList = ({ data }) => {
  return (
    <div>
      <ul>
        {data.map(({ id, title }) => (
          <ListItem key={id}>
            <PiFilmSlateLight />
            <Link to={`/movies/${id}`}> {title}</Link>
          </ListItem>
        ))}
      </ul>
    </div>
  );
};
