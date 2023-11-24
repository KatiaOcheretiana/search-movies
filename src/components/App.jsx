import { Route, Routes } from 'react-router-dom';
import { AppLayout } from './AppLayout';
import Home from '../pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<div>cast</div>} />
          <Route path="reviews" element={<div>reviews</div>} />
        </Route>
      </Route>
      <Route path="*" element={<div>HOME</div>} />
    </Routes>
  );
};
