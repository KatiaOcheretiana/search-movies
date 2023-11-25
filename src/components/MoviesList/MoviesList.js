import { Link } from 'react-router-dom';
import { ListField, ListItem } from './MoviesList.styled';
import { PiFilmSlateLight } from 'react-icons/pi';

export const MoviesList = ({ data }) => {
  return (
    <ListField>
      <ul>
        {data.map(({ id, title }) => (
          <ListItem key={id}>
            <PiFilmSlateLight />
            <Link to={`/movies/${id}`}> {title}</Link>
          </ListItem>
        ))}
      </ul>
    </ListField>
  );
};
