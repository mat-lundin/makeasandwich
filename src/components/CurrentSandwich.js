import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

const CurrentSandwich = (props)=> {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='curSand'>
            <h2>Current Sandwich</h2>
        <Form onSubmit={(event)=>{
            event.preventDefault();
          }}>
            <Form.Control type="text" id="name" value={props.sandwich.name} onFocus={(e)=>e.target.select()} onContextMenu={(e)=> e.preventDefault()} autoComplete={'off'} onChange={(e)=> props.updateName(e.target.value)}></Form.Control>
        </Form>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Oops!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Add some ingredients in order to save your sandwich!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        <ListGroup>
            {props.sandwich.ingredients.map((ing,index)=>{
                return(
                <ListGroup.Item key={index}>{props.displayIngName(ing)}<img className='ingIcon' src={props.displayIngIcon(ing)}></img><Button onClick={()=>props.remove(index)}>Remove</Button></ListGroup.Item>
                )
            })}
        </ListGroup>
        <Button variant="success" size='lg' onClick={props.sandwich.ingredients.length<1? handleShow : props.save}>Save</Button>
        <Button variant="danger" size='sm' onClick={()=>props.clearCurrent()}>Clear</Button>{' '}
        </div>
    )
}

export default CurrentSandwich;