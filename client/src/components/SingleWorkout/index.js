import React, { useState, useEffect } from 'react';
import weightWorkService from "../../services/workouts.service.js";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const SingleWorkout = ({ workout }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => {
        setShow(true);
    }

        return (
            <div>
                <div className="text-center mb-3">
                    <Button variant="primary" className="text-center" onClick={handleShow}>
                        {workout.name} - {workout.date_created}
                    </Button>
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{workout.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="mx-auto">
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