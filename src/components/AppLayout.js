import { GlobalStyle } from './GlobalStyle';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { HeaderField, List, StyledLink } from './AppLayout.styled';

export const AppLayout = () => {
  return (
    <div>
      <HeaderField>
        <nav>
          <List>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/movies">Movies</StyledLink>
            </li>
          </List>
        </nav>
      </HeaderField>

      <main>
        <Outlet />
      </main>
      <Toaster />
      <GlobalStyle />
    </div>
  );
};
