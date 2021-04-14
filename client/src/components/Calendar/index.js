import React, { useState, useEffect } from 'react';
import weightWorkService from "../../services/workouts.service.js";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import SingleDay from '../SingleDay';

const TheCalendar = ({ workouts }) => {

    // I need to get a list of all unique dates of my workouts to compare it against dates on the calendar to mark dates with workouts in them
    var dateList = [];

    workouts.map(workout => {
        if (!dateList.includes(workout.date_created)) {
            dateList.push(workout.date_created);
        }
    });

    console.log("dateList:   " + dateList);

    const [date, setDate] = useState();
    const [todaysWorkouts, setTodaysWorkouts] = useState();

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        setTodaysWorkouts([]);
    }
    const handleShow = () => {
        setShow(true);
    }

    const daySelect = (event, value) => {
        setDate(moment(event).format("YYYY-MM-DD"))
        setShow(true)
    };

    // we are going to put a marker on the date tiles that have workouts in them
    const decorateDays = ({ activeStartDate, date, view }) => {
        let currentDate = moment(date).format("YYYY-MM-DD")
        if (dateList.includes(currentDate)) {
            return <p>o</p>
        } else return <p>x</p>
    };

    // I am using useeffect here because of the async nature of setState so, once my date state is set, I can compare it against
    // my workouts and add them to an array, which I then set my todaysworkout state to
    // I iterate and push the workouts to an array and then to my state again because of setStates async shinanegans
    useEffect(() => {
        var todaysWorkoutsArr = [];
        workouts.map(workout => {
            if (workout.date_created === date) {
                todaysWorkoutsArr.push(workout);
            }
        });
        setTodaysWorkouts(todaysWorkoutsArr);
    }, [date]);

    return (
        <div>
            <Calendar
                onChange={daySelect}
                tileContent={decorateDays}
            >
            </Calendar>
            {show > 0 &&
                <SingleDay
                    todaysWorkouts={todaysWorkouts}
                    show={show}
                    setShow={setShow}
                    date={date}
                >
                </SingleDay>
            }

        </div>
    );

};

export default TheCalendar;