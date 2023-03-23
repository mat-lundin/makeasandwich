import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';

const Ingredients = (props)=>{

// state of ingredient search term
const [ingSearch, setIngSearch] = useState('');

// update search state
function updateIngSearch(val){
    setIngSearch(val);
};

    return(
        <div className='ingredients'>
        <h2>Ingredients</h2>
        <Form.Control type="text" id="name" placeholder='Search' onFocus={(e)=>e.target.select()} autoComplete={'off'} onChange={(e)=> updateIngSearch(e.target.value)}></Form.Control>
        <Table id="ingTable" borderless={true} hover size="sm">
            <tbody>
        {props.ingredients.map((ing, index)=>{
            if (ing.name.toLowerCase().includes(ingSearch) || ing.type.toLowerCase().includes(ingSearch))
            {return(
            <tr key={index}>
                <td id="ingName">{ing.name}</td>
                <td><img className='ingIcon' src={ing.icon}></img></td>
                <td><Button onClick={()=>props.add(ing)}>Add</Button></td>
            </tr>
            )}
        })}
        </tbody>
        </Table>
        </div>
    )
}

export default Ingredients