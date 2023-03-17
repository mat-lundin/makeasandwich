import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const CurrentSandwich = (props)=> {
    return (
        <div className='curSand'>
            <h2>Current Sandwich</h2>
        <Form onSubmit={(event)=>{
            event.preventDefault();
            console.log(event.target.value)}}>
            <Form.Control type="text" id="name" defaultValue={props.sandwich.name} onChange={(e)=> e.target.value}></Form.Control>
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
        <ListGroup>
            {props.sandwich.ingredients.map((ing,index)=>{
                return(
                <ListGroup.Item key={index}>{props.displayIngName(ing)}<img className='ingIcon' src={props.displayIngIcon(ing)}></img><Button onClick={()=>props.remove(index)}>Remove</Button></ListGroup.Item>
                )
            })}
        </ListGroup>
        <Button variant="success" size='lg' onClick={()=>props.save()}>Save</Button>
        <Button variant="danger" size='sm'>Clear</Button>{' '}
        </div>
    )
}

export default CurrentSandwich;