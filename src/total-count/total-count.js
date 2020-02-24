import React from "react";

const TotalCount = ({countersList, onResetTotalCount}) => {
    return(
        <div className='container row h-25 pt-2'>
            <div className='h-100 p-1 mb-2 bg-light text-secondary border-bottom'>Total count</div>
            <span className='h-100 p-1 mb-2 bg-light text-secondary font-weight-bold border-bottom'>{countersList.reduce(((base,elem) => {return  base + elem.counterValue}), 0)}</span>
            <button className='h-100 btn btn-outline-warning btn-sm ml-2 ' onClick={onResetTotalCount}>Reset total count</button>
        </div>
    );
}

export default TotalCount;