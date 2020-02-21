import React, {useState} from "react";
import './add-counter-element.css'

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

    return(
        <div>
            <span>Add new counter</span>
            <section>
                <input type='text' value={name} placeholder='Name'
                        onChange={(e) => setName(e.target.value)}/>
                <input id='input-value-style' type='text' value={initialValue} placeholder='Initial Value'
                        onChange={(e) => setInitialValue(e.target.value)}/>
                <button onClick={() => onFormSubmit(name, initialValue)}>Add counter</button>
            </section>
        </div>
    );
}

export default AddCounterElement;