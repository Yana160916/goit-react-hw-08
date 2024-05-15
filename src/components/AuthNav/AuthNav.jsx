import { Link } from 'react-router-dom';
import styles from './AuthNav.module.css'

const AuthNav = () => {
  return (
    <nav className={styles.navAuth}>
      <ul>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Log in</Link>
        </li>
      </ul>
    </nav>
  );
};

export default AuthNav;


