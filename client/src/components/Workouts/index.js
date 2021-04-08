import React, { useState, useEffect } from 'react';
import weightWorkService from "../../services/workouts.service.js";
import SingleWorkout from '../SingleWorkout';

const Workouts = ({ workouts }) => {

        return (
            <div>
                {workouts &&
                    workouts.map(workout => (
                        <SingleWorkout
                            workoutName={workout.name}
                            id={workout.id}
                        ></SingleWorkout>
                    ))
                }
            </div>
        )

};

export default Workouts;