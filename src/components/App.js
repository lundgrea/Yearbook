import React, { Component } from 'react';
import Cohort from './Cohort';
import people from '../data/yearbook-data.js';
import PersonForm from './PersonForm';
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
    console.log('inside the delete method')
    const filteredStaff = this.state.staff.filter(person => person.id !== id)
    this.setState({ staff: filteredStaff})
    const filteredStudents = this.state.students.filter(student => student.id !== id)
    this.setState({ students: filteredStudents})
  }

  render() {
    return (
      <main className="App">
        <header className="App-header">
          <h1>Turing Yearbook</h1>
        </header>
        <PersonForm addNewPerson={this.addNewPerson}/>
        <Cohort title="Staff" data={this.state.staff} deletePerson={this.deletePerson} />
        <Cohort title="Students" data={this.state.students} deletePerson={this.deletePerson}/>
      </main>
    );
  }
}

export default App;
