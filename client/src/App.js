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
import WorkoutList from './components/WorkoutList';

function App() {

  const [sections] = useState(['My Workouts', 'Calendar', 'Add Workout']);

  const [currentSection, setCurrentSection] = useState(sections[0]);

  const [workouts, setWorkouts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const id = 1;

      const fetchWorkouts = () => {
          if (isLoading) {
              weightWorkService.getMyWorkouts(id)
              .then(response => {
                setWorkouts([...response.data]);
                setIsLoading(false);
                console.log(response.data[0].id);
              })
              .catch(e => {
                console.log(e);
              });
          }
      };

      useEffect(() => {
        fetchWorkouts();
    }, [isLoading]);

  /*const initialUserState = {
    id: null,
    username: "",
    weight: 0
  };

  const [user, setUser] = useState(initialUserState);*/

  return (
    <div className="App">
      <Nav
          sections={sections}
          setCurrentSection={setCurrentSection}
          currentSection={currentSection}
      >
      </Nav>
      {currentSection === 'My Workouts' ? (
        <div>
          <WorkoutList
            workouts={workouts}
          >
          </WorkoutList>
          </div>
          
        ) : currentSection === 'Calendar' ? (
          <TheCalendar
            workouts={workouts}
          ></TheCalendar>
        ) : (
          <AddWorkout
          workouts={workouts}
          setWorkouts={setWorkouts}
          ></AddWorkout>
        )}
    </div>
  );
}

export default App;
