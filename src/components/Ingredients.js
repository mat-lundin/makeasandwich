import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';

const Ingredients = (props)=>{

// state of ingredient search term
const [ingSearch, setIngSearch] = useState('');

const initSearchedIng = props.ingredients;

// state of current ingredients based on search term
const [searchedIng, setSearchedIng] = useState(initSearchedIng);
console.log(`searchedIng = ${typeof(searchedIng[0].name)}`)

// update searchedIng state based on name and type matches
useEffect(()=>{
    const oldSearchedIng = [...searchedIng];
    console.log(`oldSearchedIng = ${oldSearchedIng[0].name}`)
    setSearchedIng( oldSearchedIng.map((ing, index)=>{
        const name = ing.name.toLowerCase();
        const type = ing.type.toLowerCase();
        if (name.includes(ingSearch) || type.includes(ingSearch)){
            return ing
        } else {
            return null
        }
    }))
}, [ingSearch])

// update search state
function updateIngSearch(val){
    setIngSearch(val);
};

    return(
        <div className='ingredients'>
        <h2>Ingredients</h2>
        <Form.Control type="text" id="ingSearch" placeholder='Search' onFocus={(e)=>e.target.select()} autoComplete={'off'} onChange={(e)=> updateIngSearch(e.target.value)}></Form.Control>
        <Table id="ingTable" borderless hover size="sm">
            <tbody>
        {searchedIng.map((ing, index)=>{
            return(
            <tr key={index}>
                <td id="ingName">{ing.name}</td>
                <td><img className='ingIcon' src={ing.icon} alt="ingredient icon"></img></td>
                <td><Button onClick={()=>props.add(ing)}>Add</Button></td>
            </tr>
            )
        })}
        </tbody>
        </Table>
        </div>
    )
}

export default Ingredients