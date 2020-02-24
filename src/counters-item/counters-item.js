import React from "react";
import DeleteModalButton from "../delete-modal-button";

const CountersItem = ({counterName, counterValue, counterDecrement,
                          counterIncrement, onCounterReset, onCounterDelete}) => {
    return(
        <div className='card'>
            <div className='card-body w-50'>
                <article>{counterName}</article>
                <button className='btn btn-primary btn-sm' onClick={counterDecrement}>-</button>
                <span className='badge badge-light'>{counterValue}</span>
                <button className='btn btn-primary btn-sm' onClick={counterIncrement}>+</button>
                <button className='btn btn-secondary btn-sm' onClick={onCounterReset}>Reset {counterName}</button>
                <DeleteModalButton onCounterDelete={onCounterDelete}
                                   counterName={counterName}/>

            </div>
        </div>
    )
}

export default CountersItem;