import { createUseStyles } from 'react-jss';

import ContactListItem from './ContactListItem';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/contacts-operations';

const useStyles = createUseStyles({
  list: {
    padding: 0,
    margin: 0,
  },
});
const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(getVisibleContacts);
  const s = useStyles();
  return (
    <ul className={s.list}>
      {contacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
