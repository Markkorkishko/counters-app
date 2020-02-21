import React from "react";
import CountersItem from "../counters-item/counters-item";
import './counters.css';

const Counters = ({countersList, counterDecrement, counterIncrement, onCounterReset, onCounterDelete}) => {
    const blockOfCounters = countersList.map((el)=> {
        return (
        <li key={el.id}>
            <CountersItem counterName={el.counterName}
                          counterValue={el.counterValue}
                          counterDecrement={() => counterDecrement(el.id)}
                          counterIncrement={() => counterIncrement(el.id)}
                          onCounterReset={() => onCounterReset(el.id)}
                          onCounterDelete={() => {onCounterDelete(el.id)}}/>
        </li>
        );
    });
    return(
        <div>
            <span>Counters</span>
            <ul>
                {blockOfCounters}
            </ul>
        </div>
    );
}

export default Counters;
