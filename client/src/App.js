import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from 'react-router-dom';
import weightWorkService from "./services/workouts.service.js";
import AddWorkout from './components/AddWorkout';
import Workouts from './components/Workouts';
import TheCalendar from './components/Calendar';
import Nav from './components/Nav';

function App() {

  const [sections] = useState(['My Workouts', 'Calendar', 'Add Workout']);

  const [currentSection, setCurrentSection] = useState(sections[0]);

  const initialUserState = {
    id: null,
    username: "",
    weight: 0
  };

  const [user, setUser] = useState(initialUserState);

 /*weightWorkService.getAll()
    .then(response => {
      setUser({
        id: response.data.id,
        username: response.data.username,
        weight: response.data.weight
      })
      //console.log("user:   " + response.data[0].username);
    })
    .catch(e => {
      console.log(e);
    });*/

  return (
    <div className="App">
      <Nav
          sections={sections}
          setCurrentSection={setCurrentSection}
          currentSection={currentSection}
      >
      </Nav>
      {currentSection === 'My Workouts' ? (
          <Workouts></Workouts>
          
        ) : currentSection === 'Calendar' ? (
          <TheCalendar></TheCalendar>
        ) : (
          <AddWorkout></AddWorkout>
        )}
    </div>
  );
}

export default App;
