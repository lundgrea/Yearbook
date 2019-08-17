import React from 'react';
import PropTypes from 'prop-types'
import './Person.css';

const Person = ({id, photo, name, quote, superlative, deletePerson, updatePerson}) => { 
  return (
    <article key={id} className="card">
      <img src={photo} alt="yearbook" className="person-photo"></img>
      <h3 contentEditable="true" suppressContentEditableWarning={true} onChange={(event) => updatePerson(event)}> {name} </h3>
      <p contentEditable="true" suppressContentEditableWarning={true}> {quote} </p>
      <h4 contentEditable="true" suppressContentEditableWarning={true}> {superlative} </h4>
     <button onClick={() => deletePerson(id)}>X</button>
    </article>
    )
}
export default Person;

Person.propTypes = {
  person: PropTypes.object
}