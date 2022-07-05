import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { FcSearch } from 'react-icons/fc';
import toast from 'react-hot-toast';

import { getMovieByQuery } from 'services/api';
import s from './Movies.module.css';
import Loader from '../Loader';

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
      <form className={s.form} onSubmit={handleSubmit}>
        <button type="submit" className={s.button}>
          <span className={s.buttonLabel}>Search</span>
          <FcSearch />
        </button>

        <input
          className={s.input}
          type="text"
          autoComplete="off"
          value={query}
          autoFocus
          placeholder="Search images and photos"
          onChange={handleInputChange}
        />
      </form>
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
            <li key={movie.id} className="movieItem">
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Movies;
