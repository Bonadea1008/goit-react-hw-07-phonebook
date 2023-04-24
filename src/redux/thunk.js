import {
  getContacts,
  createContacts,
  deleteContacts,
} from 'components/Services/contactsAPI';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getContactsThunk = createAsyncThunk('contacts/fetchAll', () =>
  getContacts()
);

export const createContactsThunk = createAsyncThunk(
  'contacts/addContact',
  data => createContacts(data)
);

export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContact',
  id => deleteContacts(id)
);
