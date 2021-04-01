import React, { useState, useEffect } from 'react';
import weightWorkService from "../../services/workouts.service.js";
import SingleWorkout from '../SingleWorkout';

const Workouts = () => {

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