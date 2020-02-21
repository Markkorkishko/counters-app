import React, {useState} from 'react';
import Counters from "../counters/counters";
import AddCounterElement from "../add-counter-element/add-counter-element";
import TotalCount from "../total-count/total-count";
import './app.css'

function App() {

    const [countersArr, setCountersArr] = useState([]);

    const onResetTotalCount = () => {
        const tempCountersArray = countersArr.map((el) => ({...el, counterValue: 0}));
        setCountersArr(tempCountersArray);
    };

    const counterDecrement = (id) => {
        const counterIndex = countersArr.findIndex((el) => el.id === id);
        const tempCountersArray = [...countersArr];
        if (tempCountersArray[counterIndex].counterValue>0)
            tempCountersArray[counterIndex].counterValue -= 1;
        setCountersArr(tempCountersArray);
    };

    const counterIncrement = (id) => {
        const counterIndex = countersArr.findIndex((el) => el.id === id);
        const tempCountersArray = [...countersArr];
        tempCountersArray[counterIndex].counterValue += 1;
        setCountersArr(tempCountersArray);
    };

    const onCounterReset = (id) => {
        const counterIndex = countersArr.findIndex((el) => el.id === id);
        const tempCountersArray = [...countersArr];
        tempCountersArray[counterIndex].counterValue = 0;
        setCountersArr(tempCountersArray);
    };

    const onCounterDelete = (id) => {
        const counterIndex = countersArr.findIndex((el) => el.id === id);
        const tempCountersArray = [
            ...countersArr.slice(0, counterIndex),
            ...countersArr.slice(counterIndex +1),];
        setCountersArr(tempCountersArray);
    };

    const onAddFormSubmit = (name, initialValue) => {
        const tempCountersArray = [...countersArr];
        tempCountersArray.push({
            id: Math.random(),
            counterName: name,
            counterValue: Number(initialValue)
        });
        setCountersArr(tempCountersArray);
    };

    return (
        <div id='app-div-style'>
            <TotalCount         countersList={countersArr}
                                onResetTotalCount={onResetTotalCount}/>

            <Counters           countersList={countersArr}
                                counterDecrement={counterDecrement}
                                counterIncrement={counterIncrement}
                                onCounterReset={onCounterReset}
                                onCounterDelete={onCounterDelete}/>

            <AddCounterElement  onAddFormSubmit={onAddFormSubmit}/>
        </div>
    );
}

export default App;
