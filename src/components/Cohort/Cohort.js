import React from 'react';
import Person from '../Person/Person';
import PropTypes from 'prop-types'
import './Cohort.css';


const Cohort = ({title, data, deletePerson, updatePerson}) => {

  const mappedPeople = data.map(person => {
    return <Person key={person.id} id={person.id} photo={person.photo} name={person.name} quote={person.quote} superlative={person.superlative} deletePerson={deletePerson} updatePerson={updatePerson}/>
  })

  return (
    <section className="Cohort-container">
      <h2>{title}</h2>
      <div className="card">
        {mappedPeople}
      </div>
    </section>
  )

}

export default Cohort;

Cohort.propTypes = {
  staff: PropTypes.array,
  students: PropTypes.array
}
