import { Link, useLocation } from 'react-router-dom';
import { ListField, ListItem } from './MoviesList.styled';
import { PiFilmSlateLight } from 'react-icons/pi';

export const MoviesList = ({ data }) => {
  const location = useLocation();

  return (
    <ListField>
      <ul>
        {data.map(({ id, title }) => (
          <ListItem key={id}>
            <PiFilmSlateLight />
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </ListItem>
        ))}
      </ul>
    </ListField>
  );
};
