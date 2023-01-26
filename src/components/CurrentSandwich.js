import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getValue } from '@testing-library/user-event/dist/utils';

const CurrentSandwich = (props)=> {
    return (
        <div>
        {/* <h3>{props.sandwich.name}</h3> */}
        <Form onSubmit={()=>props.updateName()}>
            <Form.Control type="text" id="name" defaultValue={props.sandwich.name}></Form.Control>
            <Button variant="primary" type="submit" onClick={()=>{
                }}>Submit</Button>
        </Form>
        <ListGroup>
            {props.sandwich.ingredients.map((ing,index)=>{
                return(
                <ListGroup.Item key={index}>{ing}<Button onClick={()=>props.remove(index)}>Remove</Button></ListGroup.Item>
                )
            })}
        </ListGroup>
        <Button onClick={()=>props.save()}>Save</Button>
        </div>
    )
}

export default CurrentSandwich;