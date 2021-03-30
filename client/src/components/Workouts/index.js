import React, { useState, useEffect } from 'react';
import weightWorkService from "../../services/workouts.service.js";

const Workouts = () => {

    const [workouts, setWorkouts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    var workoutsVariable = [];
    const id = 1;


        const fetchWorkouts = () => {
            if (isLoading) {
                weightWorkService.getMyWorkouts(id)
                .then(response => {
                  workoutsVariable = response.data;
                  /*response.data.map(workout => {
                      console.log(workout.id);
                      setWorkouts([
                          ...workouts,
                          {
                              id: workout.id,
                              name: workout.name,
                              date_created: workout.date_created,
                          }
                      ]);
                  });*/
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
            console.log("isLoading:    " + isLoading);
            console.log("state:   " + workouts);
        }, [isLoading]);

        //fetchWorkouts();

        
    // I really need to figure out how to set states without re rendering into eternity
        /*weightWorkService.getMyWorkouts(id)
        .then(response => {
          workouts = response.data;
            setState({
                loading: false
            });
        })
        .catch(e => {
          console.log(e);
        });*/

        /*workouts.map(workout => {
            <h3>{workout.name}</h3>


        })*/
        /*{isLoading ? <div>loading...</div> :
            <div>
                {workouts.map(workout => {
                    workout.name
                })}
            </div>
            }*/


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