import { GlobalStyle } from './GlobalStyle';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { StyledLink } from './AppLayout.styled';

export const AppLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/movies">Movies</StyledLink>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
      <Toaster />
      <GlobalStyle />
    </div>
  );
};
