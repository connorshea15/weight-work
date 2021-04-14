import React, { useState, useEffect } from 'react';
import weightWorkService from "../../services/workouts.service.js";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Workouts from '../Workouts';
import AllSingleWorkouts from '../AllSingleWorkouts'


const WorkoutList = ({ workouts }) => {

    const uniqueWorkouts = [];

    workouts.map(workout => {
        if (!uniqueWorkouts.includes(workout.name)) {
            uniqueWorkouts.push(workout.name);
        }
    });

    
    
            return (
                <div>
                    {uniqueWorkouts &&
                        uniqueWorkouts.map(name => (
                            <AllSingleWorkouts
                                workouts={workouts}
                                name={name}
                            ></AllSingleWorkouts>
                        ))
                    }
                </div>
            )
};

export default WorkoutList;