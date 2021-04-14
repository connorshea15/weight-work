import React, { useState, useEffect } from 'react';
import weightWorkService from "../../services/workouts.service.js";
import SingleWorkout from '../SingleWorkout';

const Workouts = ({ workouts }) => {

        return (
            <div>
                {workouts &&
                    workouts.map(workout => (
                        <SingleWorkout
                            workout={workout}
                        ></SingleWorkout>
                    ))
                }
            </div>
        )
};

export default Workouts;