import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTrendMovies } from '../../services/api';
import Loader from '../Loader';
import toast from 'react-hot-toast';

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

// const onMovieClick = e => {
//   //   e.peventDefault;
//   console.log(e.currentTarget.key);
// };

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
      {status === 'resolved' && (
        <div>
          <ul>
            {items.map(item => (
              <li key={item.id}>
                <Link to={`/movies/${item.id}`}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Home;
