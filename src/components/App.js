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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Turing Yearbook</h1>
        </header>
        <PersonForm addNewPerson={this.addNewPerson}/>
        <Cohort staff={this.state.staff} students={this.state.students} />
      </div>
    );
  }
}

export default App;
