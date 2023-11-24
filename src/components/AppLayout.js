import { GlobalStyle } from './GlobalStyle';
import { Toaster } from 'react-hot-toast';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orangered;
  }
`;

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
