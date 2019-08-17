import React, { Component } from 'react';
import Cohort from '../Cohort/Cohort';
import people from '../../data/yearbook-data.js';
import PersonForm from '../PersonForm/PersonForm';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: people.staff,
      students: people.students
    }
  }

  addNewPerson = (newPerson) => {
    this.setState({students: [...this.state.students, newPerson]})
  }

  deletePerson = (id) => {
    const filteredStaff = this.state.staff.filter(person => person.id !== id)
    this.setState({ staff: filteredStaff})
    const filteredStudents = this.state.students.filter(student => student.id !== id)
    this.setState({ students: filteredStudents})
  }

  updatePerson = (event) => {
    console.log('in the update method')
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    return (
      <main className="App">
        <header className="App-header">
          <img className="App-header-logo" alt="Turing Logo" height="100px" width="100px" src="https://d682ma8ami8n4.cloudfront.net/images/TuringSchool_LogoMark_Gray.png"/>
          <h1>TURING YEARBOOK</h1>
        <PersonForm className="form" addNewPerson={this.addNewPerson}/>
        </header>
        <Cohort title="Staff" data={this.state.staff} deletePerson={this.deletePerson} updatePerson={this.updatePerson} />
        <Cohort title="Students" data={this.state.students} deletePerson={this.deletePerson} updatePerson={this.updatePerson}/>
      </main>
    );
  }
}

export default App;
