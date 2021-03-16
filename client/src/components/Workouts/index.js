import React, { useState } from 'react';
import weightWorkService from "../../services/workouts.service.js";

const Workouts = ({workouts}) => {

    //const [state, setState] = useState({ loading: true });
    console.log(workouts);

    const id = 1;
    var workouts = [];

    // I really need to figure out how to set states without re rendering into eternity
    weightWorkService.getMyWorkouts(id)
    .then(response => {
       /* setUser({
        id: response.data.id,
        username: response.data.username,
        weight: response.data.weight
      })*/
      //console.log("workouts:   " + response.data[0].name);
      workouts = response.data;
      setState({
          loading: false
      });
      loading = false;
      //console.log("workouts:   " + workouts[0].name);
    })
    .catch(e => {
      console.log(e);
    });



    return (
        <div>
            {workouts &&
                workouts.map(workout => {
                    <h3>{workout.name}</h3>
                })
            }
        </div>
    )
};

export default Workouts;