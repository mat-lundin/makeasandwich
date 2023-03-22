import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

const Ingredients = (props)=>{
console.log('ingredients rendered')

// state of ingredient search term
const [ingSearch, setIngSearch] = useState('')
    return(
        <div className='ingredients'>
        <h2>Ingredients</h2>
        <Form.Control type="text" id="name" placeholder='Search' onFocus={(e)=>e.target.select()}></Form.Control>
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