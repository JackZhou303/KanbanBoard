import React from "react";
import { useDrop } from "react-dnd";
import ITEM_TYPE from "./ItemTypes";

const DropWrapper = ({ onDrop, children, category }) => {
    const [{ isOver }, drop] = useDrop({
        accept: ITEM_TYPE.CARD,

        drop: (item, monitor) => {
            onDrop(item, monitor, category);
        },

        collect: monitor => ({
            isOver: monitor.isOver()
        })
    });

    return (
        <div ref={drop} className={"drop-wrapper"}>
            {React.cloneElement(children, { isOver })}
        </div>
    )
};

export default DropWrapper;