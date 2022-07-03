import Layout from './Layout';
import { Routes, Route, Navigate } from 'react-router-dom';
import {
  HomePage,
  MoviesPage,
  MovieDetailsPage,
  CastPage,
  ReviewPage,
} from '../pages';
// import HomePage from '../pages/HomePage';
// import MoviesPage from '../pages/MoviesPage';
// import MovieDetailsPage from '../pages/MovieDetailsPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" exact element={<MovieDetailsPage />}>
          {/* <Route path="cast" element={<p>CastPage</p>} />
          <Route path="reviews" element={<p>ReviewsPage</p>} /> */}
          <Route path="cast" element={<CastPage />} />
          {/* <Route path="reviews" element={<ReviewPage />} /> */}
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
