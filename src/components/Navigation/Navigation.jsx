import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css'; 
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={styles.nav}>
      <Link  to="/">
        Home
      </Link>
      {isLoggedIn && (
        <Link to="/contacts">
          Contacts
        </Link>
      )}
    </nav>
  );
};

export default Navigation;




