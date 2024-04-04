import { useLocation } from 'react-router-dom';
import {
  LinkCard,
  List,
  ListField,
  ListItem,
  Title,
} from './MoviesList.styled';
import defaultImg from '../../images/default-image.jpg';

export const MoviesList = ({ data }) => {
  const location = useLocation();

  return (
    <ListField>
      <List>
        {data.map(({ id, title, poster_path }) => (
          <ListItem key={id}>
            <LinkCard to={`/movies/${id}`} state={{ from: location }}>
              <img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                    : defaultImg
                }
                style={{
                  objectFit: 'cover',
                }}
                alt="poster"
              />
              <Title>{title}</Title>
            </LinkCard>
          </ListItem>
        ))}
      </List>
    </ListField>
  );
};
