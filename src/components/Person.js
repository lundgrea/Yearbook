import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Person.css';

class Person extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {photo, name, quote, superlative} = this.props.person
    return (
    <article>
      <img alt="yearbook photo" className="person-photo" src={photo}/> 
      <h3> {name} </h3>
      <p> {quote} </p>
      <h4> {superlative} </h4>
    </article>
    )
}
}

export default Person;

Person.propTypes = {
  person: PropTypes.object
}