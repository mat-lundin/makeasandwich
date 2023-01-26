import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

const CurrentSandwich = (props)=> {
    return (
        <div>
        <h3>{props.sandwich.name}</h3>
        <ListGroup>
            {props.sandwich.ingredients.map((ing,index)=>{
                return(
                <ListGroup.Item key={index}>{ing}<Button onClick={()=>props.remove(index)}>Remove</Button></ListGroup.Item>
                )
            })}
        </ListGroup>
        </div>
    )
}

export default CurrentSandwich;