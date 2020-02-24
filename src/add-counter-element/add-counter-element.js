import React, {useState} from "react";

const AddCounterElement = ({onAddFormSubmit}) => {
    const [name, setName] = useState('');
    const [initialValue, setInitialValue] = useState('');

    const onFormSubmit = (name, initialValue) =>{
        let tempName = '';
        let tempInitialValue = '';
        (name !== '') ? tempName = name : tempName = 'Unnamed';
        !isNaN(initialValue) ? tempInitialValue = initialValue : tempInitialValue = 0;
        onAddFormSubmit(tempName, tempInitialValue);
        setName('');
        setInitialValue('');
    };

    return (
        <div>
            <hr/>
            <span className='text-secondary'>Add new counter</span>
            <div className='container row w-75'>
                    <input type='text' value={name} placeholder='Name'
                           className='input-group w-auto m-1 pl-1'
                           onChange={(e) => setName(e.target.value)}/>
                    <input type='text' value={initialValue} placeholder='Initial Value'
                           className='input-group w-25 m-1 pl-1'
                           onChange={(e) => setInitialValue(e.target.value)}/>
                    <button className='btn btn-outline-success btn-sm m-1' onClick={() => onFormSubmit(name, initialValue)}>Add
                        counter
                    </button>
            </div>
        </div>
    );
}

export default AddCounterElement;