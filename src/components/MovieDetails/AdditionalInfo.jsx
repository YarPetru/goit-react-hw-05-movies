import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieDetails } from '../../services/api';

const AdditionalInfo = () => {
  //   const [status, setStatus] = useState('idle');
  //   const [error, setError] = useState(null);
  //   const [item, setItem] = useState(null);

  const { movieId } = useParams();

  //   useEffect(() => {
  //     const fetchMovieDetails = async () => {
  //       try {
  //         setStatus('pending');
  //         const item = await getMovieDetails(movieId);
  //         setItem(item);
  //         setStatus('resolved');
  //       } catch (error) {
  //         setError(error);
  //         setStatus('rejected');
  //       }
  //     };

  //     fetchMovieDetails();
  //   }, []);

  return (
    <>
      <h2>Additional Info</h2>
      <ul>
        <li>
          <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
        </li>
      </ul>
    </>
  );
};

export default AdditionalInfo;
