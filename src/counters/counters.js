import React from "react";
import CountersItem from "../counters-item/counters-item";

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
        <div className='mt-3'>
            <div className='text-secondary'>Counters</div>
            <ul>
                {blockOfCounters}
            </ul>
        </div>
    );
}

export default Counters;
