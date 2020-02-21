import React from "react";
import './total-count.css';

const TotalCount = ({countersList, onResetTotalCount}) => {
    return(
        <div id='total-count-style'>
            <span>Total count</span>
            <article>{countersList.reduce(((base,elem) => {return  base + elem.counterValue}), 0)}</article>
            <button onClick={onResetTotalCount}>Reset total count</button>
        </div>
    );
}

export default TotalCount;