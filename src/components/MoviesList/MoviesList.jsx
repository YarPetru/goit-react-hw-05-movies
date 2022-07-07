import { Link } from 'react-router-dom';
import s from './MoviesList.module.css';

const MoviesList = ({ moviesArray }) => {
  return (
    <div>
      <ul className={s.moviesList}>
        {moviesArray.map(item => (
          <li key={item.id} className={s.movieItem}>
            <Link className={s.link} to={`/movies/${item.id}`}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
