import React, { useState, useEffect } from 'react';
import weightWorkService from "../../services/workouts.service.js";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const SingleWorkout = (props) => {

    const {
        workoutName,
        id
    } = props;

    const [workout, setWorkout] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setIsLoading(true);
        setShow(false);
    }
    const handleShow = () => {
        fetchWorkout();
        setShow(true);
    }

        const fetchWorkout = () => {
            if (isLoading) {
                weightWorkService.getSingleWorkout(id)
                .then(response => {
                  setWorkout(response.data);
                  setIsLoading(false);
                  console.log(response.data.date_created);
                })
                .catch(e => {
                  console.log(e);
                });
            }

        };

        return (
            <div>
            <div className="text-center mb-3">
                <Button variant="primary" className="text-center" onClick={handleShow}>
                    {workoutName}
                </Button>
            </div>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{workoutName}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="mx-auto">
                            <h4>Workout</h4>
                            {workout.name}
                            <h4>Date</h4>
                            {workout.date_created}
                            <h4>Sets: {workout.sets}</h4>
                            <h4>Reps: {workout.reps}</h4>
                            <h4>Weight: {workout.weight}</h4>
                            <h4>Notes</h4>
                            {workout.notes}
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
    </div>
        )

};

export default SingleWorkout;