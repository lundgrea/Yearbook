import React, { Component } from 'react';
import Person from './Person';
import people from '../data/yearbook-data.js';
import './Cohort.css';

class Cohort extends Component {
  constructor() {
    super();
    this.state = {}
  }

  mappedPeople = (type) => {
    return this.props[type].map(person => {
      return (<Person person={person}/>)
    })
  }

  render() {
  return (
    <section className="cohort-container">
      {this.mappedPeople('staff')}
      {this.mappedPeople('students')}
    </section>
  )
  }

}

export default Cohort;
