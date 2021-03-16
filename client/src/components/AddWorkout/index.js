import React, { useState } from 'react';
import workoutsService from '../../services/workouts.service.js';
import weightWorkService from "../../services/workouts.service.js";

const AddWorkout = () => {
    
    const [workoutState, setWorkoutState] = useState({ name: '', sets: null, reps: null, weight: null, muscle_group: '', user_id: null });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setWorkoutState({
            ...workoutState,
            [name]: value
        });
        console.log(workoutState);
    }

    const handleFormSubmit = async (event) => {
        console.log("Submitted!");
        event.preventDefault();

        /*var data = {
            name: workoutState.name,
            sets: workoutState.sets,
            reps: workoutState.reps,
            weight: workoutState.weight,
            muscle_group: workoutState.muscle_group,
            user_id: workoutState.user_id
        }*/

        weightWorkService.create(workoutState)
            .then( response => {
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <div>
        <form>
            <div class="form-group">
                <label>Wokout Name</label>
                <input type="text" class="form-control" name="name" placeholder="Name of Workout" onChange={handleChange} />
            </div>
            <div class="form-group">
                <label>Muscle Group</label>
                <input type="text" class="form-control" name="muscle_group" placeholder="Muscle Group Targeted" onChange={handleChange} />
            </div>
            <div class="form-group">
                <label>Sets</label>
                <input type="number" class="form-control" name="sets" onChange={handleChange} />
            </div>
            <div class="form-group">
                <label>Reps</label>
                <input type="number" class="form-control" name="reps" onChange={handleChange} />
            </div>
            <div class="form-group">
                <label>Weight</label>
                <input type="number" class="form-control" name="weight" onChange={handleChange} />
            </div>
            <div class="form-group">
                <label>User Id (Temporary)</label>
                <input type="number" class="form-control" name="user_id" onChange={handleChange} />
            </div>

            <button class="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
        </form>
        </div>
    );
};

export default AddWorkout;