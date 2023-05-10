import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from 'components/slices/Slice';

const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
  },
});

export default store;
