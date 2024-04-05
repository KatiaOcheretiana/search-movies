import { GlobalStyle } from './GlobalStyle';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { HeaderField, List, StyledLink } from './AppLayout.styled';
import { Suspense } from 'react';
import { Loader } from './Loader';

export const AppLayout = () => {
  return (
    <>
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
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Toaster />
      <GlobalStyle />
    </>
  );
};
