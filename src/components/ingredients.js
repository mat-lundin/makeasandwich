import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

const Ingredients = (props)=>{
console.log('ingredients rendered')

// state of ingredient search term
const [ingSearch, setIngSearch] = useState('')

// update search state
function updateIngSearch(val){
    setIngSearch(val);
    console.log(`ingSearch = ${ingSearch}`)
}

    return(
        <div className='ingredients'>
        <h2>Ingredients</h2>
        <Form.Control type="text" id="name" placeholder='Search' onFocus={(e)=>e.target.select()} autoComplete={'off'} onChange={(e)=> updateIngSearch(e.target.value)}></Form.Control>
        <ListGroup>
        {props.ingredients.map((ing, index)=>{
            if (ing.name.toLowerCase().includes(ingSearch) || ing.type.toLowerCase().includes(ingSearch))
            {return(
                <ListGroup.Item key={index}>{ing.name} <img className='ingIcon' src={ing.icon}></img><Button onClick={()=>props.add(ing)}>Add</Button></ListGroup.Item>
            )}
        })}
        </ListGroup>
        </div>
    )
}

export default Ingredients