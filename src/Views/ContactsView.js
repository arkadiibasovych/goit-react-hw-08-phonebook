import PhonebookForm from '../Components/PhonebookForm';
import ContactList from '../Components/ContactList';
import Filter from '../Components/Filter';

const ContactsView = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <PhonebookForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default ContactsView;
