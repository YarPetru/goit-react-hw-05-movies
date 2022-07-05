import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

import toast from 'react-hot-toast';
import PropTypes from 'prop-types';
import { getMovieByQuery } from 'services/api';
import s from './Movies.module.css';
import Loader from '../Loader';
import SearchForm from 'components/SearchForm';

// Query Function
const GetSearchedMovie = q => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieByQuery = async () => {
      try {
        setStatus('pending');
        const movies = await getMovieByQuery(q);
        setMovies(movies);
        setStatus('resolved');
        movies.length === 0 &&
          toast('There are no movies for this query. Please try another word', {
            icon: '😓',
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
          });
      } catch (error) {
        setStatus('rejected');
        setError(error);
      }
    };

    if (!!q) {
      fetchMovieByQuery();
    }
  }, [q]);
  return { movies, status, error };
};

// common func for page - need to be devided
const Movies = () => {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const queryWord = searchParams.get('q');
  const { movies, status, error } = GetSearchedMovie(queryWord);

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      return toast('Enter your query please', {
        icon: '😓',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
    }
    setSearchParams({ q: query });
    setQuery('');
  };

  const handleInputChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  return (
    <>
      <SearchForm
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        query={query}
      />
      {status === 'pending' && <Loader />}
      {status === 'rejected' &&
        toast(
          `Oops. Something went wrong. Please try again. ${error.message}`,
          {
            icon: '😓',
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
          }
        )}
      {status === 'resolved' && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id} className={s.movieItem}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

GetSearchedMovie.propTypes = {
  q: PropTypes.string.isRequired,
};

export default Movies;
