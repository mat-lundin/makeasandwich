import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';

const breadImg = process.env.PUBLIC_URL + "/ingredients/bread.png";
const condimentImg = process.env.PUBLIC_URL + "/ingredients/condiment.png";
const vegImg = process.env.PUBLIC_URL + "/ingredients/lettuce.png";
const meatImg = process.env.PUBLIC_URL + "/ingredients/meat.png";
const cheeseImg = process.env.PUBLIC_URL + "/ingredients/cheese.png";

// all ingredient options
const ingredientList = [{
    id: 0,
    name: 'white bread',
    type: 'bread',
    icon: breadImg
},
{
    id: 1,
    name: 'lettuce',
    type: 'veg',
    icon: vegImg
},
{
    id: 2,
    name: 'tomato',
    type: 'veg',
    icon: vegImg
},
{
    id: 3,
    name: 'bacon',
    type: 'meat',
    icon: meatImg
},
{
    id: 4,
    name: 'mustard',
    type: 'condiment',
    icon: condimentImg
},
{
    id: 5,
    name: 'cheddar',
    type: 'cheese',
    icon: cheeseImg
}];

const Ingredients = (props)=>{
console.log('ingredients rendered')

    return(
        <div className='ingredients'>
        <h3>Ingredients</h3>
        <ListGroup>
        {ingredientList.map((ing, index)=>{
            return(
                <ListGroup.Item key={index}>{ing.name}<img className='ingIcon' src={ing.icon}></img><Button onClick={()=>props.add(ing.name)}>Add</Button></ListGroup.Item>
            )
        })}
        </ListGroup>
        </div>
    )
}

export default Ingredients