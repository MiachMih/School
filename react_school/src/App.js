import React, {Component} from 'react';
import Students from './Students.js';
import Teachers from './Teachers.js';
import Subjects from './Subjects.js';
import Grades from './Grades.js';
import Nav from './Nav.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component{
  constructor(){
    super()
    this.state = {

    }
  }

  render(){
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component = {Students}/>
            <Route path="/students" exact component = {Students}/>
            <Route path="/teachers" exact component = {Teachers}/>
            <Route path="/subjects" exact component = {Subjects}/>
            <Route path="/grades" exact component = {Grades}/>
          </Switch>
        </div>
      </Router>
  )
  }
}

export default App;
