import React from "react";
import './counters-item.css'

const CountersItem = ({counterName, counterValue, counterDecrement,
                          counterIncrement, onCounterReset, onCounterDelete}) => {
    return(
        <div>
            <article id='name-style'>{counterName}</article>
            <button className="small-buttons" onClick={counterDecrement}>-</button>
            <article>{counterValue}</article>
            <button className="small-buttons" onClick={counterIncrement}>+</button>
            <button id='reset-button-style' onClick={onCounterReset}>Reset {counterName}</button>
            <button id='delete-button' onClick={onCounterDelete}>Delete</button>
        </div>
    )
}

export default CountersItem;