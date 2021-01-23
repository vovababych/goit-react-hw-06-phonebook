import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/contacts/contacts-actions';
import PropTypes from 'prop-types';
import s from './ContactsList.module.css';

function ContactsList({ title }) {
  const filteredContacts = useSelector(state =>
    state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(state.filter.toLowerCase()),
    ),
  );

  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(actions.DELETE(id));

  return (
    <>
      {filteredContacts.length < 1 && <p className={s.text}>Нет контактов</p>}

      <ul className={s.contactsList}>
        {filteredContacts.length > 0 &&
          filteredContacts.map(({ id, name, tel }) => (
            <li key={id} className={s.contact}>
              <span className={s.name}>{name}</span>
              <span className={s.phone}>
                <a href={`tel:+${tel.toString().replace(/[^\d;]/g, '')}`}>
                  {tel}
                </a>
              </span>
              <button
                className={s.btnDeleteContact}
                type="button"
                onClick={() => onDeleteContact(id)}
              >
                x
              </button>
            </li>
          ))}
      </ul>
    </>
  );
}

ContactsList.propTypes = {
  title: PropTypes.string,
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};

export default ContactsList;

// const getFilteredContacts = (allContacts, filter) => {
//   const normalizeFilter = filter.toLowerCase();

//   return allContacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizeFilter),
//   );
// };

// const mapStateToProps = state => ({
//   filteredContacts: getFilteredContacts(state.contacts, state.filter),
// });

// const mapDispatchToProps = dispatch => ({
//   onDeleteContact: id => dispatch(actions.DELETE(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
