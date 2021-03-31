import React, { useState, useEffect } from 'react';
import weightWorkService from "../../services/workouts.service.js";

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
                        <p>{workout.name}</p>
                    ))
                }
            </div>
        )

};

export default Workouts;