import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import { useState } from 'react';

const CurrentSandwich = (props)=> {
  // state for displaying modal for no ingredients added upon save
    const [showNoIng, setShowNoIng] = useState(false);

    const handleCloseNoIng = () => setShowNoIng(false);
    const handleShowNoIng = () => setShowNoIng(true);

    // state for display modal on same name on save
    const [showSameName, setShowSameName] = useState(false);

    const handleCloseSameName = () => setShowSameName(false);
    const handleShowSameName = () => setShowSameName(true);

    // state for displaying modal for are you sure after clicking replace
    const [showSure, setShowSure] = useState(false);

    const handleCloseSure = () => setShowSure(false);
    const handleShowSure = () => setShowSure(true);

    // if same name as previously saved, prompt user to replace or pick a different name
    function handleSave(){
      const savedNames = props.saved.map((sandwich)=>{
        return sandwich.name;
      });
      if (props.sandwich.ingredients.length<1){
        handleShowNoIng();
      } else if (savedNames.includes(props.sandwich.name)){
        handleShowSameName();
      } else {
        props.save();
      }
    };

    function handleReplace(){
      props.replaceSaved();
      handleCloseSameName();
      props.clearCurrent();
    }

    return (
        <div className='cursand'>
            <h2>Current Sandwich</h2>
        <Form onSubmit={(event)=>{
            event.preventDefault();
          }}>
            <Form.Control type="text" id="name" value={props.sandwich.name} onFocus={(e)=>e.target.select()} onContextMenu={(e)=> e.preventDefault()} autoComplete={'off'} onChange={(e)=> props.updateName(e.target.value)}></Form.Control>
        </Form>
        <Modal show={showNoIng} onHide={handleCloseNoIng}>
        <Modal.Header closeButton>
          <Modal.Title>Oops!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Add some ingredients in order to save your sandwich!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseNoIng}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showSameName} onHide={handleCloseSameName}>
        <Modal.Header closeButton>
          <Modal.Title>Hold the mayo!</Modal.Title>
        </Modal.Header>
        <Modal.Body>You already have a sandwich with the name {props.sandwich.name}. <br></br>Replace this sandwich?</Modal.Body>
        <Modal.Footer>
          <Button variant='warning' onClick={handleReplace}>
            Replace
            </Button>
          <Button variant="secondary" onClick={handleCloseSameName}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showSure} onHide={handleCloseSure}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Replace the existing sandwich named {props.sandwich.name}?</Modal.Body>
        <Modal.Footer>
          <Button variant='success' onClick={handleReplace}>
            Replace
            </Button>
          <Button variant="secondary" onClick={handleCloseSure}>
            Cancel
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