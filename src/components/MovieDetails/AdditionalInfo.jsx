import { Link, useParams } from 'react-router-dom';

const AdditionalInfo = () => {
  const { movieId } = useParams();

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
