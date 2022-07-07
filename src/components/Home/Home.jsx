import { useState, useEffect } from 'react';
import { getTrendMovies } from '../../services/api';
import toast from 'react-hot-toast';
import Loader from '../Loader';
import MoviesList from '../MoviesList';

const useFetchMovies = () => {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setStatus('pending');
        const items = await getTrendMovies();
        setItems(items);
        setStatus('resolved');
      } catch (error) {
        setError(error);
        setStatus('rejected');
        // return;
      }
      //   finally {
      //     setStatus('resolved');
      //   }
    };

    fetchMovies();
  }, []);
  return { items, error, status };
};

const Home = () => {
  const { items, error, status } = useFetchMovies();
  return (
    <>
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
      {status === 'resolved' && <MoviesList moviesArray={items} />}
    </>
  );
};

export default Home;
