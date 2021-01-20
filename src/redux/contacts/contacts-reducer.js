import { combineReducers } from 'redux';
import types from './contacts-types';

const initialState = [
  { id: 1, name: 'Вася', tel: 111 },
  { id: 2, name: 'Ваня', tel: 222 },
  { id: 3, name: 'Петя', tel: 333 },
];

const contacts = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [...state, payload];

    case types.DELETE:
      return state.filter(contact => contact.id !== payload);

    case types.UNIQ: {
      return state;
    }

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  contacts,
  filter,
});
