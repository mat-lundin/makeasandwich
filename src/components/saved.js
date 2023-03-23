import React, {useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const Saved = (props) => {
// update local storage whenever the component renders
useEffect(()=>{
    window.localStorage.setItem('saved',JSON.stringify(props.saved))
}, [props.saved]
)

    // toggle whether the sandwich is starred
    function toggleStar(index){
        const updatedSandwich = props.saved[index];
        updatedSandwich.starred = !updatedSandwich.starred;
        const newSaved = [...props.saved];
        newSaved.splice(index,1);
        newSaved.splice(index,0,updatedSandwich);
        props.setSaved(()=>{
            return newSaved;
        });
    }

    // load saved sandwich to current sandwich
    function loadSandwich(item){
        props.setSandwich(()=> {
            return item
        });
    }

    return (
        <main className='saved'>
            <h2>Saved Sandwiches</h2>
            <Table striped borderless hover className='savedTable'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Ingredients</th>
                        <th>Favorite</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {props.saved.length >0 && props.saved.map((item,index) => {
                    return (<tr  key={index}>
                        <td>{item.name}</td>
                        <td>{item.ingredients.map((id, index)=>{return(<div className='savedIng' key={index}> {props.displayIngName(id)}<img className='ingIcon' src={props.displayIngIcon(id)}></img></div>)})}</td>
                        <td className='starred' onClick={()=>toggleStar(index)}>{item.starred && <img className='starImg' src={process.env.PUBLIC_URL+'./images/ingredients/star.png'}></img>}</td>
                        <td><Button variant='info' onClick={()=>loadSandwich(item)}>Load</Button></td>
                        <td><Button variant='danger' onClick={()=>props.removeFromSaved(item)}>Remove</Button></td>
                    </tr>)
})}
                </tbody>

            </Table>
        </main>
    )
}

export default Saved