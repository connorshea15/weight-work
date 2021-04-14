import React, { useState, useEffect } from 'react';
import weightWorkService from "../../services/workouts.service.js";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Workouts from '../Workouts';


const SingleDay = (props) => {

    const {
        todaysWorkouts,
        show,
        setShow,
        date
    } = props;

    const handleClose = () => {
        setShow(false);
    }

        return (
            <div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{date}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="mx-auto">
                            {todaysWorkouts.length > 0 
                                ? <Workouts workouts={todaysWorkouts}></Workouts>
                                : <h3>You were a lazy piece of garbage on this day!</h3>
                            }
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

export default SingleDay;