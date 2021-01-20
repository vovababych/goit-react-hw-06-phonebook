import types from './contacts-types';
import { v4 as uuidv4 } from 'uuid';

export const addContact = (name, tel) => ({
  type: types.ADD,
  payload: {
    id: uuidv4(),
    name,
    tel,
  },
});

export const deleteContact = id => ({
  type: types.DELETE,
  payload: id,
});

export const filterContacts = text => ({
  type: types.FILTER,
  payload: text,
});

export const handlerUniqName = name => ({
  type: 'contacts/uniqName',
  payload: name,
});
