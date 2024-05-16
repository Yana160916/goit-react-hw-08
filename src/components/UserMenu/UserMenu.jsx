import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations.js';
import { selectUser } from '../../redux/auth/selectors.js';
import styles from './UserMenu.module.css';

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.userMenu}>
      <p>Welcome, {user.name}!</p>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default UserMenu;