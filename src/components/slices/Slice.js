// import { configureStore } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

// const persistConfig = {
//   key: 'root',
//   storage,
//   version: 1,
//   //   blacklist: ['filter'],
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   },
//   reducers: {
//     addContacts: (state, action) => {
//       const newContact = { ...action.payload, id: nanoid() };
//       console.log(action.payload);
//       state.contacts.push(newContact);
//     },
//     removeContacts: (state, action) => {
//       state.contacts = state.contacts.filter(
//         contact => contact.id !== action.payload
//       );
//     },
//     filterContacts: (state, action) => {
//       state.filter = action.payload;
//     },
//   },
// });

// const persistedReducer = persistReducer(persistConfig, contactsSlice.reducer);

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware(getDefaultMiddleware) {
//     return getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     });
//   },
// });

// const persistor = persistStore(store);

// export { store, persistor, contactsSlice };
// export const { addContacts, removeContacts, filterContacts } =
//   contactsSlice.actions;
import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  },
  reducers: {
    addContacts: (state, action) => {
      const newContact = { ...action.payload, id: nanoid() };
      console.log(action.payload);
      state.contacts.push(newContact);
    },
    removeContacts: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    filterContacts: (state, action) => {
      state.filter = action.payload;
    },
  },
});

const store = configureStore({
  reducer: contactsSlice.reducer,
});

export { store, contactsSlice };
export const { addContacts, removeContacts, filterContacts } =
  contactsSlice.actions;
