import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';

const ingredientList = [{
    id: 0,
    name: 'white bread',
    type: 'bread'
},
{
    id: 1,
    name: 'lettuce',
    type: 'veg'
},
{
    id: 2,
    name: 'tomato',
    type: 'veg'
},
{
    id: 3,
    name: 'bacon',
    type: 'meat'
},
{
    id: 4,
    name: 'mustard',
    type: 'condiment'
},
{
    id: 5,
    name: 'cheddar',
    type: 'cheese'
}];

const Ingredients = (props)=>{
    // function onAdd(ingredient){
    //     props.setSandwich(prevSandwich=>{
    //         return {
    //             prevSandwich,
    //             ingredients: [...prevSandwich.ingredients, ingredient]
    //         }
    //     })
    // }

    return(
        <div className='ingredients'>
        <h3>Ingredients</h3>
        <ListGroup>
        {ingredientList.map((ing, index)=>{
            return(
                <ListGroup.Item key={index}>{ing.name}<Button onClick={console.log('click')}>Add</Button></ListGroup.Item>
            )
        })}
        </ListGroup>
        </div>
    )
}

export default Ingredients