
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../redux/auth/operations.js';
import css from './Task.module.css';

export const Task = ({ id, text }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(id));

  return (
    <div className={css.wrapper}>
      <p className={css.text}>{text}</p>
      <button type="button" className={css.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Task;