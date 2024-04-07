import { Route, Routes } from 'react-router-dom';
import { AppLayout } from './AppLayout';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home/Home.js'));
const Movies = lazy(() => import('../pages/Movies.js'));
const MovieDetails = lazy(() =>
  import('../pages/MovieDetails/MovieDetails.js')
);
const PageNotFound = lazy(() => import('../pages/PageNotFound.js'));
const Cast = lazy(() => import('../components/Cast/Cast.js'));
const Reviews = lazy(() => import('../components/Reviews/Reviews.js'));
const Trailer = lazy(() => import('../components/Trailer/Trailer'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="trailer" element={<Trailer />} />
        </Route>
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
