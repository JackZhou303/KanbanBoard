import React, { useState, useEffect } from "react";
import Card from "./Card";
import DropWrapper from "./DropWrapper";
import Col from "./Col";
import { data, categories} from "./data";
import { ServiceApi } from '../service';


const Board = () => {

    const [items, setItems] = useState([]);
    const [index, setIndex] =useState(0);
    console.log(items)

    useEffect(() => {
        async function fetchData() {
 
        if(items.length===0){
            const all_cards= await ServiceApi.get_all_data();
            console.log(all_cards.length);
            setItems(all_cards);
            setIndex(all_cards.length);
        }
        console.log(index);
        console.log("effect");
    }
    fetchData();
      }, []);

    const onDrop = async (item, monitor, category) => {

  
        setItems(prevState=>{
            console.log(prevState)
            let newItems;
            if(item.category==="rw"){
                setIndex(index+1);
                item.id=index+1;
                console.log(item);
                newItems = prevState
                .filter(i => i.id !== item.id)
                .concat({ ...item, category});

            } else {
            newItems = prevState.filter(i => i.id !== item.id)
            .concat({...item, category});

            }
            
            return [...newItems];

        });

        if(item.category==="rw"){
            await ServiceApi.insert_single_data({
                id: index+1,
                category: category,
                content: item.content,
                type : item.type});
        }
        else{
            await ServiceApi.update_category({
                _id: item._id,
                category: category});
        }

       /*  const responseJson = await ServiceApi.insert_single_data({
            id: 1,
            category: "rw",
            content: "Sandwich",
            type :"card"}); */

        /* const all_cards= await ServiceApi.get_all_data();
           console.log(all_cards); */    
    };


    return (
        <div className={"row"}>
            {categories.map(c => {
                return (
                 <div key={c.category} className="col-wrapper">
                    <div className="board">

                    <h2 className={"col-header"}>{c.category.toUpperCase()}</h2>
                    {c.category!=="rw" ? 
                        <DropWrapper onDrop={onDrop} category={c.category}>
                            <Col>
                                { items.filter(i => i.category === c.category)
                                .map(i => <Card key={i.id} id={i.id} item={i} category={c.category} />)
                                }
                            </Col>
                        </DropWrapper>
                        :<Col>
                        { items.filter(i => i.category === c.category)
                        .map(i => <Card key={i.id} id={i.id} item={i} category={c.category} />)
                        }
                    </Col>}
                    </div>
            
           </div>
           )})}
        </div>

    );
};

export default Board;