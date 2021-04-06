import React, { useState, useEffect } from 'react';
import weightWorkService from "../../services/workouts.service.js";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';


const TheCalendar = () => {
    const daySelect = (event, value) => {
        var newDate = moment(event).format("YYYY-MM-DD");
        console.log(newDate);
        var id = 1;
        // array to hold the workouts from today
        var todaysWorkouts = [];
        weightWorkService.getMyWorkouts(id)
        .then(response => {
            response.data.map(workout => {
                if (workout.date_created === newDate) {
                    todaysWorkouts.push(workout);
                }
            });
            console.log(todaysWorkouts);
        })
        .catch(e => {
          console.log(e);
        });
    }

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