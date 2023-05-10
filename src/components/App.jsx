import { Provider } from 'react-redux';
import store from 'store';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export const App = () => {
  return (
    <Provider store={store}>
      <div
        style={{
          height: '100vh',
          display: 'block',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          padding: 20,
          textAlign: 'center',
        }}
      >
        <ContactForm />
        <Filter />
        <ContactList />
      </div>
    </Provider>
  );
};
