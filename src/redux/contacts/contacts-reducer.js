import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-actions';

const initialState = [
  { id: 1, name: 'Вася', tel: 111 },
  { id: 2, name: 'Ваня', tel: 222 },
  { id: 3, name: 'Петя', tel: 333 },
];

const contacts = createReducer(initialState, {
  [actions.ADD]: (state, { payload }) => [...state, payload],
  [actions.DELETE]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
  // [actions.UNIQNAME]: state => state,
});

const filter = createReducer('', {
  [actions.FILTER]: (_, action) => action.payload,
});

export default combineReducers({
  contacts,
  filter,
});
