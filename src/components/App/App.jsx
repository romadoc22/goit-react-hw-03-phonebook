import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import css from 'components/App/App.module.css'

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  };

  addContact = (data) => {
    const { contacts } = this.state;
    const newContact = {
      ...data,
      id: nanoid()
    };
    
    this.setState((prevState) => {
      return {contacts: [...prevState.contacts, newContact]}
    });

    if (contacts.find(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
  };

  deleteContact = (id) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter((contact) => contact.id !== id),
      };
    });
  };

  handleChangeInFilter = (e) => {
    this.setState({filter: e.target.value})
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact => 
      contact.name.toLowerCase().includes(filter.toLowerCase()));
  };

  render() {
    const { filter } = this.state;
    return (
      <div className={css.container}>        
          <h1>Phonebook</h1>         
          <ContactForm onAddContact={this.addContact} />        
          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.handleChangeInFilter}/>
          <ContactList contacts={this.getFilteredContacts()} onDelete={this.deleteContact} />        
      </div>
    );
  };
};

export default App;