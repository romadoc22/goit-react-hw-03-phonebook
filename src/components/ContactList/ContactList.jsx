import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <li key={id} className={css.item}>
          <p>
            {name}: {number}
          </p>
          <button
            className="delete__btn"
            type="button"
            onClick={() => onDelete(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
