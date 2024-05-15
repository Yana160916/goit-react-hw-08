import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations.js';

const UserMenu = ({ user }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <p>Вітаємо, {user.name}!</p>
      <button onClick={handleLogout}>Вийти</button>
    </div>
  );
};

export default UserMenu;