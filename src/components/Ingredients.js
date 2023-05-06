import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';

const Ingredients = (props) => {

    // state of ingredient search term
    const [ingSearch, setIngSearch] = useState('');

    // update search state
    function updateIngSearch(val) {
        setIngSearch(val);
    };

    return (
        <div className='ingredients'>
            <div className='header'>
                <h2>Ingredients</h2>
                <Form.Control type="text" id="ingSearch" placeholder='Search' onFocus={(e) => e.target.select()} autoComplete={'off'} onChange={(e) => updateIngSearch(e.target.value)}></Form.Control>
            </div>
            <div className='ingredientTable'>
                <Table id="ingTable" borderless hover size="sm">
                    <tbody>
                        {props.ingredients.map((ing, index) => {
                            if (ing.name.toLowerCase().includes(ingSearch) || ing.type.toLowerCase().includes(ingSearch)) {
                                return (
                                    <tr key={index}>
                                        <td id="ingName">{ing.name}</td>
                                        <td><img className='ingIcon' src={props.displayIngIcon(ing.id)} alt="ingredient icon"></img></td>
                                        <td><Button onClick={() => props.add(ing)}>Add</Button></td>
                                    </tr>
                                )
                            }
                            return null
                        })}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Ingredients