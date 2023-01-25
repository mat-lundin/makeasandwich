import CurrentSandwich from '../components/CurrentSandwich';
import Ingredients from '../components/Ingredients';
import React, { useState, useEffect } from 'react';

function Home(){
    const [sandwich, setSandwich] = useState({
        id: 0,
        name: 'My Sandwich',
        ingredients: ['bread','bacon','lettuce','tomato','bread'],
        starred: false
    })

    function onAdd(ingredient){
        console.log(ingredient)
        setSandwich(prevSandwich=>{
            return {
                ...prevSandwich,
                ingredients: [...prevSandwich.ingredients, ingredient]
            }
        })
    }

    return(
        <main>
        <CurrentSandwich 
        sandwich={sandwich}
        />
        <Ingredients 
        sandwich={sandwich}
        add={onAdd}
        />
        </main>
    )
}
export default Home