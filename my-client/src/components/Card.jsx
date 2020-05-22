import React from 'react'
import ItemTypes from './ItemTypes'
import { useDrag } from 'react-dnd'

function Card(props) {

  const close=()=>{
     let tab=document.getElementById(props.id);
     console.log(tab);
     tab.style.display="none"
  }

  const [{isDragging}, drag] = useDrag({
    item: { type: ItemTypes.CARD, category: props.category, ...props.item },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

console.log(props.id)

return <div ref={drag} className="card" id={props.id}>
  {props.item.content}
  {props.category !=="rw" ? <span className="close" onClick={close}>x</span>:" "}
  </div>
 
}

export default Card
