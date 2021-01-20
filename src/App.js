// import { useState, useEffect } from 'react';
// import { connect } from 'react-redux';
// import * as actions from './redux/contacts/contacts-actions';

// import useLocalStorage from './hooks/useLocalStorage';

import Container from './components/Container';
import ContactForm from './components/ContactForm';
import ContactsList from './components/ContactsList';

function App({ contacts, onAddContact, onDeleteContact }) {
  // const [contacts, setContacts] = useState([]);
  //
  // useEffect(() => {
  //    const readContacts = JSON.parse(localStorage.getItem('contacts'));
  //    if (readContacts) {
  //      setContacts(readContacts);
  //    }
  //  }, []);

  //  useEffect(() => {
  //    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  //  }, [contacts]);

  // const [contacts, setContacts] = useLocalStorage('contacts', []);

  // const handleAddContact = newContact => {
  //   setContacts(prevState => [...prevState, newContact]);
  // };

  // const handlerUniqName = name => {
  //   const uniqName = !!contacts.find(
  //     contact => contact.name.toLowerCase() === name.toLowerCase(),
  //   );
  //   if (uniqName) {
  //     alert(`${name} is already in contacts`);
  //     return false;
  //   }
  //   return true;
  // };

  // const handleDeleteContact = id => {
  //   setContacts(contacts.filter(contact => contact.id !== id));
  // };

  return (
    <Container title="Phonebook">
      <ContactForm
      // onAdd={onAddContact}
      // onCheckforUniqName={handlerUniqName}
      />
      <ContactsList
        title="Contacts"
        // contacts={contacts}
        // onDeleteContact={onDeleteContact}
      />
    </Container>
  );
}
// const mapStateToProps = state => {
//   return {
//     contacts: state.contacts,
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     // onAddContact: contact => dispatch(actions.addContact(contact)),
//     // onDeleteContact: id => dispatch(actions.deleteContact(id)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
