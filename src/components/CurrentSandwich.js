import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import { useState } from 'react';

const CurrentSandwich = (props)=> {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // if same name as previously saved, prompt user to replace or pick a different name
    function handleSave(){
      const savedNames = props.saved.map((sandwich,index)=>{
        return sandwich.name;
      });
      console.log(`savedNames = ${savedNames}`)
      if (props.sandwich.ingredients.length<1){
        handleShow();
      } else if (savedNames.includes(props.sandwich.name)){
        alert('Same Name as previously saved')
      } else {
        props.save()
      }
    }
    return (
        <div className='cursand'>
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
        <Table id="curIngTable" borderless hover size="sm">
          <tbody>
            {props.sandwich.ingredients.map((ing,index)=>{
                return(
                  <tr key={index}>
                    <td>{props.displayIngName(ing)}</td>
                    <td><img className='ingIcon' src={props.displayIngIcon(ing)} alt="ingredient icon"></img></td>
                    <td><Button onClick={()=>props.remove(index)}>Remove</Button></td>
                  </tr>
                )
            })}
            </tbody>
            </Table>
            <Table className="saveclearbtns" borderless size="sm">
              <tbody>
                <tr>
        <td><Button variant="success" size='lg' onClick={()=>handleSave()}>Save</Button></td>
        <td><Button id='clearbtn' variant="danger" size='sm' onClick={()=>props.clearCurrent()}>Clear</Button>{' '}</td>
        </tr>
        </tbody>
        </Table>
        </div>
    )
}

export default CurrentSandwich;