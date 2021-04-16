import React, { useState, useEffect } from 'react';
import weightWorkService from "../../services/workouts.service.js";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Workouts from '../Workouts';
import Graph from '../Graph'


const AllSingleWorkouts = (props) => {

    const {
        workouts,
        name
    } = props;

    console.log("workouts:   " + workouts);

    const [show2, setShow2] = useState(false);

    var theseWorkouts = [];

    workouts.map(workout => {
        console.log(workout);
        if (workout.name === name) {
            theseWorkouts.push(workout);
        }
    });

    console.log(theseWorkouts);

    const handleShow2 = () => {
        setShow2(true);
    }

    const handleClose2 = () => {
        setShow2(false);
    }

        return (
            <div>
                <div className="text-center mb-3">
                    <Button variant="primary" className="text-center" onClick={handleShow2}>
                        {name}
                    </Button>
                </div>
                <Modal show={show2} onHide={handleClose2}>
                    <Modal.Header closeButton>
                        <Modal.Title>{name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="mx-auto">
                            <Graph workouts={theseWorkouts}></Graph>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose2}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
    </div>
        )

};

export default AllSingleWorkouts;