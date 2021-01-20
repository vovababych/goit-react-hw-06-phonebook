// import { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/contacts/contacts-actions';
import PropTypes from 'prop-types';
import s from './ContactsList.module.css';
import Filter from '../Filter';

function ContactsList({ filterContacts, title, onDeleteContact }) {
  return (
    <>
      <h2 className={s.title}>{title}</h2>

      <Filter />

      <ul className={s.contactsList}>
        {filterContacts.length > 0 &&
          filterContacts.map(({ id, name, tel }) => (
            <li key={id} className={s.contact}>
              <span className={s.name}>{name}</span>
              <span className={s.phone}>{tel}</span>
              <button
                className={s.btnDeleteContact}
                type="button"
                onClick={() => onDeleteContact(id)}
              >
                Delete
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

const getFilteredContacts = (allContacts, filter) => {
  const normalizeFilter = filter.filter.toLowerCase();
  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizeFilter),
  );
};

const mapStateToProps = state => ({
  filterContacts: getFilteredContacts(state.contacts, state.filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
