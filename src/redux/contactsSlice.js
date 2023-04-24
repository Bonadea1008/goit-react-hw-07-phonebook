import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initialContactsState } from './initialState';
import {
  createContactsThunk,
  getContactsThunk,
  deleteContactsThunk,
} from './thunk';

const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};

const arrayOfThunk = [
  createContactsThunk,
  getContactsThunk,
  deleteContactsThunk,
];

const handleStatus = type => arrayOfThunk.map(el => el[type]);

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = '';
};

const handleFulfilledGet = (state, { payload }) => {
  state.items = payload;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilledCreate = (state, { payload }) => {
  state.items.push(payload);
};

const handleFulfilledDelete = (state, { payload }) => {
  state.items = state.items.filter(contact => contact.id !== payload.id);
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  extraReducers: builder => {
    const { PENDING, REJECTED, FULFILLED } = STATUS;
    builder
      .addCase(getContactsThunk.fulfilled, handleFulfilledGet)
      .addCase(createContactsThunk.fulfilled, handleFulfilledCreate)
      .addCase(deleteContactsThunk.fulfilled, handleFulfilledDelete)
      .addMatcher(isAnyOf(...handleStatus(PENDING)), handlePending)
      .addMatcher(isAnyOf(...handleStatus(REJECTED)), handleRejected)
      .addMatcher(isAnyOf(...handleStatus(FULFILLED)), handleFulfilled);
  },
});

// export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
