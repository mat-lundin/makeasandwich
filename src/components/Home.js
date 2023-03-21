import CurrentSandwich from '../components/CurrentSandwich';
import Ingredients from './Ingredients';
import Saved from './Saved';
import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';

function Home(){
const breadImg = process.env.PUBLIC_URL + "images/ingredients/bread.png";
const condimentImg = process.env.PUBLIC_URL + "images/ingredients/condiment.png";
const vegImg = process.env.PUBLIC_URL + "images/ingredients/lettuce.png";
const meatImg = process.env.PUBLIC_URL + "images/ingredients/meat.png";
const cheeseImg = process.env.PUBLIC_URL + "images/ingredients/cheese.png";
const tomatoImg = process.env.PUBLIC_URL + "images/ingredients/tomato.png"


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
    icon: tomatoImg
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
},
{
    id: 5,
    name: 'ketchup',
    type: 'condiment',
    icon: condimentImg
},
{
    id: 6,
    name: 'mayonnaise',
    type: 'condiment',
    icon: condimentImg
},
{
    id: 7,
    name: 'olive oil',
    type: 'condiment',
    icon: condimentImg
},
{
    id: 8,
    name: 'Italian dressing',
    type: 'condiment',
    icon: condimentImg
},
{
    id: 9,
    name: 'pickles',
    type: 'veg',
    icon: vegImg
},
{
    id: 10,
    name: 'brie',
    type: 'cheese',
    icon: cheeseImg
},
{
    id: 11,
    name: 'american cheese',
    type: 'cheese',
    icon: cheeseImg
},
{
    id: 12,
    name: 'balsamic vinegarette',
    type: 'condiment',
    icon: condimentImg
},
{
    id: 13,
    name: 'apple',
    type: 'veg',
    icon: vegImg
},]);

// set current sandwich
const [sandwich, setSandwich] = useState({
    id: uniqid(),
    name: 'New Sandwich',
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
        setSandwich((prevSandwich)=>{
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
        clearCurrent();
    };

        // clear ingredients from current sandwich
        function clearCurrent(){
            setSandwich((prevSandwich)=> {
                return {...prevSandwich,
                name: 'New Sandwich',
                ingredients: []};
            })
        }

    return(
        <main>
        <CurrentSandwich 
        sandwich={sandwich}
        setSandwich={setSandwich}
        clearCurrent={clearCurrent}
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
        currentSandwich={sandwich}
        setSandwich={setSandwich}
        />
        </main>
    )
};
export default Home