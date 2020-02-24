import React, {useState} from "react";
import DeleteModalForm from "../delete-modal-form";
import {Button} from "react-bootstrap";

const DeleteModalButton = ({onCounterDelete, counterName}) => {

    const [addModalShow, setAddModalShow]= useState(false);

    return (
            <div className='float-right'>
                <Button className='btn btn-danger btn-sm'
                        onClick={() => setAddModalShow(true)}>
                    Delete
                </Button>
                <DeleteModalForm
                    counterName={counterName}
                    show = {addModalShow}
                    onCounterDelete={onCounterDelete}
                    onHandleHide = {() => setAddModalShow(false)}/>
                    {/*Чтобы закрыть окно кликнув в любое поле вне окна - переименуй prop onHandleHide в onHide*/}
            </div>
    );
}

export default DeleteModalButton;