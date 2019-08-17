import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PersonForm.css';


class PersonForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      quote: '',
      superlative: '',
      image: ''
    };
  }

  handleFormUpdate = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  submitPerson = (event) => {
    event.preventDefault();
    this.props.addNewPerson(this.state);
    this.setState({name: '', quote: '', superlative: '', image: ''})
  }

  render() {
    return (
      <form>
      <h3> Add New Student To The Yearbook</h3>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={this.state.name}
          onChange={event => this.handleFormUpdate(event)}
          className="input-name"
        />
         <input
          type="text"
          placeholder="Quote"
          name="quote"
          value={this.state.quote}
          onChange={event => this.handleFormUpdate(event)}
          className="input-quote"
        />
        <input
          type="text"
          placeholder="Superative"
          name="superlative"
          value={this.state.superlative}
          onChange={event => this.handleFormUpdate(event)}
          className="input-superlative"

        />
        <button className="add-button" onClick={event => this.submitPerson(event)}> Add Person </button>
      </form>
    )
  }
}

export default PersonForm

PersonForm.propTypes = {
addNewPerson: PropTypes.func
}