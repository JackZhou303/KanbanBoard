import React from "react";

const Col = ({ isOver, children }) => {

    return (
        <div className='col'>
            {children}
        </div>
    );
};

export default Col;