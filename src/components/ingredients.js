import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';

const Ingredients = (props)=>{
console.log('ingredients rendered')

    return(
        <div className='ingredients'>
        <h2>Ingredients</h2>
        <ListGroup>
        {props.ingredients.map((ing, index)=>{
            return(
                <ListGroup.Item key={index}>{ing.name}<img className='ingIcon' src={ing.icon}></img><Button onClick={()=>props.add(ing)}>Add</Button></ListGroup.Item>
            )
        })}
        </ListGroup>
        </div>
    )
}

export default Ingredients