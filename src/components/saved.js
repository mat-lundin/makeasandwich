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
            return newSaved
        });
        console.log(saved)
        window.localStorage.setItem('saved',JSON.stringify(saved));
        
    }

    // display ingredients in a nice way
    function listIngredients(ingredients){

    }

    return (
        <main>
            <Table striped bordered hover>
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
                    return (<tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.ingredients.map((id)=>{return <>{props.displayIngName(id)}<img className='ingIcon' src={props.displayIngIcon(id)}></img></>})}</td>
                        <td>{item.starred}</td>
                        <td><Button>Load</Button></td>
                        <td><Button onClick={()=>remove(index)}>Remove</Button></td>
                    </tr>)
})}
                </tbody>

            </Table>
        </main>
    )
}

export default Saved