import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useState } from 'react';

import { addContacts } from 'components/slices/Slice';
const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  const [name, setName] = useState(``);
  const [number, setNumber] = useState(``);
  const handleSubmit = event => {
    event.preventDefault();
    const existingNames = contacts.map(contact => contact.name.toLowerCase());
    if (
      existingNames.some(existingName => existingName === name.toLowerCase())
    ) {
      alert(`${name} is already in contacts`);
      setName('');
      setNumber('');
      return;
    }
    dispatch(addContacts({ name: name, number: number }));
    setName('');
    setNumber('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>{' '}
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={event => setName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="number">Number:</label>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={event => setNumber(event.target.value)}
          />
        </div>
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};
export default ContactForm;
