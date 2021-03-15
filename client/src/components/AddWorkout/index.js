import React, { useState } from 'react';
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

    /*handleFormSubmit = async (event) => {
        event.preventDefault();
    }*/

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

            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        </div>
    );
};

export default AddWorkout;