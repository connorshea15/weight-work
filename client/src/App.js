import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from 'react-router-dom';
import weightWorkService from "./services/workouts.service.js";
import AddWorkout from './components/AddWorkout';
import Workouts from './components/Workouts';

function App() {

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
      <AddWorkout></AddWorkout>
      <Workouts></Workouts>
    </div>
  );
}

export default App;
