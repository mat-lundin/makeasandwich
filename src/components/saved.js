import React, {useState} from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const Saved = () => {
    const [saved, setSaved] = useState(JSON.parse(window.localStorage.getItem('saved')))
    
    function remove(index){
        const newSaved = saved;
        newSaved.splice(index,1);
        setSaved(newSaved)
        window.localStorage.setItem('saved',JSON.stringify(saved))
        
    }

    return (
        <main>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Ingredients</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {saved.map((item,index) => {
                    return (<tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.ingredients}</td>
                        <td><Button>Load</Button></td>
                        <td><Button onClick={()=>remove(index)}>Remove</Button></td>
                    </tr>)
})}
                </tbody>

            </Table>
            <Button href='/'>Back</Button>
        </main>
    )
}

export default Saved