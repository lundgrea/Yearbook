import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Person.css';

// const Person = ({id, photo, name, quote, superlative, deletePerson}) => { 
//   return (
//     <article>
//       <img src={photo} alt="yearbook" className="person-photo"></img>
//       <h3> {name} </h3>
//       <p> {quote} </p>
//       <h4> {superlative} </h4>
//       <button onClick={() => deletePerson(id)}>X</button>
//     </article>
//     )
// }

class Person extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {id, photo, name, quote, superlative, deletePerson} = this.props.person
    return (
    <article key={id}>
      <img src={photo} alt="yearbook" className="person-photo"></img>
      <h3> {name} </h3>
      <p> {quote} </p>
      <h4> {superlative} </h4>
      <button onClick={() => deletePerson(id)}>X</button>
    </article>
    )
}
}

export default Person;

Person.propTypes = {
  person: PropTypes.object
}