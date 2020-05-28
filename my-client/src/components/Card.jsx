import React from 'react'
import ItemTypes from './ItemTypes'
import { useDrag } from 'react-dnd'
import { ServiceApi } from '../service'

function Card(props) {

  const close= async ()=>{
     let tab=document.getElementById(props.item._id);
      
     tab.style.display="none";
     
     await ServiceApi.delete_entry({_id: props.item._id});
  }

  const [, drag] = useDrag({
    item: { type: ItemTypes.CARD, category: props.category, ...props.item },
    /* collect: monitor => ({
      isDragging: monitor.isDragging()
    }) */
  });

return <div ref={drag} className="card" id={props.item._id}>
  {props.item.content}
  {props.category !=="rw" ? <span className="close" onClick={close}>x</span>:" "}
  </div>
 
}

export default Card
