import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import css from '../Contacts/Contacts.module.css';
import { deleteContactsThunk } from 'redux/thunk';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const normalizedFilterValue = filter.toLowerCase();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilterValue)
  );

  return (
    <ul>
      {filteredContacts.map(({ id, name, phone }) => {
        return (
          <li className={css.item} key={id}>
            <p className={css.text}>
              {name}: {phone}
            </p>
            <button
              className={css.btn}
              type="button"
              onClick={() => dispatch(deleteContactsThunk(id))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
