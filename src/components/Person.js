import React from 'react';
import PropTypes from 'prop-types'
import './Person.css';

const Person = ({id, photo, name, quote, superlative, deletePerson}) => { 
  return (
    <article key={id} className="card">
      <img src={photo} alt="yearbook" className="person-photo"></img>
      <h3> {name} </h3>
      <p> {quote} </p>
      <h4> {superlative} </h4>
     <button onClick={() => deletePerson(id)}>X</button>
    </article>
    )
}
export default Person;

Person.propTypes = {
  person: PropTypes.object
}