import React, { Component } from 'react'

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
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={this.state.name}
          onChange={event => this.handleFormUpdate(event)}
        />
         <input
          type="text"
          placeholder="Quote"
          name="quote"
          value={this.state.quote}
          onChange={event => this.handleFormUpdate(event)}
        />
        <input
          type="text"
          placeholder="Superative"
          name="superlative"
          value={this.state.superlative}
          onChange={event => this.handleFormUpdate(event)}
        />
        <button onClick={event => this.submitPerson(event)}> Add Person </button>
      </form>
    )
  }
}

export default PersonForm