import { Link, useLocation } from 'react-router-dom';
import { List, ListField, ListItem, Title } from './MoviesList.styled';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

export const MoviesList = ({ data }) => {
  const location = useLocation();

  return (
    <ListField>
      <List>
        {data.map(({ id, title, poster_path }) => (
          <ListItem key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                    : defaultImg
                }
                width={200}
                alt="poster"
              />
              <Title>{title}</Title>
            </Link>
          </ListItem>
        ))}
      </List>
    </ListField>
  );
};
