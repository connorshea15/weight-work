import React, { useState, useEffect } from 'react';
import weightWorkService from "../../services/workouts.service.js";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';


const TheCalendar = ({ workouts }) => {

    const daySelect = (event, value) => {
        var newDate = moment(event).format("YYYY-MM-DD");
        var id = 1;
        // array to hold the workouts from today
        var todaysWorkouts = [];
        workouts.map(workout => {
            if (workout.date_created === newDate) {
                todaysWorkouts.push(workout);
            }
        });
        console.log(todaysWorkouts);
    };

    return (
        <div>
            <Calendar
                onChange={daySelect}
            >
            </Calendar>
        </div>
    );

};

export default TheCalendar;