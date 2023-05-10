import { useDispatch } from 'react-redux';
// import { removeContacts } from 'components/slices/Slice';
import { removeContacts } from 'components/slices/Slice';
import css from './ContactListItem.module.css';
const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeContacts(contact.id));
  };
  return (
    <li className={css.item}>
      <span className={css.name}>{contact.name}:</span>
      <span className={css.number}>{contact.number}</span>
      <button onClick={handleDelete} className={css.button}>
        Delete
      </button>
    </li>
  );
};
export default ContactListItem;
