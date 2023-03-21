import React, {useState} from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const Saved = (props) => {
    const [saved, setSaved] = useState(JSON.parse(window.localStorage.getItem('saved')))
    
    // remove sandwich from saved
    function remove(index){
        console.log(`remove index = ${index}`)
        const newSaved = [...saved];
        newSaved.splice(index,1);
        console.log(`newSaved = ${newSaved}`)
        setSaved(()=>{
            return []
        });
        setSaved(()=>{
            return newSaved
        });
        console.log(saved)
        window.localStorage.removeItem('saved')
        window.localStorage.setItem('saved',JSON.stringify(saved));
        
    }

    // toggle whether the sandwich is starred
    function toggleStar(index){
        const updatedSandwich = saved[index];
        updatedSandwich.starred = !updatedSandwich.starred;
        const newSaved = [...saved];
        newSaved.splice(index,1);
        newSaved.splice(index,0,updatedSandwich);
        setSaved(()=>{
            return newSaved;
        });
        window.localStorage.setItem('saved',JSON.stringify(saved));
    }

    return (
        <main className='saved'>
            <h2>Saved Sandwiches</h2>
            <Table striped bordered hover className='savedTable'>
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
                {saved.map((item,index) => {
                    return (<tr  key={index}>
                        <td>{item.name}</td>
                        <td>{item.ingredients.map((id, index)=>{return(<div className='savedIng' key={index}> {props.displayIngName(id)}<img className='ingIcon' src={props.displayIngIcon(id)}></img></div>)})}</td>
                        <td onClick={()=>toggleStar(index)}>{item.starred && <img className='starImg' src={process.env.PUBLIC_URL+'./images/ingredients/star.png'}></img>}</td>
                        <td><Button variant='info'>Load</Button></td>
                        <td><Button variant='danger' onClick={()=>remove(index)}>Remove</Button></td>
                    </tr>)
})}
                </tbody>

            </Table>
        </main>
    )
}

export default Saved