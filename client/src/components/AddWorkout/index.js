import React, { useState, useEffect } from 'react';
import weightWorkService from "../../services/workouts.service.js";
import moment from 'moment';

const AddWorkout = (props) => {

    const {
        workouts,
        setWorkouts
    } = props;
    
    const uniqueWorkouts = [];

    workouts.map(workout => {
        if (!uniqueWorkouts.includes(workout.name)) {
            uniqueWorkouts.push(workout.name);
        }
    });

    const [workoutState, setWorkoutState] = useState({ name: '', sets: null, reps: null, weight: null, muscle_group: '', notes: '', user_id: null, date_created: '' });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setWorkoutState({
            ...workoutState,
            [name]: value,
            date_created: moment().format("YYYY-MM-DD")
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

    useEffect(() => {
        console.log("workout state here!:   "+ workouts);
    }, [workouts]);

    return (
        <div>
        <form autocomplete="off">
            <div class="form-group">
                <label>Workout Name</label>
                <input type="text" class="form-control" name="name" placeholder="Name of Workout" list="suggestions" onChange={handleChange} />
                <datalist id="suggestions">
                    {uniqueWorkouts &&
                        uniqueWorkouts.map(workout => (
                            <option>{workout}</option>
                        ))
                    }
                </datalist>
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