import React, { Component } from 'react';
import Person from './Person';
import PropTypes from 'prop-types'
import './Cohort.css';

class Cohort extends Component {
  constructor() {
    super();
    this.state = {}
  }

  mappedPeople = (type) => {
    return this.props[type].map(person => {
      return (<Person person={person} deletePerson={this.props.deletePerson}/>)
    })
  }

  render() {
    return (
      <section className="cohort-container">
        <h2>staff</h2>
        {this.mappedPeople('staff')}
        <h2>students</h2>
        {this.mappedPeople('students')}
      </section>
  )
  }

}

export default Cohort;

Cohort.propTypes = {
  staff: PropTypes.array,
  students: PropTypes.array
}
