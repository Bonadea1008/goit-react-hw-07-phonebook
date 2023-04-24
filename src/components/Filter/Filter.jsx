import css from '../Filter/Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { filterValue } from 'redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filterInputHandler = ({ target }) =>
    dispatch(filterValue(target.value));

  return (
    <>
      <label htmlFor="">
        Find contacts by name:
        <input
          className={css.input}
          type="text"
          name="filter"
          onChange={filterInputHandler}
          value={filter}
        />
      </label>
    </>
  );
};
