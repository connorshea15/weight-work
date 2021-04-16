import React, { useEffect, useState, useRef } from 'react'
import Chart from "chart.js/auto";
import moment from "moment";
//import classes from "./LineGraph.module.css";

const Graph = ({ workouts }) => {
    const chartRef = useRef(null);
    const [chartInstance, setChartInstance] = useState(null);

    const dates = [];
    const data = [];

    workouts.map(workout => {
        let date = moment(workout.date_created).format("MMM, Do")
        dates.push(date);
        data.push(workout.weight);
    })

    console.log("dates:    " + dates);
    console.log("data:    " + data);

    useEffect(() => {
        let newChartInstance = new Chart(chartRef.current, {
            type: "line",
            data: {
                //Bring in data
                labels: dates,
                datasets: [
                    {
                        label: `${workouts[0].name}`,
                        data: data,
                    }
                ]
            },
            options: {
                //Customize chart options
            }
        });
        setChartInstance(newChartInstance);
    }, [chartRef]);
        
        return (
            <div>
                    <canvas
                        id="myChart"
                        ref={chartRef}
                    />
        </div>
        )

};

export default Graph;