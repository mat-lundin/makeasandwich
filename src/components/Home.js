import CurrentSandwich from '../components/CurrentSandwich';
import Ingredients from '../components/Ingredients';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

function Home(){
    const [sandwich, setSandwich] = useState({
        id: 0,
        name: 'My Sandwich',
        ingredients: ['bread','bacon','lettuce','tomato','bread'],
        starred: false
    })

    // add ingredient to sandwich
    function onAdd(ingredient){
        console.log(ingredient)
        setSandwich(prevSandwich=>{
            return {
                ...prevSandwich,
                ingredients: [...prevSandwich.ingredients, ingredient]
            }
        })
    }

    // remove ingredient from sandwich
    function onRemove(index){
        console.log(index)
        const newIng = [...sandwich.ingredients];
        newIng.splice(index,1)
        setSandwich(prevSandwich=>{
            return {
                ...prevSandwich,
                ingredients: newIng
            }
        })
    }

    // update the name of the current sandwich
    function updateName(name){
        // let name = document.getElementById('name');
        //         name = name.value
        setSandwich(prevSandwich=>{
            return {
                ...prevSandwich,
                name: name
            }
        })
    }

    // add sandwich to saved list
    function onSave(){
        const oldSaved = JSON.parse(window.localStorage.getItem('saved'));
        const saved = oldSaved || [];
        saved.push(sandwich);
        window.localStorage.setItem("saved",JSON.stringify(saved));
    }

    return(
        <main>
        <CurrentSandwich 
        sandwich={sandwich}
        remove={onRemove}
        updateName={updateName}
        save={onSave}
        />
        <Ingredients 
        sandwich={sandwich}
        add={onAdd}
        />
        
        <Button href="/saved">Saved Sandwiches</Button>
        </main>
    )
}
export default Home