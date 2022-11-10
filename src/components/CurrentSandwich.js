import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

const CurrentSandwich = ()=> {
    const [sandwich, setSandwich] = useState({
        id: 0,
        name: 'My Sandwich',
        ingredients: ['bread','bacon','lettuce','tomato','bread'],
        starred: false
    })
    return (
        <>
        <h3>{sandwich.name}</h3>
        <ListGroup>
            {sandwich.ingredients.map((ing,index)=>{
                return(
                <ListGroup.Item key={index}>{ing}<Button>Remove</Button></ListGroup.Item>
                )
            })}
        </ListGroup>
        </>
    )
}

export default CurrentSandwich;