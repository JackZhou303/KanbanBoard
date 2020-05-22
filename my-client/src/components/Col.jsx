import React from "react";

const Col = ({ isOver, children }) => {
    //const className = isOver ? " highlight-region" : "";

    return (
        <div className='col'>
            {children}
        </div>
    );
};

export default Col;