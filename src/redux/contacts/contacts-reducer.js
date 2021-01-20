import { combineReducers } from 'redux';
import types from './contacts-types';

const initialState = [
  { id: 1, name: 'Вася', tel: 111 },
  { id: 3, name: 'Tolya', tel: 333 },
];

const contacts = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [...state, payload];

    case types.DELETE:
      return state.filter(contact => contact.id !== payload);

    // case 'contacts/uniqName': {
    //   const uniqName = !!state.contacts.find(
    //     contact => contact.name.toLowerCase() === payload.toLowerCase(),
    //   );
    //   if (uniqName) {
    //     alert(`${payload} is already in contacts`);
    //     return false;
    //   }
    //   return true;
    // }

    case types.FILTER:
      return state.filter(contact =>
        contact.name.toLowerCase().includes(payload.toLowerCase()),
      );

    default:
      return state;
  }
};

const filterState = {
  filter: '',
  filteredContacts: [],
};

const filter = (state = filterState, { type, payload }) => {
  console.log(state);
  switch (type) {
    case types.FILTER:
      return { ...state, filter: payload };

    default:
      return state;
  }
};

export default combineReducers({
  contacts,
  filter,
});
