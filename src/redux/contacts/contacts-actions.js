import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const ADD = createAction('contacts/add', (name, tel) => ({
  payload: {
    id: uuidv4(),
    name,
    tel,
  },
}));
const DELETE = createAction('contacts/delete');
const FILTER = createAction('contacts/filter');
const UNIQNAME = createAction('contacts/uniqName');

export default { ADD, DELETE, FILTER, UNIQNAME };
