import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Layout from './Layout';

// import {
//   HomePage,
//   MoviesPage,
//   MovieDetailsPage,
//   CastPage,
//   ReviewsPage,
// } from '../pages';

// import HomePage from '../pages/HomePage';
// import MoviesPage from '../pages/MoviesPage';
// import MovieDetailsPage from '../pages/MovieDetailsPage';

const lazyLoader = pageName => {
  return lazy(() =>
    import(`../pages/${pageName}`).then(module => ({
      default: module[pageName],
    }))
  );
};

const HomePage = lazyLoader('HomePage');
const MoviesPage = lazyLoader('MoviesPage');
const MovieDetailsPage = lazyLoader('MovieDetailsPage');
const CastPage = lazyLoader('CastPage');
const ReviewsPage = lazyLoader('ReviewsPage');

export const App = () => {
  return (
    <Suspense fallback="LOADING">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index exact element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" exact element={<MovieDetailsPage />}>
            <Route path="cast" element={<CastPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
