import { useDispatch, useSelector } from 'react-redux';
import { selectNameFilter } from '../../redux/filters/selectors.js';
import styles from '../SearchBox/SearchBox.module.css'; 
import { setFilter } from '../../redux/filters/slice.js';

function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={styles.formContainer}> 
      <label htmlFor="search">Find contact by name</label>
      <input
        type="text"
        id="search"
        placeholder=""
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBox;