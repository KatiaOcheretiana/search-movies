import { Link } from 'react-router-dom';
import { FaFaceSadCry } from 'react-icons/fa6';
import { Container } from 'components/GlobalStyle';

export default function PageNotFound() {
  return (
    <Container>
      <h2 style={{ margin: 60 }}>
        <FaFaceSadCry />
        Sorry! We can't find the current page. Please use this
        <Link to="/"> link </Link> to navigate to our home page
      </h2>
    </Container>
  );
}
