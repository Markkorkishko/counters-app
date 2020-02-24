import React, {useState} from "react";
import {Modal, Button} from 'react-bootstrap'

const DeleteModalForm = (props) => {
    const {onCounterDelete, onHandleHide, counterName} = props;

    const [inputedText, setInputedText] = useState('');

    const onDelete = () => {
        if(counterName === inputedText)
            onCounterDelete()
    }

    return (
        <Modal
            {...props}
            aria-labelledby="Check-WhyDoINeedThat"
            centered>

            <Modal.Header /*closeButton*/>
                <Modal.Title id="Check-WhyDoINeedThat" className="font-weight-normal">
                    Enter counter name <strong>{counterName}</strong> to delete it
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <input onChange={(e)=> setInputedText(e.target.value)}/>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={onHandleHide}>Cancel</Button>
                <Button onClick={onDelete}>Delete</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DeleteModalForm;

