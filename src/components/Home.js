import CurrentSandwich from '../components/CurrentSandwich';
import Ingredients from './Ingredients';
import Saved from './Saved';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

function Home(){
    const breadImg = process.env.PUBLIC_URL + "/ingredients/bread.png";
const condimentImg = process.env.PUBLIC_URL + "/ingredients/condiment.png";
const vegImg = process.env.PUBLIC_URL + "/ingredients/lettuce.png";
const meatImg = process.env.PUBLIC_URL + "/ingredients/meat.png";
const cheeseImg = process.env.PUBLIC_URL + "/ingredients/cheese.png";


// all ingredient options
const [ingredientList,setIngredientList] = useState( [{
    id: 0,
    name: 'white bread',
    type: 'bread',
    icon: breadImg
},
{
    id: 1,
    name: 'lettuce',
    type: 'veg',
    icon: vegImg
},
{
    id: 2,
    name: 'tomato',
    type: 'veg',
    icon: vegImg
},
{
    id: 3,
    name: 'bacon',
    type: 'meat',
    icon: meatImg
},
{
    id: 4,
    name: 'mustard',
    type: 'condiment',
    icon: condimentImg
},
{
    id: 5,
    name: 'cheddar',
    type: 'cheese',
    icon: cheeseImg
}]);

// set current sandwich
const [sandwich, setSandwich] = useState({
    id: 0,
    name: 'My Sandwich',
    ingredients: [],
    starred: false
});

    // add ingredient to sandwich
    function onAdd(ingredient){
        console.log(ingredient)
        setSandwich(prevSandwich=>{
            return {
                ...prevSandwich,
                ingredients: [...prevSandwich.ingredients, ingredient.id]
            }
        })
    };

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
    };

    // display ingredient name on current sandwich
    function displayIngName(id){
        
       return ingredientList.find(obj=> obj.id === id).name;
    }

    // display ingredient icon on current sandwich
    function displayIngIcon(id){
        console.log(`ingIcon id = ${id}`)
        return ingredientList.find(obj=> obj.id === id).icon;

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
    };

    // add sandwich to saved list
    function onSave(){
        const oldSaved = JSON.parse(window.localStorage.getItem('saved'));
        const saved = oldSaved || [];
        saved.push(sandwich);
        window.localStorage.setItem("saved",JSON.stringify(saved));
    };

    return(
        <main>
        <CurrentSandwich 
        sandwich={sandwich}
        displayIngName={displayIngName}
        displayIngIcon={displayIngIcon}
        remove={onRemove}
        updateName={updateName}
        save={onSave}
        />
        <Ingredients 
        ingredients={ingredientList}
        sandwich={sandwich}
        add={onAdd}
        />
        <Saved
        displayIngName={displayIngName}
        displayIngIcon={displayIngIcon}
        />
        <Button href="/saved">Saved Sandwiches</Button>
        </main>
    )
};
export default Home