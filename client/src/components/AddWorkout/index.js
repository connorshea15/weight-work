import React, { useState, useEffect } from 'react';
import weightWorkService from "../../services/workouts.service.js";

const AddWorkout = (props) => {

    const {
        workouts,
        setWorkouts
    } = props;
    
    const [workoutState, setWorkoutState] = useState({ name: '', sets: null, reps: null, weight: null, muscle_group: '', notes: '', user_id: null });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setWorkoutState({
            ...workoutState,
            [name]: value
        });
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        setWorkouts([
            ...workouts,
            workoutState
        ]);

        // Create a a new workout
        weightWorkService.create(workoutState)
            .then( response => {
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });

            setWorkoutState({
                name: '', 
                sets: null, 
                reps: null, 
                weight: null,
                muscle_group: '', 
                notes: '', 
                user_id: null 
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
                <label>Notes</label>
                <textarea type="textarea" class="form-control" name="notes" onChange={handleChange} />
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